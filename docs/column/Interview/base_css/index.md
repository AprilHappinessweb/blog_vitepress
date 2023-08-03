---
head:
  - - meta
    - name: CSS面试题
      content: CSS面试题
  - - meta
    - name: CSS面试题
      content: CSS面试题
---

# CSS

## 垂直居中的实现
1. 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页 面的中心，然后再通过 translate 来调整元素的中心点到页面的中心。 该方法需要考虑浏览器兼容问题。
```
.parent {
      position: relative;
    }

    .child {
      position: absolute;
      left: 50%;
      right: 50%;
      transform: translate(-50%,100%);
}
```
2. 利用绝对定位，设置四个方向的值都为 0，并将 margin 设置为 auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上 
的居中。该方法适用于盒子有宽高的情况。
```
.parent {
      position: relative;
    }

    .child {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
```
3. 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 margin 负值来调整元素的中心点到页面的中心。该方法适用于盒子宽高已知的情况。
```
.parent {
      position: relative;
    }

    .child {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -100px; /* 自身height的一半 */
      margin-left: -100px;/* 自身width的一半 */
    }
```
4. 使用flex布局，通过align-items:center和justify-content:center设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。该方法要考虑兼容的问题，该方法在移动端用的较多：
```
.parent {
      display: flex;
      justify-content: center;
      align-items: center;
    }
```


## 常见的css布局单位
常用的布局单位包括像素（px），百分比（%），em，rem，vw/vh。
1. 像素（px）是页面布局的基础，一个像素表示终端（电脑、手 
机、平板等）屏幕所能显示的最小的区域，像素分为两种类型：CSS 
像素和物理像素。
CSS 像素：为 web 开发者提供，在 CSS 中使用的一个抽象单位； 
物理像素：只与设备的硬件密度有关，任何设备的物理像素都是固定 
的。 
2. 百分比（%），当浏览器的宽度或者高度发生变化时，通过百分 
比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化， 
从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。 
3. em 和 rem 相对于 px 更具灵活性，它们都是相对长度单位，它 
们之间的区别：em 相对于父元素，rem 相对于根元素。 
em： 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果 
当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体 
尺寸(默认 16px)。(相对父元素的字体大小倍数)。 
rem： rem 是 CSS3 新增的一个相对单位，相对于根元素（html 元素） 
的 font-size 的倍数。作用：利用 rem 可以实现简单的响应式布局， 
可以利用 html 元素中字体的大小与屏幕间的比值来设置 font-size 
的值，以此实现当屏幕分辨率变化时让元素也随之变化。 
4. vw/vh 是与视图窗口有关的单位，vw 表示相对于视图窗口的宽 
度，vh 表示相对于视图窗口高度，除了 vw 和 vh 外，还有 vmin 和 vmax 
两个相关的单位。 
vw：相对于视窗的宽度，视窗宽度是 100vw；
vh：相对于视窗的高度，视窗高度是 100vh； 
vmin：vw 和 vh 中的较小值； 
vmax：vw 和 vh 中的较大值； 
vw/vh 和百分比很类似，两者的区别： 
百分比（%）：大部分相对于祖先元素，也有相对于自身的情况比如 
（border-radius、translate 等) 
vw/vm：相对于视窗的尺寸

## Bfc的理解和创建
BFC 即块级格式上下文，根据盒模型可知，每个元素都被定义为一个矩形盒子，然而盒子的布局会受到尺寸，定位，盒子的子元素或兄弟元素，视口的尺寸等因素决定，所以这里有一个浏览器计算的过程，计算的规则就是由一个叫做视觉格式化模型的东西所定义的，BFC 就是来自这个概念，它是 CSS 视觉渲染的一部分，用于决定块级盒的布局及浮动相互影响范围的一个区域。
### BFC 具有一些特性：
1. 块级元素会在垂直方向一个接一个的排列，和文档流的排列方式一致。
2. 在 BFC 中上下相邻的两个容器的 margin  会重叠，创建新的 BFC 可以避免外边距重叠。
3. 计算 BFC 的高度时，需要计算浮动元素的高度。
4. BFC 区域不会与浮动的容器发生重叠。
5. BFC 是独立的容器，容器内部元素不会影响外部元素。
6. 每个元素的左 margin  值和容器的左 border  相接触。
### 利用这些特性，我们可以解决以下问题：
+ 利用 4  和 6 ，我们可以实现三栏（或两栏）自适应布局。
+ 利用 2 ，我们可以避免 margin  重叠问题。
+ 利用 3 ，我们可以避免高度塌陷。
### 创建 BFC 的方式：
+ 绝对定位元素（position 为 absolute 或 fixed ）。
+ 行内块元素，即 display 为 inline-block 。
+ overflow 的值不为 visible 。


## 主流布局方案
1. Float浮动布局
2. Flex弹性布局
3. Table表格布局（用的少）
4. Grid网格布局

## Flex弹性布局
用的多不想写了...

## Grid网格布局
### 什么是网格布局？
网格布局，是为容器元素添加display:grid样式，来把容器元素变为网格容器，通过网格容器的grid-template-rows样式来定义各行高度，grid-template-columns样式来定义各列宽度。而网格容器的直接子级元素默认依次放入每个单元格中。
### 网格布局代码案例
```
<style>
    .container{
      width: 300px;
      height: 300px;
      margin: 200px;

      display: grid;
      grid-template-rows: repeat(3,1fr);/* grid-template-rows 来定义网格行的数目和尺寸   */
      grid-template-columns: repeat(3,1fr);/* grid-template-columns 来定义网格列的数目和尺寸   */
      /* repeat函数接收两个参数，第二个参数是要被重复的网格轨道尺寸，第一个参数是重复次数 */
      /* fr是网格容器剩余空间的占比 */
    }
    .container>div{
      border: 1px solid black;
      line-height: 100px;
      text-align: center;
    }
    .container>div:first-child{
      grid-row-start: 1;
      grid-row-end: 4;
      grid-column-start: 1;
      grid-column-end: 1;
    }
  </style>
...
<body>
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
  </div>
</body>
```
效果图如下：
![Alt text](/public/images/base_css/image.png)

### 网格布局和表格布局的区别
  + 表格实现行列依赖于标签结构，网格实现行列依赖于样式。
  + 从页面渲染性能角度来看，肯定是网格的性能更佳，因为同样渲染一个单元格，网格中单元格的元素的层级更浅。一个完整表格单元格层级应该是table>tbody>tr>td，而网格单元格的层级是.container > .gird。
  + 另外网格容器可以更好地支持单元格的布局，比如单元格的跨行跨列，比如单元格在网格中的位置。
### 网格布局与弹性布局的比较
  + 弹性布局本质上是一维布局，很难实现单元格跨行，无法轻松地实现合并。
  + 而网格布局是二维布局，它的单元格是由多条行线和列线分隔出来的，是真正二维意义上的网格效果，可以很容易地依赖于网格线来完成单元格跨行跨列。
### 网格轨道 grid-template-rows、grid-template-columns
所谓网格轨道，即网格行和网格列的统称。我们可以通过grid-template-rows来定义网格行的数目和尺寸，通过grid-template-columns 来定义网格列的数目和尺寸。
#### 有时候，我们期望元素的width、height可以适应其内容，CSS为此设计了三种特殊内部尺寸值：
+ min-content
+ max-content
+ fit-contnt
网格布局中，grid-template-rows或grid-template-columns轨道尺寸设置为min-content或max-content时，会根据轨道中网格项目内容来决定轨道实际尺寸。
#### minmax
minmax是css的函数，用于定义网格轨道的尺寸范围（闭区间），minmax函数包含两个参数，依次是网格轨道的最小尺寸min、最大尺寸max，minmax的作用其实非常类似于元素内部尺寸fit-content，只是minmax的可以自定义最小和最大尺寸。
#### repeat函数
+ css的repeat函数专门用于帮助grid-template-rows、grid-template-columns来生成重复尺寸。
+ repeat函数接收两个参数，第二个参数是要被重复的网格轨道尺寸，第一个参数是重复次数。
#### 网格间距
+ row-gap：行轨道之间的间距
+ column-gap：列轨道之间的间距
#### 网格项目的对齐
统一对齐，需要在网格容器上设置如下属性：
> justify-items：stretch | start | center | end  
> align-items：stretch | start | center | end | baseline

单独对齐，需要在网格项目上设置如下属性：
> justify-self：stretch | start | center | end  
> align-self：stretch | start | center | end | baseline
## 实现圣杯布局和双飞翼布局（经典三分栏布局）
### 圣杯布局和双飞翼布局的目的：
+ 三栏布局，中间一栏最先加载和渲染（内容最重要，这就是为什么还需要了解这种布局的原因）。
+ 两侧内容固定，中间内容随着宽度自适应。
+ 一般用于 PC 网页。
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>实现圣杯布局和双飞翼布局（经典三分栏布局）</title>
  <style>
    /* 圣杯布局 */
    #container {
      padding-left: 200px;
      padding-right: 150px;
      overflow: auto;
    }

    #container p {
      float: left;
    }

    .center {
      width: 100%;
      background-color: lightcoral;
    }

    .left {
      width: 200px;
      position: relative;
      left: -200px;
      margin-left: -100%;
      background-color: lightcyan;
    }

    .right {
      width: 150px;
      margin-right: -150px;
      background-color: lightgreen;
    }

    .clearfix:after {
      content: "";
      display: table;
      clear: both;
    }

    /* 双飞翼布局 */
    .float {
      float: left;
    }

    #main {
      width: 100%;
      height: 200px;
      background-color: lightpink;
    }

    #main-wrap {
      margin: 0 190px 0 190px;
    }

    #left {
      width: 190px;
      height: 200px;
      background-color: lightsalmon;
      margin-left: -100%;
    }

    #right {
      width: 190px;
      height: 200px;
      background-color: lightskyblue;
      margin-left: -190px;
    }
  </style>
</head>

<body>
  <!-- 圣杯布局 -->
  <div id="container" class="clearfix">
    <p class="center">我是中间</p>
    <p class="left">我是左边</p>
    <p class="right">我是右边</p>
  </div>
  <!-- 双飞翼布局 -->
  <div id="main" class="float">
    <div id="main-wrap">main</div>
  </div>
  <div id="left" class="float">left</div>
  <div id="right" class="float">right</div>

</body>

</html>
```
### 圣杯布局和双飞翼布局的技术总结：
+ 使用 float  布局。
+ 两侧使用 margin 负值，以便和中间内容横向重叠。
+ 防止中间内容被两侧覆盖，圣杯布局用 padding ，双飞翼布局用 margin 。
参考文章链接：https://juejin.cn/post/7061588533214969892

## 瀑布流
### 网站示例
[花瓣网](https://huaban.com/discovery)
### 视频学习
[《vue无限下拉瀑布流01》（作者：旱小麓，bilibili）](https://www.bilibili.com/video/BV1Rv411k78d/?spm_id_from=333.788.recommend_more_video.-1&vd_source=1a8169a934e13ebae47b8fee74976ed2)
### intersectionobserver_api
intersectionobserver_api可以自动"观察"元素是否可见，实现懒加载、无限滚动等功能。
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>intersectionobserver_api编写瀑布流</title>
  <style>
    *{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    body{
      /* height: 2000px; */
    }
    .box{
      width: 200px;
      height: 200px;
      margin: 2000px auto;
      background-color: orange;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>
<script>
  const box = document.querySelector(".box")
  // 创建一个观察者 用实例化出来的io对象来观察某些元素
  const io = new IntersectionObserver(config=>{
    // intersectionRatio[交叉比例]：这个原始在页面可视区域的大小占本身大小的百分比
    // 元素的大小是100*100 =1000
    // disconnect()让这个观察者失效
    // unobserve()不观察
    console.log(io)
    if(config[0].intersectionRatio>0){
      // 开始请求新的图片
      io.unobserve(box)
    }
  })
  
    console.log(io.observe(box))
</script>
</html>
```

## leaferjs
绚丽多彩的 HTML5 Canvas 2D 图形渲染引擎，相关文章链接如下：

[leaferjs，全新的 Canvas 渲染引擎(作者：null-知乎)](https://zhuanlan.zhihu.com/p/643999912)

[leaferjs官网](https://www.leaferjs.com/)

## 参考来源
> 来自：vortesnail ——《做了一份前端面试复习计划，保熟～》(稀土掘金)  
> 链接：https://juejin.cn/post/7061588533214969892

> 来自：MonchLee ——《可能是最好的BFC解析了...》(稀土掘金)  
> 链接：https://juejin.cn/post/6960866014384881671

> 来自：阮一峰 ——《Flex 布局教程：语法篇》
> 链接：https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html  

> 来自：伏城之外 —— 《CSS - 网格布局（grid）》（CSDN）  
> 链接：https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

> 来自：阮一峰 ——《IntersectionObserver API 使用教程》
> 链接：http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html