/*
 * @Author: aFei
 * @Date: 2022-11-17 14:27:47
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-11-29 17:58:10
*/
<template>
  <div
    :class="['vue-drag-menu-plus', isMove ? 'move-ing' : '']"
    ref="parentRef"
  >
    <div
      class="menu-item"
      v-for="(item, index) in menuList"
      :title="item.title"
      :style="{
        ...item.style,
        left: item.left + 'px',
        top: item.top + 'px',
      }"
      :key="index"
      @mousedown="index === 0 && isPC ? moveBegin() : null"
      @touchstart="index === 0 && !isPC ? moveBegin() : null"
      @click="index !== 0 && !isMove ? showMenu(index) : null"
    >
      <el-icon v-if="item.icon.split('/')[0] === 'el'">
        <component :is="item.icon.split('/')[1]" />
      </el-icon>
      <i
        :class="['icon iconfont', 'icon-' + item.icon.split('/')[1]]"
        v-else-if="item.icon.split('/')[0] === 'iconfont'"
      />
      <i :class="item.icon.split('/')[0]" v-else>
        {{ item.icon.split("/")[1] }}
      </i>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
  name: "vueDragMenuPlus",
  emits: ["click"],
  props: {
    // 按钮数据
    list: {
      type: Array,
      default: () => {
        return [
          {
            icon: "icon-insert icon-setting",
            title: "菜单",
            style: {
              background: "#fff",
              color: "",
            },
          },
          {
            icon: "icon-insert icon-myCenter",
            style: {
              background: "rgb(255, 92, 92)",
            },
          },
          {
            icon: "icon-insert icon-notice",
            style: {
              background: "rgb(92, 209, 255)",
            },
          },
          {
            icon: "icon-insert icon-expression",
            style: {
              background: "rgb(255, 241, 92)",
            },
          },
          {
            icon: "icon-insert icon-collection",
            style: {
              background: "rgb(100, 245, 146)",
            },
          },
        ];
      },
    },
    // 非第一个的按钮点击时是否需要收起菜单
    closeOnClick: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { attrs, slots, emit, expose }) {
    let menuList = ref([]);
    // 父元素对象
    let parentRef = ref(null);
    // 第一个子元素对象
    let _first = ref(null);
    // 元素的宽
    let ITEMWIDTH = ref(null);
    // 元素的高
    let ITEMHEIGHT = ref(null);
    // 检测拖拽动画结束定时器
    let ENDTIME = ref(null);
    // 步数间隔=实际间隔+1
    let STEP = ref(6);
    // 上下跳动距离
    let MOVEBETWEEN = ref(10);
    // 根据屏幕尺寸改变的固定值
    // 屏幕最大宽
    let WINDOWWIDTH = ref(null);
    // 屏幕最大高
    let WINDOWHEIGHT = ref(null);
    // 父元素横坐标
    let FATHERX = ref(null);
    // 父元素纵坐标
    let FATHERY = ref(null);
    // 改变页面大小可移动最大宽
    let STATICWIDTH = ref(null);
    // 改变页面大小可移动最大高
    let STATICHEIGHT = ref(null);
    // 元素当前left值
    let NOWX = ref(null);
    // 元素当前top值
    let NOWY = ref(null);
    // 动态改变的值
    // 移动状态
    let isMove = ref(false);
    // 开始横坐标
    let beginX = ref(null);
    // 开始纵坐标
    let beginY = ref(null);
    // 拖拽开始前点击的位置距离父元素X
    let clickX = ref(null);
    // 拖拽开始前点击的位置距离父元素Y
    let clickY = ref(null);
    // 移动横坐标
    let moveX = ref(null);
    // 移动时横坐标最小值
    let moveXMin = ref(null);
    // 移动时横坐标最大值
    let moveXMax = ref(null);
    // 移动纵坐标
    let moveY = ref(null);
    // 移动时纵坐标最小值
    let moveYMin = ref(null);
    // 移动时纵坐标最大值
    let moveYMax = ref(null);
    // 判断元素是否需要检查
    let needCheck = ref(false);
    // 是否是PC端
    let isPC = ref(true);
    // 存放位置路径
    let arr = ref([]);
    // 结束横坐标
    let endX = ref(null);
    // 结束横坐标
    let endY = ref(null);
    const hasClass = (ele, className) => {
      return ele.classList
        ? ele.classList.contains(className)
        : new RegExp("\\s" + className + "\\s").test(" " + ele.className + " ");
    };
    // 查找子元素
    const findByClass = (ele, className) => {
      let result = [];
      let depth = (arr) => {
        arr.forEach((item) => {
          if (hasClass(item, className)) {
            result.push(item);
          }
          if (item.childNodes && item.childNodes.length > 0) {
            depth(item.childNodes);
          }
        });
      };
      depth(ele.childNodes);
      return result;
    };
    // 执行动画效果，模拟JQ.animate()
    const lessAnimate = (item, obj, time) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          for (const keys in obj) {
            item[keys] = obj[keys];
          }
          resolve();
        }, time);
      });
    };
    // 向上展开
    const toTop = () => {
      menuList.value.forEach(async (item, index) => {
        if (index > 0) {
          // 已展开时，收起
          if (needCheck.value) {
            await lessAnimate(
              item,
              { top: endY.value + MOVEBETWEEN.value },
              40
            );
            await lessAnimate(
              item,
              { top: endY.value - MOVEBETWEEN.value },
              80
            );
            await lessAnimate(item, { top: endY.value }, 50);
          }
          // 已收起时，展开
          else {
            await lessAnimate(
              item,
              {
                top:
                  endY.value -
                  (index * (ITEMHEIGHT.value + MOVEBETWEEN.value) +
                    MOVEBETWEEN.value),
              },
              40
            );
            await lessAnimate(
              item,
              {
                top:
                  endY.value - index * (ITEMHEIGHT.value + MOVEBETWEEN.value),
              },
              100
            );
          }
        }
      });
      needCheck.value = !needCheck.value;
    };
    // 向下展开
    const toBottom = () => {
      menuList.value.forEach(async (item, index) => {
        if (index > 0) {
          // 已展开时，收起
          if (needCheck.value) {
            await lessAnimate(
              item,
              { top: endY.value - MOVEBETWEEN.value },
              40
            );
            await lessAnimate(
              item,
              { top: endY.value + MOVEBETWEEN.value },
              80
            );
            await lessAnimate(item, { top: endY.value }, 50);
          }
          // 已收起时，展开
          else {
            await lessAnimate(
              item,
              {
                top:
                  endY.value +
                  (index * (ITEMHEIGHT.value + MOVEBETWEEN.value) +
                    MOVEBETWEEN.value),
              },
              40
            );
            await lessAnimate(
              item,
              {
                top:
                  endY.value + index * (ITEMHEIGHT.value + MOVEBETWEEN.value),
              },
              100
            );
          }
        }
      });
      needCheck.value = !needCheck.value;
    };
    // 向左展开
    const toLeft = () => {
      menuList.value.forEach(async (item, index) => {
        if (index > 0) {
          // 已展开时，收起
          if (needCheck.value) {
            await lessAnimate(
              item,
              { left: endX.value + MOVEBETWEEN.value },
              40
            );
            await lessAnimate(
              item,
              { left: endX.value - MOVEBETWEEN.value },
              80
            );
            await lessAnimate(item, { left: endX.value }, 50);
          }
          // 已收起时，展开
          else {
            await lessAnimate(
              item,
              {
                left:
                  endX.value -
                  (index * (ITEMWIDTH.value + MOVEBETWEEN.value) +
                    MOVEBETWEEN.value),
              },
              40
            );
            await lessAnimate(
              item,
              {
                left:
                  endX.value - index * (ITEMWIDTH.value + MOVEBETWEEN.value),
              },
              100
            );
          }
        }
      });
      needCheck.value = !needCheck.value;
    };
    // 向右展开
    const toRight = () => {
      menuList.value.forEach(async (item, index) => {
        if (index > 0) {
          // 已展开时，收起
          if (needCheck.value) {
            await lessAnimate(
              item,
              { left: endX.value - MOVEBETWEEN.value },
              40
            );
            await lessAnimate(
              item,
              { left: endX.value + MOVEBETWEEN.value },
              80
            );
            await lessAnimate(item, { left: endX.value }, 50);
          }
          // 已收起时，展开
          else {
            await lessAnimate(
              item,
              {
                left:
                  endX.value +
                  (index * (ITEMWIDTH.value + MOVEBETWEEN.value) +
                    MOVEBETWEEN.value),
              },
              40
            );
            await lessAnimate(
              item,
              {
                left:
                  endX.value + index * (ITEMWIDTH.value + MOVEBETWEEN.value),
              },
              100
            );
          }
        }
      });
      needCheck.value = !needCheck.value;
    };
    // 展示\收起菜单
    const showMenu = (index = 0) => {
      emit("click", props.list[index]);
      if (index === 0 || props.closeOnClick) {
        // 距离边界的横纵坐标和距离
        let dealX, dealY, x, y;
        // 当前位置定位
        dealX = _first.value.offsetLeft;
        dealY = _first.value.offsetTop;
        //右边
        if (dealX > 0) {
          // 右上
          if (dealY < 0) {
            x = WINDOWWIDTH.value / 2 - dealX - ITEMWIDTH.value;
            y = WINDOWHEIGHT.value / 2 + dealY;
            if (x + 10 < y) {
              toLeft();
            } else {
              toBottom();
            }
          }
          // 右下
          else {
            x = WINDOWWIDTH.value / 2 - dealX - ITEMWIDTH.value;
            y = WINDOWHEIGHT.value / 2 - dealY - ITEMHEIGHT.value;
            if (x + 10 < y) {
              toLeft();
            } else {
              toTop();
            }
          }
        }
        //左边
        else {
          //左上
          if (dealY < 0) {
            x = WINDOWWIDTH.value / 2 + dealX;
            y = WINDOWHEIGHT.value / 2 + dealY;
            if (x + 10 < y) {
              toRight();
            } else {
              toBottom();
            }
          }
          // 左下
          else {
            x = WINDOWWIDTH.value / 2 + dealX;
            y = WINDOWHEIGHT.value / 2 - dealY - ITEMHEIGHT.value;
            if (x + 10 < y) {
              toRight();
            } else {
              toTop();
            }
          }
        }
      }
    };
    // 检查是否需要收起菜单
    const checkCollapse = () => {
      if (needCheck.value) {
        showMenu(0);
      }
    };
    // 改变非拖拽时最大边界
    const dealMax = () => {
      checkCollapse();
      //屏幕最大内容
      WINDOWWIDTH.value = window.innerWidth;
      WINDOWHEIGHT.value = window.innerHeight;
      console.log(WINDOWWIDTH.value, WINDOWHEIGHT.value, "WINDOWWIDTH");
      //屏幕有效大小
      STATICWIDTH.value = WINDOWWIDTH.value - ITEMWIDTH.value;
      STATICHEIGHT.value = WINDOWHEIGHT.value - ITEMHEIGHT.value;
      console.log(STATICWIDTH.value, STATICHEIGHT.value, "STATICWIDTH");
      //父元素坐标
      FATHERX.value = parentRef.value.offsetLeft;
      FATHERY.value = parentRef.value.offsetTop;
      console.log(FATHERX.value, FATHERY.value, "FATHERX");
      // 元素坐标
      NOWX.value = STATICWIDTH.value - FATHERX.value - 10;
      NOWY.value = STATICHEIGHT.value - FATHERY.value - 10;
      menuList.value.forEach((item) => {
        item.left = NOWX.value;
        item.top = NOWY.value;
      });
    };
    // 拖拽结束或停止动画
    const dragStop = () => {
      // 防止只记录了一步，默认从上到下
      if (arr.value.length > 1) {
        // 最终移动差值
        let x, y;
        // 倒数第二个点
        let x1 = arr.value[arr.value.length - 2].x;
        let y1 = arr.value[arr.value.length - 2].y;
        // 最后一个点
        let x2 = arr.value[arr.value.length - 1].x;
        let y2 = arr.value[arr.value.length - 1].y;
        let differX = Math.abs(x2 - x1);
        let differY = Math.abs(y2 - y1);
        if (differX === 0) {
          x = 0;
          y = MOVEBETWEEN.value;
        } else {
          x = Math.sqrt(
            (Math.pow(MOVEBETWEEN.value, 2) * Math.pow(differX, 2)) /
              (Math.pow(differX, 2) + Math.pow(differY, 2))
          );
          y = (x * differY) / differX;
        }
        menuList.value.forEach((item, index) => {
          if (index > 0) {
            // 全部前进到最后一个点前的状态
            setTimeout(async () => {
              await lessAnimate(item, { left: x1, top: y1 }, 50);
              await lessAnimate(
                item,
                {
                  left: x2 > x1 ? x2 + x : x2 - x,
                  top: y2 > y1 ? y2 + y : y2 - y,
                },
                50
              );
              await lessAnimate(
                item,
                {
                  left: x2 > x1 ? x2 - x : x2 + x,
                  top: y2 > y1 ? y2 - y : y2 + y,
                },
                100
              );
              await lessAnimate(item, { left: x2, top: y2 }, 50);
            }, index * 120);
          }
        });
      }
      arr = [];
    };
    // 鼠标按下
    const moveBegin = () => {
      console.log(event, "moveBegin");
      if (isPC.value) {
        clickX.value = event.offsetX;
        clickY.value = event.offsetY;
      } else {
        clickX.value =
          event.changedTouches[0].clientX -
          WINDOWWIDTH.value / 2 -
          _first.value.offsetLeft;
        clickY.value =
          event.changedTouches[0].clientY -
          WINDOWHEIGHT.value / 2 -
          _first.value.offsetTop;
      }
      console.log();
      beginX.value = _first.value.offsetLeft;
      beginY.value = _first.value.offsetTop;
      moveXMin.value = clickX.value;
      moveXMax.value = STATICWIDTH.value + clickX.value;
      moveYMin.value = clickY.value;
      moveYMax.value = STATICHEIGHT.value + clickY.value;
      arr.value = [];
      //临时保存当前的元素的位置，若元素移动则会被清除
      NOWX.value = beginX.value - FATHERX.value;
      NOWY.value = beginY.value - FATHERY.value;
      isMove.value = true;
      if (isPC.value) {
        window.addEventListener("mousemove", moveIng);
        window.addEventListener("mouseup", moveEnd);
      } else {
        window.addEventListener("touchmove", moveIng);
        window.addEventListener("touchend", moveEnd);
      }
    };
    // 鼠标移动
    const moveIng = () => {
      console.log(event, "moveIng");
      checkCollapse();
      if (isPC.value) {
        moveX.value = event.clientX;
        moveY.value = event.clientY;
      } else {
        moveX.value = event.changedTouches[0].clientX;
        moveY.value = event.changedTouches[0].clientY;
      }
      // 横坐标极限判断
      if (moveX.value < moveXMin.value) {
        NOWX.value = 0 - FATHERX.value;
      } else if (moveX.value > moveXMax.value) {
        NOWX.value = STATICWIDTH.value - FATHERX.value;
      } else {
        NOWX.value = moveX.value - FATHERX.value - clickX.value;
      }
      // 纵坐标极限判断
      if (moveY.value < moveYMin.value) {
        NOWY.value = 0 - FATHERY.value;
      } else if (moveY.value > moveYMax.value) {
        NOWY.value = STATICHEIGHT.value - FATHERY.value;
      } else {
        NOWY.value = moveY.value - FATHERY.value - clickY.value;
      }
      arr.value.push({ x: NOWX.value, y: NOWY.value });
      menuList.value.forEach((item, index) => {
        if (arr.value.length > 1 && arr.value.length > index * STEP.value) {
          item.left = arr.value[arr.value.length - 1 - STEP.value * index].x;
          item.top = arr.value[arr.value.length - 1 - STEP.value * index].y;
        }
      });
      if (arr.value.length > STEP.value * (menuList.value.length - 1) + 1) {
        //节省内存
        arr.value.shift();
      }
      if (ENDTIME.value !== null || ENDTIME.value !== undefined) {
        clearTimeout(ENDTIME.value);
      }
      ENDTIME.value = setTimeout(dragStop, 500);
    };
    // 鼠标松开
    const moveEnd = () => {
      console.log(event, "moveEnd");
      endX.value = _first.value.offsetLeft;
      endY.value = _first.value.offsetTop;
      // 清除多余事件，防止多次绑定
      if (isPC.value) {
        window.removeEventListener("mousemove", moveIng);
        window.removeEventListener("mouseup", moveEnd);
      } else {
        window.removeEventListener("touchmove", moveIng);
        window.removeEventListener("touchend", moveEnd);
      }
      // 为简单单击事件时
      if (beginX.value === endX.value && beginY.value === endY.value) {
        showMenu();
      }
      setTimeout(() => {
        isMove.value = false;
      }, 600);
    };
    onMounted(() => {
      if (menuList.value.length > 0) {
        _first.value = findByClass(parentRef.value, "menu-item")[0];
        ITEMWIDTH.value = _first.value.offsetWidth;
        ITEMHEIGHT.value = _first.value.offsetHeight;
        dealMax();
        window.addEventListener("resize", dealMax);
      }
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", dealMax);
      if (isPC.value) {
        window.removeEventListener("mousemove", moveIng);
        window.removeEventListener("mouseup", moveEnd);
      } else {
        window.removeEventListener("touchmove", moveIng);
        window.removeEventListener("touchend", moveEnd);
      }
    });
    let linCopy = JSON.parse(JSON.stringify(props.list));
    menuList.value = linCopy.map((item, index) => {
      item.left = 0;
      item.top = 0;
      item.style.zIndex = props.list.length + 1 - index;
      return { ...item };
    });
    if (
      /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)
    ) {
      isPC.value = false;
    }
    console.log(menuList.value);
    return {
      menuList,
      parentRef,
      isPC,
      isMove,
      moveBegin,
      showMenu,
    };
  },
};
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>