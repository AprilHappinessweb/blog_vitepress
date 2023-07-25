import{_ as s,o as a,c as n,V as l}from"./chunks/framework.a8f391e7.js";const D=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[],"relativePath":"column/Interview/base_css/index.md","filePath":"column/Interview/base_css/index.md"}'),p={name:"column/Interview/base_css/index.md"},e=l(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><h2 id="垂直居中的实现" tabindex="-1">垂直居中的实现 <a class="header-anchor" href="#垂直居中的实现" aria-label="Permalink to &quot;垂直居中的实现&quot;">​</a></h2><ol><li>利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页 面的中心，然后再通过 translate 来调整元素的中心点到页面的中心。 该方法需要考虑浏览器兼容问题。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.parent {</span></span>
<span class="line"><span style="color:#A6ACCD;">      position: relative;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .child {</span></span>
<span class="line"><span style="color:#A6ACCD;">      position: absolute;</span></span>
<span class="line"><span style="color:#A6ACCD;">      left: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      right: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      transform: translate(-50%,100%);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ol start="2"><li>利用绝对定位，设置四个方向的值都为 0，并将 margin 设置为 auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上 的居中。该方法适用于盒子有宽高的情况。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.parent {</span></span>
<span class="line"><span style="color:#A6ACCD;">      position: relative;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .child {</span></span>
<span class="line"><span style="color:#A6ACCD;">      position: absolute;</span></span>
<span class="line"><span style="color:#A6ACCD;">      top: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">      bottom: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">      left: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">      right: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin: auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><ol start="3"><li>利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 margin 负值来调整元素的中心点到页面的中心。该方法适用于盒子宽高已知的情况。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.parent {</span></span>
<span class="line"><span style="color:#A6ACCD;">      position: relative;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .child {</span></span>
<span class="line"><span style="color:#A6ACCD;">      position: absolute;</span></span>
<span class="line"><span style="color:#A6ACCD;">      top: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      left: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin-top: -100px; /* 自身height的一半 */</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin-left: -100px;/* 自身width的一半 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><ol start="4"><li>使用flex布局，通过align-items:center和justify-content:center设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。该方法要考虑兼容的问题，该方法在移动端用的较多：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.parent {</span></span>
<span class="line"><span style="color:#A6ACCD;">      display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">      justify-content: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">      align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><h2 id="常见的css布局单位" tabindex="-1">常见的css布局单位 <a class="header-anchor" href="#常见的css布局单位" aria-label="Permalink to &quot;常见的css布局单位&quot;">​</a></h2><p>常用的布局单位包括像素（px），百分比（%），em，rem，vw/vh。</p><ol><li>像素（px）是页面布局的基础，一个像素表示终端（电脑、手 机、平板等）屏幕所能显示的最小的区域，像素分为两种类型：CSS 像素和物理像素。 CSS 像素：为 web 开发者提供，在 CSS 中使用的一个抽象单位； 物理像素：只与设备的硬件密度有关，任何设备的物理像素都是固定 的。</li><li>百分比（%），当浏览器的宽度或者高度发生变化时，通过百分 比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化， 从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。</li><li>em 和 rem 相对于 px 更具灵活性，它们都是相对长度单位，它 们之间的区别：em 相对于父元素，rem 相对于根元素。 em： 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果 当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体 尺寸(默认 16px)。(相对父元素的字体大小倍数)。 rem： rem 是 CSS3 新增的一个相对单位，相对于根元素（html 元素） 的 font-size 的倍数。作用：利用 rem 可以实现简单的响应式布局， 可以利用 html 元素中字体的大小与屏幕间的比值来设置 font-size 的值，以此实现当屏幕分辨率变化时让元素也随之变化。</li><li>vw/vh 是与视图窗口有关的单位，vw 表示相对于视图窗口的宽 度，vh 表示相对于视图窗口高度，除了 vw 和 vh 外，还有 vmin 和 vmax 两个相关的单位。 vw：相对于视窗的宽度，视窗宽度是 100vw； vh：相对于视窗的高度，视窗高度是 100vh； vmin：vw 和 vh 中的较小值； vmax：vw 和 vh 中的较大值； vw/vh 和百分比很类似，两者的区别： 百分比（%）：大部分相对于祖先元素，也有相对于自身的情况比如 （border-radius、translate 等) vw/vm：相对于视窗的尺寸</li></ol><h2 id="bfc的理解和创建" tabindex="-1">Bfc的理解和创建 <a class="header-anchor" href="#bfc的理解和创建" aria-label="Permalink to &quot;Bfc的理解和创建&quot;">​</a></h2><p>BFC 即块级格式上下文，根据盒模型可知，每个元素都被定义为一个矩形盒子，然而盒子的布局会受到尺寸，定位，盒子的子元素或兄弟元素，视口的尺寸等因素决定，所以这里有一个浏览器计算的过程，计算的规则就是由一个叫做视觉格式化模型的东西所定义的，BFC 就是来自这个概念，它是 CSS 视觉渲染的一部分，用于决定块级盒的布局及浮动相互影响范围的一个区域。</p><h3 id="bfc-具有一些特性" tabindex="-1">BFC 具有一些特性： <a class="header-anchor" href="#bfc-具有一些特性" aria-label="Permalink to &quot;BFC 具有一些特性：&quot;">​</a></h3><ol><li>块级元素会在垂直方向一个接一个的排列，和文档流的排列方式一致。</li><li>在 BFC 中上下相邻的两个容器的 margin  会重叠，创建新的 BFC 可以避免外边距重叠。</li><li>计算 BFC 的高度时，需要计算浮动元素的高度。</li><li>BFC 区域不会与浮动的容器发生重叠。</li><li>BFC 是独立的容器，容器内部元素不会影响外部元素。</li><li>每个元素的左 margin  值和容器的左 border  相接触。</li></ol><h3 id="利用这些特性-我们可以解决以下问题" tabindex="-1">利用这些特性，我们可以解决以下问题： <a class="header-anchor" href="#利用这些特性-我们可以解决以下问题" aria-label="Permalink to &quot;利用这些特性，我们可以解决以下问题：&quot;">​</a></h3><ul><li>利用 4  和 6 ，我们可以实现三栏（或两栏）自适应布局。</li><li>利用 2 ，我们可以避免 margin  重叠问题。</li><li>利用 3 ，我们可以避免高度塌陷。</li></ul><h3 id="创建-bfc-的方式" tabindex="-1">创建 BFC 的方式： <a class="header-anchor" href="#创建-bfc-的方式" aria-label="Permalink to &quot;创建 BFC 的方式：&quot;">​</a></h3><ul><li>绝对定位元素（position 为 absolute 或 fixed ）。</li><li>行内块元素，即 display 为 inline-block 。</li><li>overflow 的值不为 visible 。</li></ul><h2 id="实现圣杯布局和双飞翼布局-经典三分栏布局" tabindex="-1">实现圣杯布局和双飞翼布局（经典三分栏布局） <a class="header-anchor" href="#实现圣杯布局和双飞翼布局-经典三分栏布局" aria-label="Permalink to &quot;实现圣杯布局和双飞翼布局（经典三分栏布局）&quot;">​</a></h2><h3 id="圣杯布局和双飞翼布局的目的" tabindex="-1">圣杯布局和双飞翼布局的目的： <a class="header-anchor" href="#圣杯布局和双飞翼布局的目的" aria-label="Permalink to &quot;圣杯布局和双飞翼布局的目的：&quot;">​</a></h3><ul><li>三栏布局，中间一栏最先加载和渲染（内容最重要，这就是为什么还需要了解这种布局的原因）。</li><li>两侧内容固定，中间内容随着宽度自适应。</li><li>一般用于 PC 网页。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;实现圣杯布局和双飞翼布局（经典三分栏布局）&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* 圣杯布局 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    #container {</span></span>
<span class="line"><span style="color:#A6ACCD;">      padding-left: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      padding-right: 150px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      overflow: auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #container p {</span></span>
<span class="line"><span style="color:#A6ACCD;">      float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .center {</span></span>
<span class="line"><span style="color:#A6ACCD;">      width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      background-color: lightcoral;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .left {</span></span>
<span class="line"><span style="color:#A6ACCD;">      width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      position: relative;</span></span>
<span class="line"><span style="color:#A6ACCD;">      left: -200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin-left: -100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      background-color: lightcyan;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .right {</span></span>
<span class="line"><span style="color:#A6ACCD;">      width: 150px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin-right: -150px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      background-color: lightgreen;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .clearfix:after {</span></span>
<span class="line"><span style="color:#A6ACCD;">      content: &quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      display: table;</span></span>
<span class="line"><span style="color:#A6ACCD;">      clear: both;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /* 双飞翼布局 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    .float {</span></span>
<span class="line"><span style="color:#A6ACCD;">      float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #main {</span></span>
<span class="line"><span style="color:#A6ACCD;">      width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      background-color: lightpink;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #main-wrap {</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin: 0 190px 0 190px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #left {</span></span>
<span class="line"><span style="color:#A6ACCD;">      width: 190px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      background-color: lightsalmon;</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin-left: -100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #right {</span></span>
<span class="line"><span style="color:#A6ACCD;">      width: 190px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      background-color: lightskyblue;</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin-left: -190px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;!-- 圣杯布局 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;container&quot; class=&quot;clearfix&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p class=&quot;center&quot;&gt;我是中间&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p class=&quot;left&quot;&gt;我是左边&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p class=&quot;right&quot;&gt;我是右边&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;!-- 双飞翼布局 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;main&quot; class=&quot;float&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div id=&quot;main-wrap&quot;&gt;main&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;left&quot; class=&quot;float&quot;&gt;left&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;right&quot; class=&quot;float&quot;&gt;right&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div><h3 id="圣杯布局和双飞翼布局的技术总结" tabindex="-1">圣杯布局和双飞翼布局的技术总结： <a class="header-anchor" href="#圣杯布局和双飞翼布局的技术总结" aria-label="Permalink to &quot;圣杯布局和双飞翼布局的技术总结：&quot;">​</a></h3><ul><li>使用 float  布局。</li><li>两侧使用 margin 负值，以便和中间内容横向重叠。</li><li>防止中间内容被两侧覆盖，圣杯布局用 padding ，双飞翼布局用 margin 。 参考文章链接：<a href="https://juejin.cn/post/7061588533214969892" target="_blank" rel="noreferrer">https://juejin.cn/post/7061588533214969892</a></li></ul><h2 id="主流布局方案" tabindex="-1">主流布局方案 <a class="header-anchor" href="#主流布局方案" aria-label="Permalink to &quot;主流布局方案&quot;">​</a></h2><ol><li>Float浮动布局</li><li>Flex弹性布局</li><li>Table表格布局（用的少）</li><li>Grid网格布局</li></ol><h2 id="leaferjs" tabindex="-1">leaferjs <a class="header-anchor" href="#leaferjs" aria-label="Permalink to &quot;leaferjs&quot;">​</a></h2><p>绚丽多彩的 HTML5 Canvas 2D 图形渲染引擎，相关文章链接如下：</p><p><a href="https://zhuanlan.zhihu.com/p/643999912" target="_blank" rel="noreferrer">leaferjs，全新的 Canvas 渲染引擎(作者：null-知乎)</a></p><p><a href="https://www.leaferjs.com/" target="_blank" rel="noreferrer">leaferjs官网</a></p><h2 id="参考来源" tabindex="-1">参考来源 <a class="header-anchor" href="#参考来源" aria-label="Permalink to &quot;参考来源&quot;">​</a></h2><blockquote><p>来自：vortesnail ——《做了一份前端面试复习计划，保熟～》(稀土掘金)<br> 链接：<a href="https://juejin.cn/post/7061588533214969892" target="_blank" rel="noreferrer">https://juejin.cn/post/7061588533214969892</a></p></blockquote><blockquote><p>来自：MonchLee ——《可能是最好的BFC解析了...》(稀土掘金)<br> 链接：<a href="https://juejin.cn/post/6960866014384881671" target="_blank" rel="noreferrer">https://juejin.cn/post/6960866014384881671</a></p></blockquote><p>来自：阮一峰 ——《Flex 布局教程：语法篇》 链接：<a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html</a></p>`,37),t=[e];function o(i,c,r,C,A,h){return a(),n("div",null,t)}const d=s(p,[["render",o]]);export{D as __pageData,d as default};
