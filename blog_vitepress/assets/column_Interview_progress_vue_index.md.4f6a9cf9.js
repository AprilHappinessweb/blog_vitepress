import{_ as s}from"./chunks/image.8ac6449c.js";import{_ as a,o as n,c as e,V as l}from"./chunks/framework.e370de87.js";const t="/blog_vitepress/assets/image-4.ebf27700.png",p="/blog_vitepress/assets/image-1.98fef453.png",o="/blog_vitepress/assets/image-2.c71e4f07.png",c="/blog_vitepress/assets/image-3.518c75a1.png",q=JSON.parse('{"title":"VUE","description":"","frontmatter":{},"headers":[],"relativePath":"column/Interview/progress_vue/index.md","filePath":"column/Interview/progress_vue/index.md"}'),r={name:"column/Interview/progress_vue/index.md"},i=l(`<h1 id="vue" tabindex="-1">VUE <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;VUE&quot;">​</a></h1><h2 id="vue3和vue2的区别" tabindex="-1">Vue3和vue2的区别 <a class="header-anchor" href="#vue3和vue2的区别" aria-label="Permalink to &quot;Vue3和vue2的区别&quot;">​</a></h2><h3 id="_1-静态节点的不同" tabindex="-1">1. 静态节点的不同： <a class="header-anchor" href="#_1-静态节点的不同" aria-label="Permalink to &quot;1. 静态节点的不同：&quot;">​</a></h3><ul><li>vue2开发template下面只能放一个div把所有节点包起来，vue3开发template下面能放很多节点;</li><li>vue.js 3.x中标记和提升所有的静态节点，diff的时候只需要对比动态节点内容；</li><li>Fragments（升级vetur插件):</li><li>template中不需要唯一根节点，可以直接放文本或者同级标签;</li><li>静态提升(hoistStatic),当使用 hoistStatic 时,所有静态的节点都被提升到 render 方法之外.只会在应用启动的时候被创建一次,之后使用只需要应用提取的静态节点，随着每次的渲染被不停的复用;</li><li>patch flag, 在动态标签末尾加上相应的标记,只能带 patchFlag 的节点才被认为是动态的元素,会被追踪属性的修改,能快速的找到动态节点,而不用逐个逐层遍历，提高了虚拟dom diff的性能。</li><li>缓存事件处理函数cacheHandler,避免每次触发都要重新生成全新的function去更新之前的函数tree shaking 通过摇树优化核心库体积,减少不必要的代码量</li></ul><h3 id="_2-v-if和v-for优先级不同" tabindex="-1">2. v-if和v-for优先级不同： <a class="header-anchor" href="#_2-v-if和v-for优先级不同" aria-label="Permalink to &quot;2. v-if和v-for优先级不同：&quot;">​</a></h3><p>vue2中v-for的优先级大于v-if，官方建议是这两个不能放一起，举例：先处理数据把能显示的数据放一个集合，再在li上写v-for；vue3中v-if的优先级大于v-for，先在模板tempalte中写v-for，再在li中写v-if判断每个item是否渲染出来；总结vue3比vue2会少一个数据处理的步骤。</p><h3 id="_3-响应系统的原理不同" tabindex="-1">3. 响应系统的原理不同： <a class="header-anchor" href="#_3-响应系统的原理不同" aria-label="Permalink to &quot;3. 响应系统的原理不同：&quot;">​</a></h3><p>Vue3中使用了Proxy配合Reflect代替了Vue2中的Object.defineProperty()方法实现数据响应式（数据代理）</p><h3 id="_4-vue3重写了虚拟dom-速度更快了" tabindex="-1">4. vue3重写了虚拟dom，速度更快了 <a class="header-anchor" href="#_4-vue3重写了虚拟dom-速度更快了" aria-label="Permalink to &quot;4. vue3重写了虚拟dom，速度更快了&quot;">​</a></h3><h3 id="_5-vue3中有新的组件" tabindex="-1">5. vue3中有新的组件： <a class="header-anchor" href="#_5-vue3中有新的组件" aria-label="Permalink to &quot;5. vue3中有新的组件：&quot;">​</a></h3><p>Fragment（片段）/Telepot（瞬移）/Suspense(不确定)</p><h3 id="_6-vue3设计了新的vite脚手架工具。" tabindex="-1">6. vue3设计了新的vite脚手架工具。 <a class="header-anchor" href="#_6-vue3设计了新的vite脚手架工具。" aria-label="Permalink to &quot;6. vue3设计了新的vite脚手架工具。&quot;">​</a></h3><h3 id="_7-option-api的问题" tabindex="-1">7. Option API的问题： <a class="header-anchor" href="#_7-option-api的问题" aria-label="Permalink to &quot;7. Option API的问题：&quot;">​</a></h3><p>在传统的Vue OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 ，滚动条反复上下移动；vue3中使用Compisition API我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。</p><h3 id="_8-vue3更好的支持ts。" tabindex="-1">8. Vue3更好的支持TS。 <a class="header-anchor" href="#_8-vue3更好的支持ts。" aria-label="Permalink to &quot;8. Vue3更好的支持TS。&quot;">​</a></h3><h2 id="响应原理" tabindex="-1">响应原理 <a class="header-anchor" href="#响应原理" aria-label="Permalink to &quot;响应原理&quot;">​</a></h2><h3 id="vue2响应原理-object-defineproperty方法" tabindex="-1">vue2响应原理-Object.defineProperty方法 <a class="header-anchor" href="#vue2响应原理-object-defineproperty方法" aria-label="Permalink to &quot;vue2响应原理-Object.defineProperty方法&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let number = 19;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let exmpleObject = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name:&#39;lihua&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      sex:&#39;woman&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.defineProperty(exmpleObject,&#39;age&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">      // value:18,</span></span>
<span class="line"><span style="color:#A6ACCD;">      enumerable:true,//控制属性是否可以枚举，默认值是false</span></span>
<span class="line"><span style="color:#A6ACCD;">      // writable:true,//控制属性是否可以被修改，默认值是false</span></span>
<span class="line"><span style="color:#A6ACCD;">      configurable:true,//控制属性是否可以被删除，默认值false</span></span>
<span class="line"><span style="color:#A6ACCD;">      //当有人读取exmpleObject的age属性时，get函数（getter）就会被调用，且返回的值就是age的值</span></span>
<span class="line"><span style="color:#A6ACCD;">      get(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return number</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //当有人修改exmpleObject的age属性时，set函数（setter）就会被调用，且会收到修改的具体值</span></span>
<span class="line"><span style="color:#A6ACCD;">      set(value){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;修改&#39;,value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        number = value</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(Object.keys(exmpleObject))</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(exmpleObject)</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div><h3 id="vue3响应式的原理-proxy代理" tabindex="-1">vue3响应式的原理-proxy代理 <a class="header-anchor" href="#vue3响应式的原理-proxy代理" aria-label="Permalink to &quot;vue3响应式的原理-proxy代理&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let user = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;Jack&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      age: 20,</span></span>
<span class="line"><span style="color:#A6ACCD;">      wife: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &quot;lucy&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        age: 18,</span></span>
<span class="line"><span style="color:#A6ACCD;">        cars: [&quot;奔驰&quot;, &quot;宝马&quot;, &quot;玛莎拉蒂&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const proxyUser = new Proxy(user,{</span></span>
<span class="line"><span style="color:#A6ACCD;">      get(target,prop){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;get方法调用了&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Reflect.get(target,prop)</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      set(target,prop,val){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;set方法调用了&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Reflect.set(target,prop,val)</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      deleteProperty(target,prop){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;delete方法调用了&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Reflect.deleteProperty(target,prop)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(proxyUser.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxyUser.name = &#39;鸣人&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(user)</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxyUser.gender = &#39;男&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(user)</span></span>
<span class="line"><span style="color:#A6ACCD;">    delete proxyUser.name</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(user)</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxyUser.wife.name = &#39;森碟&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(user)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div><h2 id="双向数据绑定的原理" tabindex="-1">双向数据绑定的原理 <a class="header-anchor" href="#双向数据绑定的原理" aria-label="Permalink to &quot;双向数据绑定的原理&quot;">​</a></h2><p>Vue.js 是采用 <strong>数据劫持</strong> 结合 <strong>发布者-订阅者模式</strong> 的方式，通过Object.defineProperty()（vue3.0使用proxy ）来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤：</p><ol><li>需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化</li><li>compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图</li><li>Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: ①在自身实例化时往属性订阅器(dep)里面添加自己 ②自身必须有一个update()方法 ③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。</li><li>MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -&gt; 视图更新；视图交互变化(input) -&gt; 数据model变更的双向绑定效果。 <img src="`+s+'" alt="Alt text"></li></ol><h2 id="diff算法" tabindex="-1">diff算法 <a class="header-anchor" href="#diff算法" aria-label="Permalink to &quot;diff算法&quot;">​</a></h2><p>在新老虚拟DOM对比时：</p><p>首先，对比节点本身，判断是否为同一节点，如果不为相同节点，则删除该节点重新创建节点进行替换 如果为相同节点，进行patchVnode，判断如何对该节点的子节点进行处理，先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除) 比较如果都有子节点，则进行updateChildren，判断如何对这些新老节点的子节点进行操作（diff核心）。 匹配时，找到相同的子节点，递归比较子节点 在diff中，只对同层的子节点进行比较，放弃跨级的节点比较，使得时间复杂从O(n3)降低值O(n)，也就是说，只有当新旧children都为多个子节点时才需要用核心的Diff算法进行同层级比较。</p><h2 id="vue3组合式api-setup" tabindex="-1">vue3组合式API-Setup <a class="header-anchor" href="#vue3组合式api-setup" aria-label="Permalink to &quot;vue3组合式API-Setup&quot;">​</a></h2><p><a href="https://cn.vuejs.org/api/composition-api-setup.html" target="_blank" rel="noreferrer">setup()</a> 钩子是在组件中使用组合式 API 的入口，通常只在以下情况下使用： 需要在非单文件组件中使用组合式 API 时。 需要在基于选项式 API 的组件中集成基于组合式 API 的代码时。</p><h2 id="vue3的变量定义ref-和reactive" tabindex="-1">vue3的变量定义<a href="https://cn.vuejs.org/api/reactivity-core.html" target="_blank" rel="noreferrer">ref()</a>和<a href="https://cn.vuejs.org/api/reactivity-core.html#reactive" target="_blank" rel="noreferrer">reactive()</a> <a class="header-anchor" href="#vue3的变量定义ref-和reactive" aria-label="Permalink to &quot;vue3的变量定义[ref()](https://cn.vuejs.org/api/reactivity-core.html)和[reactive()](https://cn.vuejs.org/api/reactivity-core.html#reactive)&quot;">​</a></h2><ul><li>ref()接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value。</li><li>reactive()返回一个对象的响应式代理。值得注意的是，当访问到某个响应式数组或 Map 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包。</li></ul><h2 id="computed-和-watch" tabindex="-1">Computed 和 Watch <a class="header-anchor" href="#computed-和-watch" aria-label="Permalink to &quot;Computed 和 Watch&quot;">​</a></h2><h3 id="computed" tabindex="-1">Computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;Computed&quot;">​</a></h3><ul><li>它支持缓存，只有依赖的数据发生了变化，才会重新计算</li><li>不支持异步，当Computed中有异步操作时，无法监听数据的变化</li><li>computed的值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data声明过，或者父组件传递过来的props中的数据进行计算的。</li><li>如果一个属性是由其他属性计算而来的，这个属性依赖其他的属性，一般会使用computed</li><li>如果computed属性的属性值是函数，那么默认使用get方法，函数的返回值就是属性的属性值；在computed中，属性有一个get方法和一个set方法，当数据发生变化时，会调用set方法。</li></ul><h4 id="computed原理" tabindex="-1"><a href="https://cn.vuejs.org/api/reactivity-core.html#computed" target="_blank" rel="noreferrer">computed</a>原理 <a class="header-anchor" href="#computed原理" aria-label="Permalink to &quot;[computed](https://cn.vuejs.org/api/reactivity-core.html#computed)原理&quot;">​</a></h4><p>接受一个 getter 函数，返回一个只读的响应式 ref 对象。该 ref 通过.value暴露 getter 函数的返回值。它也可以接受一个带有 get 和 set 函数的对象来创建一个可写的 ref 对象。</p><h4 id="computed-和-methods-的区别" tabindex="-1">Computed 和 Methods 的区别 <a class="header-anchor" href="#computed-和-methods-的区别" aria-label="Permalink to &quot;Computed 和 Methods 的区别&quot;">​</a></h4><ul><li>相同点：可以将同一函数定义为一个 method 或者一个计算属性。对于最终的结果，两种方式是相同的</li><li>不同点：computed: 计算属性是基于它们的依赖进行缓存的，只有在它的相关依赖发生改变时才会重新求值；method 调用总会执行该函数。</li></ul><h3 id="watch" tabindex="-1">Watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;Watch&quot;">​</a></h3><ul><li>它不支持缓存，数据变化时，它就会触发相应的操作</li><li>支持异步监听</li><li>监听的函数接收两个参数，第一个参数是最新的值，第二个是变化之前的值</li><li>当一个属性发生变化时，就需要执行相应的操作</li><li>监听数据必须是data中声明的或者父组件传递过来的props中的数据，当发生变化时，会触发其他操作，函数有两个的参数：</li><li>immediate：组件加载立即触发回调函数</li><li>deep：深度监听，发现数据内部的变化，在复杂数据类型中使用，例如数组中的对象发生变化。需要注意的是，deep无法监听到数组和对象内部的变化。</li><li>当想要执行异步或者昂贵的操作以响应不断的变化时，就需要使用watch。</li></ul><h3 id="watch和watcheffect的区别" tabindex="-1">watch和watchEffect的区别 <a class="header-anchor" href="#watch和watcheffect的区别" aria-label="Permalink to &quot;watch和watchEffect的区别&quot;">​</a></h3><p>watch里面配置immediate才会默认执行一次，watchEffect不需要配置immediate，本身默认就会进行监视。 非响应式的参数可使用 ()=&gt;参数 的方法来实现响应。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><ul><li>computed 计算属性 : 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。</li><li>watch 侦听器 : 更多的是<strong>观察</strong>的作用，<strong>无缓存性</strong>，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。</li></ul><h3 id="运用场景" tabindex="-1">运用场景 <a class="header-anchor" href="#运用场景" aria-label="Permalink to &quot;运用场景&quot;">​</a></h3><ul><li>当需要进行数值计算,并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时都要重新计算。</li><li>当需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许执行异步操作 ( 访问一个 API )，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的。</li></ul><h2 id="常见的事件修饰符及其作用" tabindex="-1">常见的事件修饰符及其作用 <a class="header-anchor" href="#常见的事件修饰符及其作用" aria-label="Permalink to &quot;常见的事件修饰符及其作用&quot;">​</a></h2><p><strong>.stop</strong>：等同于 JavaScript 中的 event.stopPropagation() ，防止事件冒泡；</p><p><strong>.prevent</strong> ：等同于 JavaScript 中的 event.preventDefault() ，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；</p><p><strong>.capture</strong> ：与事件冒泡的方向相反，事件捕获由外到内；</p><p><strong>.self</strong> ：只会触发自己范围内的事件，不包含子元素；</p><p><strong>.once</strong> ：只会触发一次。</p><h2 id="收集表单数据" tabindex="-1">收集表单数据 <a class="header-anchor" href="#收集表单数据" aria-label="Permalink to &quot;收集表单数据&quot;">​</a></h2><p><img src="'+t+`" alt="Alt text"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;root&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;form @submit.prevent=&quot;demo&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label for=&quot;zhanghao&quot;&gt;账号：&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input type=&quot;text&quot; id=&quot;zhanghao&quot; v-model.trim=&quot;userInfo.account&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label for=&quot;password&quot;&gt;密码：&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input type=&quot;text&quot; id=&quot;password&quot; v-model=&quot;userInfo.password&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label for=&quot;password&quot;&gt;年龄：&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input type=&quot;number&quot; id=&quot;password&quot; v-model.number=&quot;userInfo.age&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label for=&quot;sex&quot;&gt;性别：&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      男&lt;input type=&quot;radio&quot; name=&quot;sex&quot; value=&quot;男&quot; v-model=&quot;userInfo.sex&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      女&lt;input type=&quot;radio&quot; name=&quot;sex&quot; value=&quot;女&quot; v-model=&quot;userInfo.sex&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label for=&quot;hobby&quot;&gt;爱好：&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      学习&lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; v-model=&quot;userInfo.hobby&quot; value=&quot;1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      打游戏&lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; v-model=&quot;userInfo.hobby&quot; value=&quot;2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      吃饭&lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; v-model=&quot;userInfo.hobby&quot; value=&quot;3&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      所属校区</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;select v-model=&quot;userInfo.city&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;&quot;&gt;请选择校区&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;beijing&quot;&gt;北京&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;shenzhen&quot;&gt;深圳&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;shanghai&quot;&gt;上海&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;wuhan&quot;&gt;武汉&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      其他信息：</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;textarea v-model=&quot;userInfo.other&quot;&gt;&lt;/textarea&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input type=&quot;checkbox&quot; v-model=&quot;userInfo.agree&quot;&gt;阅读并接受&lt;a href=&quot;www.baidu.com&quot;&gt;阅读协议&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button&gt;提交&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">      el: &#39;#root&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        userInfo: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          account: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          password: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          age:&#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          sex: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          hobby: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">          city: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          other: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          agree: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        demo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(JSON.stringify(this.userInfo))</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div><h2 id="vue的生命周期" tabindex="-1">Vue的生命周期 <a class="header-anchor" href="#vue的生命周期" aria-label="Permalink to &quot;Vue的生命周期&quot;">​</a></h2><p>Vue3的生命周期示意图如下： <img src="`+p+'" alt="Alt text"> Vue2的生命周期示意图如下： <img src="'+o+'" alt="Alt text"> 代码示意： <img src="'+c+`" alt="Alt text"></p><h2 id="vue组件封装原则" tabindex="-1">vue组件封装原则 <a class="header-anchor" href="#vue组件封装原则" aria-label="Permalink to &quot;vue组件封装原则&quot;">​</a></h2><ol><li>数据从父组件传入；</li><li>在父组件中处理事件；</li><li>留一个slot；</li><li>不要依赖vuex/pinia，可以选择放到localstorage中，或者通过props传递等方式；</li><li>合理使用scoped；</li><li>组件具有单一原则，不够单一再抽离。</li></ol><h2 id="组件通信" tabindex="-1">组件通信 <a class="header-anchor" href="#组件通信" aria-label="Permalink to &quot;组件通信&quot;">​</a></h2><p><strong>通信仓库地址:<a href="https://gitee.com/jch1011/vue3_communication.git" target="_blank" rel="noreferrer">https://gitee.com/jch1011/vue3_communication.git</a></strong></p><p>不管是vue2还是vue3,组件通信方式很重要,不管是项目还是面试都是经常用到的知识点。</p><p><strong>比如:vue2组件通信方式</strong></p><blockquote><p><strong>props,emit</strong>: 可以实现父子组件、子父组件、甚至兄弟组件通信<br><strong>自定义事件</strong>: 可以实现子父组件通信<br><strong>全局事件总线$bus</strong>: 可以实现任意组件通信<br><strong>pubsub</strong>: 发布订阅模式实现任意组件通信<br><strong>vuex</strong>: 集中式状态管理容器，实现任意组件通信<br><strong>ref</strong>: 父组件获取子组件实例VC,获取子组件的响应式数据以及方法<br><strong>slot</strong> 插槽(默认插槽、具名插槽、作用域插槽)实现父子组件通信........</p></blockquote><p>深入学习可以参考<a href="https://www.bilibili.com/video/BV1Xh411V7b5?p=3&amp;vd_source=1a8169a934e13ebae47b8fee74976ed2" target="_blank" rel="noreferrer">《尚硅谷Vue项目实战硅谷甄选-组件通信方式》(bilibili)</a></p><h3 id="_1-1props" tabindex="-1">1.1props <a class="header-anchor" href="#_1-1props" aria-label="Permalink to &quot;1.1props&quot;">​</a></h3><p>props可以实现父子组件通信,在vue3中我们可以通过defineProps获取父组件传递的数据。且在组件内部不需要引入defineProps方法可以直接使用！</p><p><strong>父组件给子组件传递数据</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Child info=&quot;我爱祖国&quot; :money=&quot;money&quot;&gt;&lt;/Child&gt;</span></span></code></pre></div><p><strong>子组件获取父组件传递数据:方式1</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let props = defineProps({</span></span>
<span class="line"><span style="color:#A6ACCD;">  info:{</span></span>
<span class="line"><span style="color:#A6ACCD;">   type:String,//接受的数据类型</span></span>
<span class="line"><span style="color:#A6ACCD;">   default:&#39;默认参数&#39;,//接受默认数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  money:{</span></span>
<span class="line"><span style="color:#A6ACCD;">   type:Number,</span></span>
<span class="line"><span style="color:#A6ACCD;">   default:0</span></span>
<span class="line"><span style="color:#A6ACCD;">}})</span></span></code></pre></div><p><strong>子组件获取父组件传递数据:方式2</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let props = defineProps([&quot;info&quot;,&#39;money&#39;]);</span></span></code></pre></div><p>子组件获取到props数据就可以在模板中使用了,但是切记props是只读的(只能读取，不能修改)</p><h3 id="_1-2自定义事件" tabindex="-1">1.2自定义事件 <a class="header-anchor" href="#_1-2自定义事件" aria-label="Permalink to &quot;1.2自定义事件&quot;">​</a></h3><p>在vue框架中事件分为两种:一种是原生的DOM事件，另外一种自定义事件。</p><p>原生DOM事件可以让用户与网页进行交互，比如click、dbclick、change、mouseenter、mouseleave....</p><p>自定义事件可以实现子组件给父组件传递数据</p><h4 id="_1-2-1原生dom事件" tabindex="-1">1.2.1原生DOM事件 <a class="header-anchor" href="#_1-2-1原生dom事件" aria-label="Permalink to &quot;1.2.1原生DOM事件&quot;">​</a></h4><p>代码如下:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;pre @click=&quot;handler&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      我是祖国的老花骨朵</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;/pre&gt;</span></span></code></pre></div><p>当前代码级给pre标签绑定原生DOM事件点击事件,默认会给事件回调注入event事件对象。当然点击事件想注入多个参数可以按照下图操作。但是切记注入的事件对象务必叫做$event.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div @click=&quot;handler1(1,2,3,$event)&quot;&gt;我要传递多个参数&lt;/div&gt;</span></span></code></pre></div><p>在vue3框架click、dbclick、change(这类原生DOM事件),不管是在标签、自定义标签上(组件标签)都是原生DOM事件。</p><p><strong></strong></p><h4 id="_1-2-2自定义事件" tabindex="-1">1.2.2自定义事件 <a class="header-anchor" href="#_1-2-2自定义事件" aria-label="Permalink to &quot;1.2.2自定义事件&quot;">​</a></h4><p>自定义事件可以实现子组件给父组件传递数据.在项目中是比较常用的。</p><p>比如在父组件内部给子组件(Event2)绑定一个自定义事件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Event2  @xxx=&quot;handler3&quot;&gt;&lt;/Event2&gt;</span></span></code></pre></div><p>在Event2子组件内部触发这个自定义事件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;我是子组件2&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;handler&quot;&gt;点击我触发xxx自定义事件&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">let $emit = defineEmits([&quot;xxx&quot;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const handler = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  $emit(&quot;xxx&quot;, &quot;法拉利&quot;, &quot;茅台&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div><p>我们会发现在script标签内部,使用了defineEmits方法，此方法是vue3提供的方法,不需要引入直接使用。defineEmits方法执行，传递一个数组，数组元素即为将来组件需要触发的自定义事件类型，此方执行会返回一个$emit方法用于触发自定义事件。</p><p>当点击按钮的时候，事件回调内部调用$emit方法去触发自定义事件,第一个参数为触发事件类型，第二个、三个、N个参数即为传递给父组件的数据。</p><p>需要注意的是:代码如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Event2  @xxx=&quot;handler3&quot; @click=&quot;handler&quot;&gt;&lt;/Event2&gt;</span></span></code></pre></div><p>正常说组件标签书写@click应该为原生DOM事件,但是如果子组件内部通过defineEmits定义就变为自定义事件了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let $emit = defineEmits([&quot;xxx&quot;,&#39;click&#39;]);</span></span></code></pre></div><h3 id="_1-3全局事件总线" tabindex="-1">1.3全局事件总线 <a class="header-anchor" href="#_1-3全局事件总线" aria-label="Permalink to &quot;1.3全局事件总线&quot;">​</a></h3><p>全局事件总线可以实现任意组件通信，在vue2中可以根据VM与VC关系推出全局事件总线。</p><p>但是在vue3中没有Vue构造函数，也就没有Vue.prototype.以及组合式API写法没有this，</p><p>那么在Vue3想实现全局事件的总线功能就有点不现实啦，如果想在Vue3中使用全局事件总线功能</p><p>可以使用插件mitt实现。</p><p><strong>mitt:官网地址:<a href="https://www.npmjs.com/package/mitt" target="_blank" rel="noreferrer">https://www.npmjs.com/package/mitt</a></strong></p><h3 id="_1-4v-model" tabindex="-1">1.4v-model <a class="header-anchor" href="#_1-4v-model" aria-label="Permalink to &quot;1.4v-model&quot;">​</a></h3><p>v-model指令可是收集表单数据(数据双向绑定)，除此之外它也可以实现父子组件数据同步。</p><p>而v-model实指利用props[modelValue]与自定义事件[update:modelValue]实现的。</p><p>下方代码:相当于给组件Child传递一个props(modelValue)与绑定一个自定义事件update:modelValue</p><p>实现父子组件数据同步</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Child v-model=&quot;msg&quot;&gt;&lt;/Child&gt;</span></span></code></pre></div><p>在vue3中一个组件可以通过使用多个v-model,让父子组件多个数据同步,下方代码相当于给组件Child传递两个props分别是pageNo与pageSize，以及绑定两个自定义事件update:pageNo与update:pageSize实现父子数据同步</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Child v-model:pageNo=&quot;msg&quot; v-model:pageSize=&quot;msg1&quot;&gt;&lt;/Child&gt;</span></span></code></pre></div><h3 id="_1-5useattrs" tabindex="-1">1.5useAttrs <a class="header-anchor" href="#_1-5useattrs" aria-label="Permalink to &quot;1.5useAttrs&quot;">​</a></h3><p>在Vue3中可以利用useAttrs方法获取组件的属性与事件(包含:原生DOM事件或者自定义事件),次函数功能类似于Vue2框架中$attrs属性与$listeners方法。</p><p>比如:在父组件内部使用一个子组件my-button</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;my-button type=&quot;success&quot; size=&quot;small&quot; title=&#39;标题&#39; @click=&quot;handler&quot;&gt;&lt;/my-button&gt;</span></span></code></pre></div><p>子组件内部可以通过useAttrs方法获取组件属性与事件.因此你也发现了，它类似于props,可以接受父组件传递过来的属性与属性值。需要注意如果defineProps接受了某一个属性，useAttrs方法返回的对象身上就没有相应属性与属性值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {useAttrs} from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let $attrs = useAttrs();</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><h3 id="_1-6ref与-parent" tabindex="-1">1.6ref与$parent <a class="header-anchor" href="#_1-6ref与-parent" aria-label="Permalink to &quot;1.6ref与$parent&quot;">​</a></h3><p>ref,提及到ref可能会想到它可以获取元素的DOM或者获取子组件实例的VC。既然可以在父组件内部通过ref获取子组件实例VC，那么子组件内部的方法与响应式数据父组件可以使用的。</p><p>比如:在父组件挂载完毕获取组件实例</p><p>父组件内部代码:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;ref与$parent&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Son ref=&quot;son&quot;&gt;&lt;/Son&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Son from &quot;./Son.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { onMounted, ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const son = ref();</span></span>
<span class="line"><span style="color:#A6ACCD;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(son.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>但是需要注意，如果想让父组件获取子组件的数据或者方法需要通过defineExpose对外暴露,因为vue3中组件内部的数据对外“关闭的”，外部不能访问</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">//数据</span></span>
<span class="line"><span style="color:#A6ACCD;">let money = ref(1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">//方法</span></span>
<span class="line"><span style="color:#A6ACCD;">const handler = ()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">defineExpose({</span></span>
<span class="line"><span style="color:#A6ACCD;">  money,</span></span>
<span class="line"><span style="color:#A6ACCD;">   handler</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>$parent可以获取某一个组件的父组件实例VC,因此可以使用父组件内部的数据与方法。必须子组件内部拥有一个按钮点击时候获取父组件实例，当然父组件的数据与方法需要通过defineExpose方法对外暴露</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;button @click=&quot;handler($parent)&quot;&gt;点击我获取父组件实例&lt;/button&gt;</span></span></code></pre></div><h3 id="_1-7provide与inject" tabindex="-1">1.7provide与inject <a class="header-anchor" href="#_1-7provide与inject" aria-label="Permalink to &quot;1.7provide与inject&quot;">​</a></h3><p><strong>provide[提供]</strong></p><p><strong>inject[注入]</strong></p><p>vue3提供两个方法provide与inject,可以实现隔辈组件传递参数</p><p>组件组件提供数据:</p><p>provide方法用于提供数据，此方法执需要传递两个参数,分别提供数据的key与提供数据value</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {provide} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">provide(&#39;token&#39;,&#39;admin_token&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>后代组件可以通过inject方法获取数据,通过key获取存储的数值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {inject} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let token = inject(&#39;token&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><h3 id="_1-8-pinia" tabindex="-1">1.8 pinia <a class="header-anchor" href="#_1-8-pinia" aria-label="Permalink to &quot;1.8 pinia&quot;">​</a></h3><p><strong>pinia官网:<a href="https://pinia.web3doc.top/" target="_blank" rel="noreferrer">https://pinia.web3doc.top/</a></strong></p><p>pinia也是集中式管理状态容器,类似于vuex。但是核心概念没有mutation、modules,使用方式参照官网</p><h3 id="_1-9slot" tabindex="-1">1.9slot <a class="header-anchor" href="#_1-9slot" aria-label="Permalink to &quot;1.9slot&quot;">​</a></h3><p>插槽：默认插槽、具名插槽、作用域插槽可以实现父子组件通信.</p><p><strong>默认插槽:</strong></p><p>在子组件内部的模板中书写slot全局组件标签</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div><p>在父组件内部提供结构：Todo即为子组件,在父组件内部使用的时候，在双标签内部书写结构传递给子组件</p><p>注意开发项目的时候默认插槽一般只有一个</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Todo&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;h1&gt;我是默认插槽填充的结构&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Todo&gt;</span></span></code></pre></div><p><strong>具名插槽：</strong></p><p>顾名思义，此插槽带有名字在组件内部留多个指定名字的插槽。</p><p>下面是一个子组件内部,模板中留两个插槽</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;todo&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot name=&quot;a&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot name=&quot;b&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div><p>父组件内部向指定的具名插槽传递结构。需要注意v-slot：可以替换为#</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;slot&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Todo&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template v-slot:a&gt;  //可以用#a替换</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;填入组件A部分的结构&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template v-slot:b&gt;//可以用#b替换</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;填入组件B部分的结构&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Todo&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Todo from &quot;./Todo.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div><p><strong>作用域插槽</strong></p><p>作用域插槽：可以理解为，子组件数据由父组件提供，但是子组件内部决定不了自身结构与外观(样式)</p><p>子组件Todo代码如下:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;todo&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;!--组件内部遍历数组--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li v-for=&quot;(item,index) in todos&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;!--作用域插槽将数据回传给父组件--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;slot :$row=&quot;item&quot; :$index=&quot;index&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">defineProps([&#39;todos&#39;]);//接受父组件传递过来的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div><p>父组件内部代码如下:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;slot&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Todo :todos=&quot;todos&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template v-slot=&quot;{$row,$index}&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;!--父组件决定子组件的结构与外观--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;span :style=&quot;{color:$row.done?&#39;green&#39;:&#39;red&#39;}&quot;&gt;{{$row.title}}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Todo&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Todo from &quot;./Todo.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">//父组件内部数据</span></span>
<span class="line"><span style="color:#A6ACCD;">let todos = ref([</span></span>
<span class="line"><span style="color:#A6ACCD;">  { id: 1, title: &quot;吃饭&quot;, done: true },</span></span>
<span class="line"><span style="color:#A6ACCD;">  { id: 2, title: &quot;睡觉&quot;, done: false },</span></span>
<span class="line"><span style="color:#A6ACCD;">  { id: 3, title: &quot;打豆豆&quot;, done: true },</span></span>
<span class="line"><span style="color:#A6ACCD;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div><h2 id="子组件可以直接改变父组件的数据吗" tabindex="-1">子组件可以直接改变父组件的数据吗？ <a class="header-anchor" href="#子组件可以直接改变父组件的数据吗" aria-label="Permalink to &quot;子组件可以直接改变父组件的数据吗？&quot;">​</a></h2><p>子组件不可以直接改变父组件的数据。这样做主要是为了维护父子组件的单向数据流。每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。如果这样做了，Vue 会在浏览器的控制台中发出警告。</p><p>Vue提倡单向数据流，即父级 props 的更新会流向子组件，但是反过来则不行。这是为了防止意外的改变父组件状态，使得应用的数据流变得难以理解，导致数据流混乱。如果破坏了单向数据流，当应用复杂时，debug 的成本会非常高。</p><p><strong>只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。</strong></p><h2 id="pina和vuex" tabindex="-1"><a href="https://pinia.vuejs.org/zh/core-concepts/" target="_blank" rel="noreferrer">Pina</a>和<a href="https://vuex.vuejs.org/zh/" target="_blank" rel="noreferrer">vuex</a> <a class="header-anchor" href="#pina和vuex" aria-label="Permalink to &quot;[Pina](https://pinia.vuejs.org/zh/core-concepts/)和[vuex](https://vuex.vuejs.org/zh/)&quot;">​</a></h2><p>Pina和vuex都可用于Vue 的状态管理库。</p><p><strong>对比 Vuex</strong></p><p>Pinia 起源于一次探索 Vuex 下一个迭代的实验，因此结合了 Vuex 5 核心团队讨论中的许多想法。最后，我们意识到 Pinia 已经实现了我们在 Vuex 5 中想要的大部分功能，所以决定将其作为新的推荐方案来代替 Vuex。</p><p>与 Vuex 相比，Pinia 不仅提供了一个更简单的 API，也提供了符合组合式 API 风格的 API，最重要的是，搭配 TypeScript 一起使用时有非常可靠的类型推断支持。</p><h2 id="对keep-alive的理解-它是如何实现的-具体缓存的是什么" tabindex="-1">对keep-alive的理解，它是如何实现的，具体缓存的是什么？ <a class="header-anchor" href="#对keep-alive的理解-它是如何实现的-具体缓存的是什么" aria-label="Permalink to &quot;对keep-alive的理解，它是如何实现的，具体缓存的是什么？&quot;">​</a></h2><p>如果需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 keep-alive 组件包裹需要保存的组件。</p><p>keep-alive有以下三个属性：</p><ul><li>include 字符串或正则表达式，只有名称匹配的组件会被匹配；</li><li>exclude 字符串或正则表达式，任何名称匹配的组件都不会被缓存；</li><li>max 数字，最多可以缓存多少组件实例。</li></ul><p>注意：keep-alive 包裹动态组件时，会缓存不活动的组件实例。</p><h3 id="主要流程" tabindex="-1">主要流程 <a class="header-anchor" href="#主要流程" aria-label="Permalink to &quot;主要流程&quot;">​</a></h3><ol><li>判断组件 name ，不在 include 或者在 exclude 中，直接返回 vnode，说明该组件不被缓存。</li><li>获取组件实例 key ，如果有获取实例的 key，否则重新生成。</li><li>key生成规则，cid +&quot;∶∶&quot;+ tag ，仅靠cid是不够的，因为相同的构造函数可以注册为不同的本地组件。</li><li>如果缓存对象内存在，则直接从缓存对象中获取组件实例给 vnode ，不存在则添加到缓存对象中。</li><li>最大缓存数量，当缓存组件数量超过 max 值时，清除 keys 数组内第一个组件。</li></ol><h3 id="keep-alive-的实现" tabindex="-1">keep-alive 的实现 <a class="header-anchor" href="#keep-alive-的实现" aria-label="Permalink to &quot;keep-alive 的实现&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const patternTypes: Array&lt;Function&gt; = [String, RegExp, Array] // 接收：字符串，正则，数组</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;keep-alive&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  abstract: true, // 抽象组件，是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include: patternTypes, // 匹配的组件，缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">    exclude: patternTypes, // 不去匹配的组件，不缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">    max: [String, Number], // 缓存组件的最大实例数量, 由于缓存的是组件实例（vnode），数量过多的时候，会占用过多的内存，可以用max指定上限</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 用于初始化缓存虚拟DOM数组和vnode的key</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.cache = Object.create(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.keys = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  destroyed() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 销毁缓存cache的组件实例</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (const key in this.cache) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      pruneCacheEntry(this.cache, key, this.keys)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // prune 削减精简[v.]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 去监控include和exclude的改变，根据最新的include和exclude的内容，来实时削减缓存的组件的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$watch(&#39;include&#39;, (val) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      pruneCache(this, (name) =&gt; matches(val, name))</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$watch(&#39;exclude&#39;, (val) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      pruneCache(this, (name) =&gt; !matches(val, name))</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="render函数" tabindex="-1">render函数： <a class="header-anchor" href="#render函数" aria-label="Permalink to &quot;render函数：&quot;">​</a></h3><ol><li><p>会在 keep-alive 组件内部去写自己的内容，所以可以去获取默认 slot 的内容，然后根据这个去获取组件。</p></li><li><p>keep-alive 只对第一个组件有效，所以获取第一个子组件。</p></li><li><p>和 keep-alive 搭配使用的一般有：动态组件 和router-view。</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //</span></span>
<span class="line"><span style="color:#A6ACCD;">  function getFirstComponentChild (children: ?Array&lt;VNode&gt;): ?VNode {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (Array.isArray(children)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; children.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const c = children[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (isDef(c) &amp;&amp; (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return c</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  const slot = this.$slots.default // 获取默认插槽</span></span>
<span class="line"><span style="color:#A6ACCD;">  const vnode: VNode = getFirstComponentChild(slot)// 获取第一个子组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  const componentOptions: ?VNodeComponentOptions = vnode &amp;&amp; vnode.componentOptions // 组件参数</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (componentOptions) { // 是否有组件参数</span></span>
<span class="line"><span style="color:#A6ACCD;">    // check pattern</span></span>
<span class="line"><span style="color:#A6ACCD;">    const name: ?string = getComponentName(componentOptions) // 获取组件名</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { include, exclude } = this</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (</span></span>
<span class="line"><span style="color:#A6ACCD;">      // not included</span></span>
<span class="line"><span style="color:#A6ACCD;">      (include &amp;&amp; (!name || !matches(include, name))) ||</span></span>
<span class="line"><span style="color:#A6ACCD;">      // excluded</span></span>
<span class="line"><span style="color:#A6ACCD;">      (exclude &amp;&amp; name &amp;&amp; matches(exclude, name))</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 如果不匹配当前组件的名字和include以及exclude</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 那么直接返回组件的实例</span></span>
<span class="line"><span style="color:#A6ACCD;">      return vnode</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const { cache, keys } = this</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 获取这个组件的key</span></span>
<span class="line"><span style="color:#A6ACCD;">    const key: ?string = vnode.key == null</span></span>
<span class="line"><span style="color:#A6ACCD;">      // same constructor may get registered as different local components</span></span>
<span class="line"><span style="color:#A6ACCD;">      // so cid alone is not enough (#3269)</span></span>
<span class="line"><span style="color:#A6ACCD;">      ? componentOptions.Ctor.cid + (componentOptions.tag ? \`::\${componentOptions.tag}\` : &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      : vnode.key</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (cache[key]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // LRU缓存策略执行</span></span>
<span class="line"><span style="color:#A6ACCD;">      vnode.componentInstance = cache[key].componentInstance // 组件初次渲染的时候componentInstance为undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // make current key freshest</span></span>
<span class="line"><span style="color:#A6ACCD;">      remove(keys, key)</span></span>
<span class="line"><span style="color:#A6ACCD;">      keys.push(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 根据LRU缓存策略执行，将key从原来的位置移除，然后将这个key值放到最后面</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 在缓存列表里面没有的话，则加入，同时判断当前加入之后，是否超过了max所设定的范围，如果是，则去除</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 使用时间间隔最长的一个</span></span>
<span class="line"><span style="color:#A6ACCD;">      cache[key] = vnode</span></span>
<span class="line"><span style="color:#A6ACCD;">      keys.push(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // prune oldest entry</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.max &amp;&amp; keys.length &gt; parseInt(this.max)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        pruneCacheEntry(cache, keys[0], keys, this._vnode)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 将组件的keepAlive属性设置为true</span></span>
<span class="line"><span style="color:#A6ACCD;">    vnode.data.keepAlive = true // 作用：判断是否要执行组件的created、mounted生命周期函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return vnode || (slot &amp;&amp; slot[0])</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>keep-alive 具体是通过 cache 数组缓存所有组件的 vnode 实例。当 cache 内原有组件被使用时会将该组件 key 从 keys 数组中删除，然后 push 到 keys数组最后，以便清除最不常用组件。</p><h3 id="实现步骤" tabindex="-1">实现步骤： <a class="header-anchor" href="#实现步骤" aria-label="Permalink to &quot;实现步骤：&quot;">​</a></h3><ol><li><p>获取 keep-alive 下第一个子组件的实例对象，通过他去获取这个组件的组件名</p></li><li><p>通过当前组件名去匹配原来 include 和 exclude，判断当前组件是否需要缓存，不需要缓存，直接返回当前组件的实例vNode</p></li><li><p>需要缓存，判断他当前是否在缓存数组里面：</p></li></ol><p>存在，则将他原来位置上的 key 给移除，同时将这个组件的 key 放到数组最后面（LRU） 不存在，将组件 key 放入数组，然后判断当前 key数组是否超过 max 所设置的范围，超过，那么削减未使用时间最长的一个组件的 key 4. 最后将这个组件的 keepAlive 设置为 true</p><h3 id="keep-alive-本身的创建过程和-patch-过程" tabindex="-1">keep-alive 本身的创建过程和 patch 过程 <a class="header-anchor" href="#keep-alive-本身的创建过程和-patch-过程" aria-label="Permalink to &quot;keep-alive 本身的创建过程和 patch 过程&quot;">​</a></h3><p>缓存渲染的时候，会根据 vnode.componentInstance（首次渲染 vnode.componentInstance 为 undefined） 和 keepAlive 属性判断不会执行组件的 created、mounted 等钩子函数，而是对缓存的组件执行 patch 过程∶ 直接把缓存的 DOM 对象直接插入到目标元素中，完成了数据更新的情况下的渲染过程。</p><h3 id="首次渲染" tabindex="-1">首次渲染 <a class="header-anchor" href="#首次渲染" aria-label="Permalink to &quot;首次渲染&quot;">​</a></h3><ul><li>组件的首次渲染∶判断组件的 abstract 属性，才往父组件里面挂载 DOM</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// core/instance/lifecycle</span></span>
<span class="line"><span style="color:#A6ACCD;">function initLifecycle (vm: Component) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const options = vm.$options</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // locate first non-abstract parent</span></span>
<span class="line"><span style="color:#A6ACCD;">  let parent = options.parent</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (parent &amp;&amp; !options.abstract) { // 判断组件的abstract属性，才往父组件里面挂载DOM</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (parent.$options.abstract &amp;&amp; parent.$parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      parent = parent.$parent</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent.$children.push(vm)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  vm.$parent = parent</span></span>
<span class="line"><span style="color:#A6ACCD;">  vm.$root = parent ? parent.$root : vm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  vm.$children = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  vm.$refs = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  vm._watcher = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  vm._inactive = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  vm._directInactive = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  vm._isMounted = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  vm._isDestroyed = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  vm._isBeingDestroyed = false</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>判断当前 keepAlive 和 componentInstance 是否存在来判断是否要执行组件 prepatch 还是执行创建 componentlnstance</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// core/vdom/create-component</span></span>
<span class="line"><span style="color:#A6ACCD;">init (vnode: VNodeWithData, hydrating: boolean): ?boolean {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (</span></span>
<span class="line"><span style="color:#A6ACCD;">      vnode.componentInstance &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      !vnode.componentInstance._isDestroyed &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      vnode.data.keepAlive</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) { // componentInstance在初次是undefined!!!</span></span>
<span class="line"><span style="color:#A6ACCD;">      // kept-alive components, treat as a patch</span></span>
<span class="line"><span style="color:#A6ACCD;">      const mountedNode: any = vnode // work around flow</span></span>
<span class="line"><span style="color:#A6ACCD;">      componentVNodeHooks.prepatch(mountedNode, mountedNode) // prepatch函数执行的是组件更新的过程</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const child = vnode.componentInstance = createComponentInstanceForVnode(</span></span>
<span class="line"><span style="color:#A6ACCD;">        vnode,</span></span>
<span class="line"><span style="color:#A6ACCD;">        activeInstance</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">      child.$mount(hydrating ? vnode.elm : undefined, hydrating)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span></code></pre></div><p>prepatch 操作就不会在执行组件的 mounted 和 created 生命周期函数，而是直接将 DOM 插入。</p><h3 id="lru-least-recently-used-缓存策略" tabindex="-1">LRU （least recently used）缓存策略 <a class="header-anchor" href="#lru-least-recently-used-缓存策略" aria-label="Permalink to &quot;LRU （least recently used）缓存策略&quot;">​</a></h3><p>LRU 缓存策略∶ 从内存中找出最久未使用的数据并置换新的数据。 LRU（Least rencently used）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是 &quot;如果数据最近被访问过，那么将来被访问的几率也更高&quot;。 最常见的实现是使用一个链表保存缓存数据，详细算法实现如下∶</p><ul><li>新数据插入到链表头部</li><li>每当缓存命中（即缓存数据被访问），则将数据移到链表头部</li><li>链表满的时候，将链表尾部的数据丢弃。</li></ul><h2 id="nexttick-原理及作用" tabindex="-1">$nextTick 原理及作用 <a class="header-anchor" href="#nexttick-原理及作用" aria-label="Permalink to &quot;$nextTick 原理及作用&quot;">​</a></h2><p>Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。</p><p>nextTick 的核心是利用了如 Promise 、MutationObserver、setImmediate、setTimeout的原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。</p><p>nextTick 不仅是 Vue 内部的异步队列的调用方法，同时也允许开发者在实际项目中使用这个方法来满足实际应用中对 DOM 更新数据时机的后续逻辑处理</p><p>nextTick 是典型的将底层 JavaScript 执行原理应用到具体案例中的示例，引入异步更新队列机制的原因∶</p><ul><li>如果是同步更新，则多次对一个或多个属性赋值，会频繁触发 UI/DOM 的渲染，可以减少一些无用渲染</li><li>同时由于 VirtualDOM 的引入，每一次状态发生变化后，状态变化的信号会发送给组件，组件内部使用 VirtualDOM 进行计算得出需要更新的具体的 DOM 节点，然后对 DOM 进行更新操作，每次更新状态后的渲染过程需要更多的计算，而这种无用功也将浪费更多的性能，所以异步渲染变得更加至关重要</li></ul><p>Vue采用了数据驱动视图的思想，但是在一些情况下，仍然需要操作DOM。有时候，可能遇到这样的情况，DOM1的数据发生了变化，而DOM2需要从DOM1中获取数据，那这时就会发现DOM2的视图并没有更新，这时就需要用到了nextTick了。</p><p>由于Vue的DOM操作是异步的，所以，在上面的情况中，就要将DOM2获取数据的操作写在$nextTick中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">this.$nextTick(() =&gt; {    // 获取数据的操作...})</span></span></code></pre></div><p>所以，在以下情况下，会用到nextTick：</p><ul><li>在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的DOM结构的时候，这个操作就需要方法在nextTick()的回调函数中。</li><li>在vue生命周期中，如果在created()钩子进行DOM操作，也一定要放在nextTick()的回调函数中。</li></ul><p>因为在created()钩子函数中，页面的DOM还未渲染，这时候也没办法操作DOM，所以，此时如果想要操作DOM，必须将操作的代码放在nextTick()的回调函数中。</p><h2 id="vue-router路由" tabindex="-1"><a href="https://router.vuejs.org/zh/introduction.html" target="_blank" rel="noreferrer">Vue Router</a>路由 <a class="header-anchor" href="#vue-router路由" aria-label="Permalink to &quot;[Vue Router](https://router.vuejs.org/zh/introduction.html)路由&quot;">​</a></h2><h3 id="_1-vue-router-的懒加载如何实现" tabindex="-1">1. Vue-Router 的懒加载如何实现 <a class="header-anchor" href="#_1-vue-router-的懒加载如何实现" aria-label="Permalink to &quot;1. Vue-Router 的懒加载如何实现&quot;">​</a></h3><p>非懒加载：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import List from &#39;@/components/list.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const router = new VueRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    { path: &#39;/list&#39;, component: List }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>方案一(常用)：使用箭头函数+import动态加载</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const List = () =&gt; import(&#39;@/components/list.vue&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const router = new VueRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    { path: &#39;/list&#39;, component: List }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>方案二：使用箭头函数+require动态加载</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const router = new Router({</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">     path: &#39;/list&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     component: resolve =&gt; require([&#39;@/components/list&#39;], resolve)</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>方案三：使用webpack的require.ensure技术，也可以实现按需加载。 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// r就是resolve</span></span>
<span class="line"><span style="color:#A6ACCD;">const List = r =&gt; require.ensure([], () =&gt; r(require(&#39;@/components/list&#39;)), &#39;list&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 </span></span>
<span class="line"><span style="color:#A6ACCD;">const router = new Router({</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/list&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: List,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;list&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"> ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}))</span></span></code></pre></div><h3 id="_2-路由的hash和history模式的区别" tabindex="-1">2. 路由的hash和history模式的区别 <a class="header-anchor" href="#_2-路由的hash和history模式的区别" aria-label="Permalink to &quot;2. 路由的hash和history模式的区别&quot;">​</a></h3><p>Vue-Router有两种模式：hash模式和history模式。默认的路由模式是hash模式。</p><h4 id="_2-1-hash模式" tabindex="-1">2.1 hash模式 <a class="header-anchor" href="#_2-1-hash模式" aria-label="Permalink to &quot;2.1 hash模式&quot;">​</a></h4><ul><li><p>简介： hash模式是开发中默认的模式，它的URL带着一个#，例如：www.abc.com/#/vue，它的hash值就是#/vue。</p></li><li><p>特点：hash值会出现在URL里面，但是不会出现在HTTP请求中，对后端完全没有影响。所以改变hash值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的IE浏览器也支持这种模式。hash路由被称为是前端路由，已经成为SPA（单页面应用）的标配。</p></li><li><p>原理： hash模式的主要原理就是onhashchange()事件：</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">window.onhashchange = function(event){</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(event.oldURL, event.newURL);</span></span>
<span class="line"><span style="color:#A6ACCD;">	let hash = location.hash.slice(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><blockquote><p>使用onhashchange()事件的好处就是，在页面的hash值发生变化时，无需向后端发起请求，window就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash值变化对应的URL都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退。虽然是没有请求后端服务器，但是页面的hash值和对应的URL关联起来了。</p></blockquote><h4 id="_2-2-history模式" tabindex="-1">2.2 history模式 <a class="header-anchor" href="#_2-2-history模式" aria-label="Permalink to &quot;2.2 history模式&quot;">​</a></h4><p><strong>简介：</strong> history模式的URL中没有#，它使用的是传统的路由分发模式，即用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理。</p><p><strong>特点：</strong> 当使用history模式时，URL就像这样：abc.com/user/id。相比hash模式更加好看。但是，history模式需要后台配置支持。如果后台没有正确配置，访问时会返回404。</p><p><strong>API：</strong> history api可以分为两大部分，切换历史状态和修改历史状态：</p><ul><li><strong>修改历史状态：</strong> 包括了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了url，但浏览器不会立即向后端发送请求。如果要做到改变url但又不刷新页面的效果，就需要前端用上这两个API。</li><li><strong>切换历史状态：</strong> 包括forward()、back()、go()三个方法，对应浏览器的前进，后退，跳转操作。 虽然history模式丢弃了丑陋的#。但是，它也有自己的缺点，就是在刷新页面的时候，如果没有相应的路由或资源，就会刷出404来。 如果想要切换到history模式，就要进行以下配置（后端也要进行配置）：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const router = new VueRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;history&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: [...]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h4 id="_2-3-两种模式对比" tabindex="-1">2.3 两种模式对比 <a class="header-anchor" href="#_2-3-两种模式对比" aria-label="Permalink to &quot;2.3 两种模式对比&quot;">​</a></h4><p>调用 history.pushState() 相比于直接修改 hash，存在以下优势:</p><ul><li>pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；</li><li>pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；</li><li>pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；</li><li>pushState() 可额外设置 title 属性供后续使用。</li><li>hash模式下，仅hash符号之前的url会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回404错误；history模式下，前端的url必须和实际向后端发起请求的url一致，如果没有对用的路由处理，将返回404错误。</li></ul><p>hash模式和history模式都有各自的优势和缺陷，还是要根据实际情况选择性的使用。</p><h3 id="_3-如何获取页面的hash变化" tabindex="-1">3. 如何获取页面的hash变化 <a class="header-anchor" href="#_3-如何获取页面的hash变化" aria-label="Permalink to &quot;3. 如何获取页面的hash变化&quot;">​</a></h3><p><strong>监听$route的变化</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 监听,当路由发生变化的时候执行</span></span>
<span class="line"><span style="color:#A6ACCD;">watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  $route: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler: function(val, oldVal){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(val);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 深度观察监听</span></span>
<span class="line"><span style="color:#A6ACCD;">    deep: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div><p><strong>window.location.hash读取#值</strong></p><p>window.location.hash 的值可读可写，读取来判断状态是否改变，写入时可以在不重载网页的前提下，添加一条历史访问记录。</p><h3 id="_4-route-和-router-的区别" tabindex="-1">4. $route 和$router 的区别 <a class="header-anchor" href="#_4-route-和-router-的区别" aria-label="Permalink to &quot;4. $route 和$router 的区别&quot;">​</a></h3><ul><li>$route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数;</li><li>$router 是“路由实例”对象包括了路由的跳转方法，钩子函数等。</li></ul><h3 id="_5-如何定义动态路由-如何获取传过来的动态参数" tabindex="-1">5. 如何定义动态路由？如何获取传过来的动态参数？ <a class="header-anchor" href="#_5-如何定义动态路由-如何获取传过来的动态参数" aria-label="Permalink to &quot;5. 如何定义动态路由？如何获取传过来的动态参数？&quot;">​</a></h3><h3 id="_6-vue-router-路由钩子在生命周期的体现" tabindex="-1">6. Vue-router 路由钩子在生命周期的体现 <a class="header-anchor" href="#_6-vue-router-路由钩子在生命周期的体现" aria-label="Permalink to &quot;6. Vue-router 路由钩子在生命周期的体现&quot;">​</a></h3><ul><li><p>使用 location.href= /url 来跳转，简单方便，但是刷新了页面；</p></li><li><p>使用 history.pushState( /url ) ，无刷新页面，静态跳转；</p></li><li><p>引进 router ，然后使用 router.push( /url ) 来跳转，使用了 diff 算法，实现了按需加载，减少了 dom 的消耗。其实使用 router 跳转和使用 history.pushState() 没什么差别的，因为vue-router就是用了history.pushState() ，尤其是在history模式下。</p></li></ul><h3 id="_7-vue-router跳转和location-href有什么区别" tabindex="-1">7. Vue-router跳转和location.href有什么区别 <a class="header-anchor" href="#_7-vue-router跳转和location-href有什么区别" aria-label="Permalink to &quot;7. Vue-router跳转和location.href有什么区别&quot;">​</a></h3><p><strong>用法：</strong> query要用path来引入，params要用name来引入，接收参数都是类似的，分别是 this.$route.query.name和 this.$route.params.name 。</p><p><strong>url地址显示：</strong> query更加类似于ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示</p><p><strong>注意：</strong> query刷新不会丢失query里面的数据 params刷新会丢失 params里面的数据。</p><h3 id="_8-params和query的区别" tabindex="-1">8. params和query的区别 <a class="header-anchor" href="#_8-params和query的区别" aria-label="Permalink to &quot;8. params和query的区别&quot;">​</a></h3><ul><li>全局前置/钩子：beforeEach、beforeResolve、afterEach</li><li>路由独享的守卫：beforeEnter</li><li>组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave</li></ul><h3 id="_9-vue-router-导航守卫有哪些" tabindex="-1">9. Vue-router 导航守卫有哪些 <a class="header-anchor" href="#_9-vue-router-导航守卫有哪些" aria-label="Permalink to &quot;9. Vue-router 导航守卫有哪些&quot;">​</a></h3><p>在前端技术早期，一个 url 对应一个页面，如果要从 A 页面切换到 B 页面，那么必然伴随着页面的刷新。这个体验并不好，不过在最初也是无奈之举——用户只有在刷新页面的情况下，才可以重新去请求数据。</p><p>后来，改变发生了——Ajax 出现了，它允许人们在不刷新页面的情况下发起请求；与之共生的，还有“不刷新页面即可更新页面内容”这种需求。在这样的背景下，出现了 SPA（单页面应用）。</p><p>SPA极大地提升了用户体验，它允许页面在不刷新的情况下更新页面内容，使内容的切换更加流畅。但是在 SPA 诞生之初，人们并没有考虑到“定位”这个问题——在内容切换前后，页面的 URL 都是一样的，这就带来了两个问题：</p><blockquote><p>SPA 其实并不知道当前的页面“进展到了哪一步”。可能在一个站点下经过了反复的“前进”才终于唤出了某一块内容，但是此时只要刷新一下页面，一切就会被清零，必须重复之前的操作、才可以重新对内容进行定位——SPA 并不会“记住”你的操作。 由于有且仅有一个 URL 给页面做映射，这对 SEO 也不够友好，搜索引擎无法收集全面的信息 为了解决这个问题，前端路由出现了。</p></blockquote><p>前端路由可以帮助我们在仅有一个页面的情况下，“记住”用户当前走到了哪一步——为 SPA 中的各个视图匹配一个唯一标识。这意味着用户前进、后退触发的新内容，都会映射到不同的 URL 上去。此时即便他刷新页面，因为当前的 URL 可以标识出他所处的位置，因此内容也不会丢失。 那么如何实现这个目的呢？首先要解决两个问题：</p><blockquote><p>当用户刷新页面时，浏览器会默认根据当前 URL 对资源进行重新定位（发送请求）。这个动作对 SPA 是不必要的，因为我们的 SPA 作为单页面，无论如何也只会有一个资源与之对应。此时若走正常的请求-刷新流程，反而会使用户的前进后退操作无法被记录。 单页面应用对服务端来说，就是一个URL、一套资源，那么如何做到用“不同的URL”来映射不同的视图内容呢？</p></blockquote><p>从这两个问题来看，服务端已经完全救不了这个场景了。所以要靠咱们前端自力更生，不然怎么叫“前端路由”呢？作为前端，可以提供这样的解决思路：</p><blockquote><p>拦截用户的刷新操作，避免服务端盲目响应、返回不符合预期的资源内容。把刷新这个动作完全放到前端逻辑里消化掉。 感知 URL 的变化。这里不是说要改造 URL、凭空制造出 N 个 URL 来。而是说 URL 还是那个 URL，只不过我们可以给它做一些微小的处理——这些处理并不会影响 URL 本身的性质，不会影响服务器对它的识别，只有我们前端感知的到。一旦我们感知到了，我们就根据这些变化、用 JS 去给它生成不同的内容。</p></blockquote><h3 id="_10-如何解决前端路由刷新404问题" tabindex="-1">10. 如何解决前端路由刷新404问题 <a class="header-anchor" href="#_10-如何解决前端路由刷新404问题" aria-label="Permalink to &quot;10. 如何解决前端路由刷新404问题&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    open: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    host: &quot;localhost&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    port: 3000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    hot: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    compress: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    historyApiFallback: true, // 解决vue-router刷新404问题</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span></code></pre></div><h2 id="vue的性能优化有哪些" tabindex="-1">Vue的性能优化有哪些 <a class="header-anchor" href="#vue的性能优化有哪些" aria-label="Permalink to &quot;Vue的性能优化有哪些&quot;">​</a></h2><h3 id="编码阶段" tabindex="-1">编码阶段 <a class="header-anchor" href="#编码阶段" aria-label="Permalink to &quot;编码阶段&quot;">​</a></h3><ul><li>尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher</li><li>v-if和v-for不能连用</li><li>如果需要使用v-for给每项元素绑定事件时使用事件代理</li><li>SPA 页面采用keep-alive缓存组件</li><li>在更多的情况下，使用v-if替代v-show</li><li>key保证唯一</li><li>使用路由懒加载、异步组件</li><li>防抖、节流</li><li>第三方模块按需导入</li><li>长列表滚动到可视区域动态加载</li><li>图片懒加载</li></ul><h3 id="seo优化" tabindex="-1">SEO优化 <a class="header-anchor" href="#seo优化" aria-label="Permalink to &quot;SEO优化&quot;">​</a></h3><p>预渲染 服务端渲染SSR</p><h3 id="打包优化" tabindex="-1">打包优化 <a class="header-anchor" href="#打包优化" aria-label="Permalink to &quot;打包优化&quot;">​</a></h3><p>压缩代码 Tree Shaking/Scope Hoisting 使用cdn加载第三方模块 多线程打包happypack splitChunks抽离公共文件 sourceMap优化</p><h3 id="用户体验" tabindex="-1">用户体验 <a class="header-anchor" href="#用户体验" aria-label="Permalink to &quot;用户体验&quot;">​</a></h3><p>骨架屏 PWA 还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。</p><h2 id="参考来源" tabindex="-1">参考来源 <a class="header-anchor" href="#参考来源" aria-label="Permalink to &quot;参考来源&quot;">​</a></h2><blockquote><p>来自：程序IT圈 ——《详解 30 道 Vue 面试题（建议收藏）》(知乎)<br> 链接：<a href="https://zhuanlan.zhihu.com/p/447258253" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/447258253</a></p></blockquote><blockquote><p>来自：不太帅的程序员 ——《83个关于「Vue的高频面试」问题整理，适合面试或者全面学习》(知乎)<br> 链接：<a href="https://zhuanlan.zhihu.com/p/438669938?utm_id=0" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/438669938?utm_id=0</a></p></blockquote><blockquote><p>来自：WILLCSDNKK ——《Vue3对比Vue2的改动有哪些》(CSDN)<br> 链接：<a href="https://blog.csdn.net/WILLCSDNKK/article/details/120021612" target="_blank" rel="noreferrer">https://blog.csdn.net/WILLCSDNKK/article/details/120021612</a></p></blockquote><blockquote><p>来自：幕布斯7119047 ——《Vue组件封装原则，全网最详细》(慕课网)<br> 链接：<a href="https://www.imooc.com/article/326149/" target="_blank" rel="noreferrer">https://www.imooc.com/article/326149/</a></p></blockquote><blockquote><p>《Vue.js设计与实现》霍春阳 著</p></blockquote><blockquote><p>来自：尚硅谷 ——《尚硅谷Vue项目实战硅谷甄选，vue3项目+TypeScript前端项目一套通关 讲师：贾成豪》(bilibili)<br> 链接：<a href="https://www.bilibili.com/video/BV1Xh411V7b5/?vd_source=1a8169a934e13ebae47b8fee74976ed2" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1Xh411V7b5/?vd_source=1a8169a934e13ebae47b8fee74976ed2</a></p></blockquote>`,274),C=[i];function u(A,h,d,y,g,m){return n(),e("div",null,C)}const b=a(r,[["render",u]]);export{q as __pageData,b as default};
