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


## 1. 参数
* `list`：按钮数据-->Array;非必传;默认*[{icon:'icon-insert icon-setting',title:'菜单',style:{background:'#fff',color:''}},{icon:'icon-insert icon-myCenter',style:{background:'rgb(255, 92, 92)'}},{icon:'icon-insert icon-notice',style:{background:'rgb(92, 209, 255)'}},{icon:'icon-insert icon-expression',style:{background:'rgb(255, 241, 92)'}},{icon:'icon-insert icon-collection',style:{background:'rgb(100, 245, 146)'}}]*
>
	// 配置项说明
	style:'' // 按钮容器的内联样式
	title:'' // 按钮鼠标放上显示文字
	icon:'' // 按钮内图标
	//
	// 按钮名分为前后两部分，用/分隔，有以下三种情况
	// el/xxx，此时为el-icon,xxx为图标组件名
	// iconfont/xxx，此时为iconfont，xxx为图标去掉icon-后部分
	// xx/xx，此时为本地自定义图标，前半部分为class，后半部分为内容
>

* `closeOnClick`：非第一个的按钮点击时是否需要收起菜单-->Boolean;非必传;默认*true*

* `@click`：按钮被点击时触发-->第一个参数返回当前按钮原对象