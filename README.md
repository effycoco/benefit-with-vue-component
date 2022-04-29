A project from [Vue - The Complete Guide, Section 6](https://www.udemy.com/course/vuejs-2-the-complete-guide/)

本例中包含使用 vue cdn 时如何在 app.js 中创建组件，并在 index.html 使用

# 理解使用组件的好处

分支`main`使用了组件, 就可以对每个联系人卡片单独控制是否显示详细信息

分支`no-cmp`未使用组件，几个联系人卡片是同时开关的

组件之间是可以交换信息的，app 本身也是组件，可以向其子组件传递信息。

而如果使用`createApp()`创建多个 app，控制 html 的不同部分，app 之间是无法交流的，各 app 是独立的。
