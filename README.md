# 可拖拽菜单（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-drag-menu '浏览')


## 安装
	npm i vue-drag-menu-plus

## 使用
	import vueDragMenuPlus from "vue-drag-menu-plus";
	import "vue-drag-menu-plus/index.css";
	
	app.use(vueDragMenuPlus);


## 0. 可改动样式变量
* `--menu-item-width`：60px;-->按钮的高度

* `--menu-item-height`：60px;-->按钮的宽度

* `--menu-item-size`：46px;-->图标字体大小


## 1. 参数
* `list`：按钮数据-->Array;非必传;默认如下
>
	// 默认值
	   [
        {
          icon: {
            type: "icon-insert icon-setting"
          },
          title: "菜单",
          style: {
            background: "#fff",
            color: "",
          },
        },
        {
          icon: {
            type: "icon-insert icon-myCenter"
          },
          style: {
            background: "rgb(255, 92, 92)",
          },
        },
        {
          icon: {
            type: "icon-insert icon-notice"
          },
          style: {
            background: "rgb(92, 209, 255)",
          },
        },
        {
          icon: {
            type: "icon-insert icon-expression"
          },
          style: {
            background: "rgb(255, 241, 92)",
          },
        },
        {
          icon: {
            type: "icon-insert icon-collection"
          },
          style: {
            background: "rgb(100, 245, 146)",
          },
        },
      ]
	// 配置项说明
	style:'' // 按钮容器的内联样式
	title:'' // 按钮鼠标放上显示文字
	icon:{} // 按钮内图标
	//
	// type的值，有以下四种情况：
	// custom，此时为自定义组件,icon为组件对象
	// el，此时为el-icon,icon为图标组件名（！！！未内置）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>

* `closeOnClick`：非第一个的按钮点击时是否需要收起菜单-->Boolean;非必传;默认*true*

* `@click`：按钮被点击时触发-->第一个参数返回当前按钮原对象，第二个参数为当前点击下标