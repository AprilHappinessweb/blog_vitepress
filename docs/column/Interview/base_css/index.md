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

## 主流布局方案
1. Float浮动布局
2. Flex弹性布局
3. Table表格布局（用的少）
4. Grid网格布局

## leaferjs
绚丽多彩的 HTML5 Canvas 2D 图形渲染引擎，相关文章链接如下：

[leaferjs，全新的 Canvas 渲染引擎(作者：null-知乎)](https://zhuanlan.zhihu.com/p/643999912)

[leaferjs官网](https://www.leaferjs.com/)

## 参考来源
> 来自：vortesnail ——《做了一份前端面试复习计划，保熟～》(稀土掘金)  
> 链接：https://juejin.cn/post/7061588533214969892

> 来自：MonchLee ——《可能是最好的BFC解析了...》(稀土掘金)  
> 链接：https://juejin.cn/post/6960866014384881671

来自：阮一峰 ——《Flex 布局教程：语法篇》
链接：https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
