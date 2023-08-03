# VUE

## Vue3和vue2的区别
### 1. 静态节点的不同：
+ vue2开发template下面只能放一个div把所有节点包起来，vue3开发template下面能放很多节点;
+ vue.js 3.x中标记和提升所有的静态节点，diff的时候只需要对比动态节点内容；
+ Fragments（升级vetur插件):
+ template中不需要唯一根节点，可以直接放文本或者同级标签;
+ 静态提升(hoistStatic),当使用 hoistStatic 时,所有静态的节点都被提升到 render 方法之外.只会在应用启动的时候被创建一次,之后使用只需要应用提取的静态节点，随着每次的渲染被不停的复用;
+ patch flag, 在动态标签末尾加上相应的标记,只能带 patchFlag 的节点才被认为是动态的元素,会被追踪属性的修改,能快速的找到动态节点,而不用逐个逐层遍历，提高了虚拟dom diff的性能。
+ 缓存事件处理函数cacheHandler,避免每次触发都要重新生成全新的function去更新之前的函数tree shaking 通过摇树优化核心库体积,减少不必要的代码量

### 2. v-if和v-for优先级不同：
vue2中v-for的优先级大于v-if，官方建议是这两个不能放一起，举例：先处理数据把能显示的数据放一个集合，再在li上写v-for；vue3中v-if的优先级大于v-for，先在模板tempalte中写v-for，再在li中写v-if判断每个item是否渲染出来；总结vue3比vue2会少一个数据处理的步骤。

### 3. 响应系统的原理不同：
Vue3中使用了Proxy配合Reflect代替了Vue2中的Object.defineProperty()方法实现数据响应式（数据代理）

### 4. vue3重写了虚拟dom，速度更快了
### 5. vue3中有新的组件：
Fragment（片段）/Telepot（瞬移）/Suspense(不确定)
### 6. vue3设计了新的vite脚手架工具。
### 7. Option API的问题：
在传统的Vue OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 ，滚动条反复上下移动；vue3中使用Compisition API我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。
### 8. Vue3更好的支持TS。

## 响应原理
### vue2响应原理-Object.defineProperty方法
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    let number = 19;
    let exmpleObject = {
      name:'lihua',
      sex:'woman'
    }
    Object.defineProperty(exmpleObject,'age',{
      // value:18,
      enumerable:true,//控制属性是否可以枚举，默认值是false
      // writable:true,//控制属性是否可以被修改，默认值是false
      configurable:true,//控制属性是否可以被删除，默认值false
      //当有人读取exmpleObject的age属性时，get函数（getter）就会被调用，且返回的值就是age的值
      get(){
        return number
      },
      //当有人修改exmpleObject的age属性时，set函数（setter）就会被调用，且会收到修改的具体值
      set(value){
        console.log('修改',value)
        number = value
      }
    })
    console.log(Object.keys(exmpleObject))
    console.log(exmpleObject)
  </script>
</body>
</html>
```
### vue3响应式的原理-proxy代理
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    let user = {
      name: "Jack",
      age: 20,
      wife: {
        name: "lucy",
        age: 18,
        cars: ["奔驰", "宝马", "玛莎拉蒂"],
      },
    }
    const proxyUser = new Proxy(user,{
      get(target,prop){
        console.log('get方法调用了')
        return Reflect.get(target,prop)
      },
      set(target,prop,val){
        console.log('set方法调用了')
        return Reflect.set(target,prop,val)
      },
      deleteProperty(target,prop){
        console.log('delete方法调用了')
        return Reflect.deleteProperty(target,prop)
      }
    })
    console.log(proxyUser.name)
    proxyUser.name = '鸣人'
    console.log(user)
    proxyUser.gender = '男'
    console.log(user)
    delete proxyUser.name
    console.log(user)
    proxyUser.wife.name = '森碟'
    console.log(user)

  </script>
</body>
</html>
```

## 双向数据绑定的原理
Vue.js 是采用 __数据劫持__ 结合 __发布者-订阅者模式__ 的方式，通过Object.defineProperty()（vue3.0使用proxy ）来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤：

1. 需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
2. compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
3. Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: ①在自身实例化时往属性订阅器(dep)里面添加自己 ②自身必须有一个update()方法 ③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
4. MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。
![Alt text](/public/images/base_http/image.png)

## diff算法
在新老虚拟DOM对比时：

首先，对比节点本身，判断是否为同一节点，如果不为相同节点，则删除该节点重新创建节点进行替换
如果为相同节点，进行patchVnode，判断如何对该节点的子节点进行处理，先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)
比较如果都有子节点，则进行updateChildren，判断如何对这些新老节点的子节点进行操作（diff核心）。
匹配时，找到相同的子节点，递归比较子节点
在diff中，只对同层的子节点进行比较，放弃跨级的节点比较，使得时间复杂从O(n3)降低值O(n)，也就是说，只有当新旧children都为多个子节点时才需要用核心的Diff算法进行同层级比较。

## vue3组合式API-Setup
[setup()](https://cn.vuejs.org/api/composition-api-setup.html) 钩子是在组件中使用组合式 API 的入口，通常只在以下情况下使用：
需要在非单文件组件中使用组合式 API 时。
需要在基于选项式 API 的组件中集成基于组合式 API 的代码时。

## vue3的变量定义[ref()](https://cn.vuejs.org/api/reactivity-core.html)和[reactive()](https://cn.vuejs.org/api/reactivity-core.html#reactive)
+ ref()接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value。
+ reactive()返回一个对象的响应式代理。值得注意的是，当访问到某个响应式数组或 Map 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包。

## [computed](https://cn.vuejs.org/api/reactivity-core.html#computed)原理
接受一个 getter 函数，返回一个只读的响应式 ref 对象。该 ref 通过.value暴露 getter 函数的返回值。它也可以接受一个带有 get 和 set 函数的对象来创建一个可写的 ref 对象。

## watch和watchEffect的区别
watch里面配置immediate才会默认执行一次，watchEffect不需要配置immediate，本身默认就会进行监视。
非响应式的参数可使用 ()=>参数 的方法来实现响应。
## 收集表单数据
![Alt text](/public/images/progress_vue/image-4.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="../js/vue.js"></script>
</head>

<body>
  <div id="root">
    <form @submit.prevent="demo">
      <label for="zhanghao">账号：</label>
      <input type="text" id="zhanghao" v-model.trim="userInfo.account">
      <br><br>
      <label for="password">密码：</label>
      <input type="text" id="password" v-model="userInfo.password">
      <br><br>
      <label for="password">年龄：</label>
      <input type="number" id="password" v-model.number="userInfo.age">
      <br><br>
      <label for="sex">性别：</label>
      男<input type="radio" name="sex" value="男" v-model="userInfo.sex">
      女<input type="radio" name="sex" value="女" v-model="userInfo.sex">
      <br><br>
      <label for="hobby">爱好：</label>
      学习<input type="checkbox" name="hobby" v-model="userInfo.hobby" value="1">
      打游戏<input type="checkbox" name="hobby" v-model="userInfo.hobby" value="2">
      吃饭<input type="checkbox" name="hobby" v-model="userInfo.hobby" value="3">
      <br><br>
      所属校区
      <select v-model="userInfo.city">
        <option value="">请选择校区</option>
        <option value="beijing">北京</option>
        <option value="shenzhen">深圳</option>
        <option value="shanghai">上海</option>
        <option value="wuhan">武汉</option>
      </select>
      <br><br>
      其他信息：
      <textarea v-model="userInfo.other"></textarea>
      <br><br>
      <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="www.baidu.com">阅读协议</a>
      <br><br>
      <button>提交</button>
    </form>
  </div>
  <script>
    new Vue({
      el: '#root',
      data: {
        userInfo: {
          account: '',
          password: '',
          age:'',
          sex: '',
          hobby: [],
          city: '',
          other: '',
          agree: ''
        }
      },
      methods: {
        demo() {
          console.log(JSON.stringify(this.userInfo))
        }
      },
    });
  </script>
</body>

</html>
```
## Vue的生命周期
Vue3的生命周期示意图如下：
![Alt text](/public/images/progress_vue/image-1.png)
Vue2的生命周期示意图如下：
![Alt text](/public/images/base_http/image-2.png)
代码示意：
![Alt text](/public/images/base_http/image-3.png)

## vue组件封装原则
1. 数据从父组件传入；
2. 在父组件中处理事件；
3. 留一个slot；
4. 不要依赖vuex/pinia，可以选择放到localstorage中，或者通过props传递等方式；
5. 合理使用scoped；
6. 组件具有单一原则，不够单一再抽离。
## 组件通信
**通信仓库地址:https://gitee.com/jch1011/vue3_communication.git**

不管是vue2还是vue3,组件通信方式很重要,不管是项目还是面试都是经常用到的知识点。

**比如:vue2组件通信方式**
>**props,emit**: 可以实现父子组件、子父组件、甚至兄弟组件通信  
>**自定义事件**: 可以实现子父组件通信  
>**全局事件总线$bus**: 可以实现任意组件通信  
>**pubsub**: 发布订阅模式实现任意组件通信  
>**vuex**: 集中式状态管理容器，实现任意组件通信  
>**ref**: 父组件获取子组件实例VC,获取子组件的响应式数据以及方法  
>**slot** 插槽(默认插槽、具名插槽、作用域插槽)实现父子组件通信........  

深入学习可以参考[《尚硅谷Vue项目实战硅谷甄选-组件通信方式》(bilibili)](https://www.bilibili.com/video/BV1Xh411V7b5?p=3&vd_source=1a8169a934e13ebae47b8fee74976ed2)

### 1.1props

props可以实现父子组件通信,在vue3中我们可以通过defineProps获取父组件传递的数据。且在组件内部不需要引入defineProps方法可以直接使用！

**父组件给子组件传递数据**

```
<Child info="我爱祖国" :money="money"></Child>
```

**子组件获取父组件传递数据:方式1**

```
let props = defineProps({
  info:{
   type:String,//接受的数据类型
   default:'默认参数',//接受默认数据
  },
  money:{
   type:Number,
   default:0
}})
```

**子组件获取父组件传递数据:方式2**

```
let props = defineProps(["info",'money']);
```

子组件获取到props数据就可以在模板中使用了,但是切记props是只读的(只能读取，不能修改)

### 1.2自定义事件

在vue框架中事件分为两种:一种是原生的DOM事件，另外一种自定义事件。

原生DOM事件可以让用户与网页进行交互，比如click、dbclick、change、mouseenter、mouseleave....

自定义事件可以实现子组件给父组件传递数据

#### 1.2.1原生DOM事件

代码如下:

```
 <pre @click="handler">
      我是祖国的老花骨朵
 </pre>
```


当前代码级给pre标签绑定原生DOM事件点击事件,默认会给事件回调注入event事件对象。当然点击事件想注入多个参数可以按照下图操作。但是切记注入的事件对象务必叫做$event.

```
  <div @click="handler1(1,2,3,$event)">我要传递多个参数</div>
```

在vue3框架click、dbclick、change(这类原生DOM事件),不管是在标签、自定义标签上(组件标签)都是原生DOM事件。

**<!--vue2中却不是这样的,在vue2中组件标签需要通过native修饰符才能变为原生DOM事件-->**

#### 1.2.2自定义事件

自定义事件可以实现子组件给父组件传递数据.在项目中是比较常用的。

比如在父组件内部给子组件(Event2)绑定一个自定义事件

```
<Event2  @xxx="handler3"></Event2>
```

在Event2子组件内部触发这个自定义事件

```
<template>
  <div>
    <h1>我是子组件2</h1>
    <button @click="handler">点击我触发xxx自定义事件</button>
  </div>
</template>

<script setup lang="ts">
let $emit = defineEmits(["xxx"]);
const handler = () => {
  $emit("xxx", "法拉利", "茅台");
};
</script>
<style scoped>
</style>
```

我们会发现在script标签内部,使用了defineEmits方法，此方法是vue3提供的方法,不需要引入直接使用。defineEmits方法执行，传递一个数组，数组元素即为将来组件需要触发的自定义事件类型，此方执行会返回一个$emit方法用于触发自定义事件。

当点击按钮的时候，事件回调内部调用$emit方法去触发自定义事件,第一个参数为触发事件类型，第二个、三个、N个参数即为传递给父组件的数据。

需要注意的是:代码如下

```
<Event2  @xxx="handler3" @click="handler"></Event2>
```

正常说组件标签书写@click应该为原生DOM事件,但是如果子组件内部通过defineEmits定义就变为自定义事件了

```
let $emit = defineEmits(["xxx",'click']);
```

### 1.3全局事件总线

全局事件总线可以实现任意组件通信，在vue2中可以根据VM与VC关系推出全局事件总线。

但是在vue3中没有Vue构造函数，也就没有Vue.prototype.以及组合式API写法没有this，

那么在Vue3想实现全局事件的总线功能就有点不现实啦，如果想在Vue3中使用全局事件总线功能

可以使用插件mitt实现。

**mitt:官网地址:https://www.npmjs.com/package/mitt**

### 1.4v-model

v-model指令可是收集表单数据(数据双向绑定)，除此之外它也可以实现父子组件数据同步。

而v-model实指利用props[modelValue]与自定义事件[update:modelValue]实现的。

下方代码:相当于给组件Child传递一个props(modelValue)与绑定一个自定义事件update:modelValue

实现父子组件数据同步

```
<Child v-model="msg"></Child>
```

在vue3中一个组件可以通过使用多个v-model,让父子组件多个数据同步,下方代码相当于给组件Child传递两个props分别是pageNo与pageSize，以及绑定两个自定义事件update:pageNo与update:pageSize实现父子数据同步

```
<Child v-model:pageNo="msg" v-model:pageSize="msg1"></Child>
```



### 1.5useAttrs

在Vue3中可以利用useAttrs方法获取组件的属性与事件(包含:原生DOM事件或者自定义事件),次函数功能类似于Vue2框架中$attrs属性与$listeners方法。

比如:在父组件内部使用一个子组件my-button

```
<my-button type="success" size="small" title='标题' @click="handler"></my-button>
```

子组件内部可以通过useAttrs方法获取组件属性与事件.因此你也发现了，它类似于props,可以接受父组件传递过来的属性与属性值。需要注意如果defineProps接受了某一个属性，useAttrs方法返回的对象身上就没有相应属性与属性值。

```
<script setup lang="ts">
import {useAttrs} from 'vue';
let $attrs = useAttrs();
</script>
```



### 1.6ref与$parent



ref,提及到ref可能会想到它可以获取元素的DOM或者获取子组件实例的VC。既然可以在父组件内部通过ref获取子组件实例VC，那么子组件内部的方法与响应式数据父组件可以使用的。

比如:在父组件挂载完毕获取组件实例

父组件内部代码:

```
<template>
  <div>
    <h1>ref与$parent</h1>
    <Son ref="son"></Son>
  </div>
</template>
<script setup lang="ts">
import Son from "./Son.vue";
import { onMounted, ref } from "vue";
const son = ref();
onMounted(() => {
  console.log(son.value);
});
</script>
```

但是需要注意，如果想让父组件获取子组件的数据或者方法需要通过defineExpose对外暴露,因为vue3中组件内部的数据对外“关闭的”，外部不能访问

```
<script setup lang="ts">
import { ref } from "vue";
//数据
let money = ref(1000);
//方法
const handler = ()=>{
}
defineExpose({
  money,
   handler
})
</script>
```

$parent可以获取某一个组件的父组件实例VC,因此可以使用父组件内部的数据与方法。必须子组件内部拥有一个按钮点击时候获取父组件实例，当然父组件的数据与方法需要通过defineExpose方法对外暴露

```
<button @click="handler($parent)">点击我获取父组件实例</button>
```

### 1.7provide与inject

**provide[提供]**

**inject[注入]**

vue3提供两个方法provide与inject,可以实现隔辈组件传递参数

组件组件提供数据:

provide方法用于提供数据，此方法执需要传递两个参数,分别提供数据的key与提供数据value

```
<script setup lang="ts">
import {provide} from 'vue'
provide('token','admin_token');
</script>
```

后代组件可以通过inject方法获取数据,通过key获取存储的数值

```
<script setup lang="ts">
import {inject} from 'vue'
let token = inject('token');
</script>
```

### 1.8 pinia

**pinia官网:https://pinia.web3doc.top/**

pinia也是集中式管理状态容器,类似于vuex。但是核心概念没有mutation、modules,使用方式参照官网

### 1.9slot

插槽：默认插槽、具名插槽、作用域插槽可以实现父子组件通信.

**默认插槽:**

在子组件内部的模板中书写slot全局组件标签

```
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
</style>
```

在父组件内部提供结构：Todo即为子组件,在父组件内部使用的时候，在双标签内部书写结构传递给子组件

注意开发项目的时候默认插槽一般只有一个

```
<Todo>
  <h1>我是默认插槽填充的结构</h1>
</Todo>
```

**具名插槽：**

顾名思义，此插槽带有名字在组件内部留多个指定名字的插槽。

下面是一个子组件内部,模板中留两个插槽

```
<template>
  <div>
    <h1>todo</h1>
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped>
</style>
```

父组件内部向指定的具名插槽传递结构。需要注意v-slot：可以替换为#

```
<template>
  <div>
    <h1>slot</h1>
    <Todo>
      <template v-slot:a>  //可以用#a替换
        <div>填入组件A部分的结构</div>
      </template>
      <template v-slot:b>//可以用#b替换
        <div>填入组件B部分的结构</div>
      </template>
    </Todo>
  </div>
</template>

<script setup lang="ts">
import Todo from "./Todo.vue";
</script>
<style scoped>
</style>
```

**作用域插槽**

作用域插槽：可以理解为，子组件数据由父组件提供，但是子组件内部决定不了自身结构与外观(样式)

子组件Todo代码如下:

```
<template>
  <div>
    <h1>todo</h1>
    <ul>
     <!--组件内部遍历数组-->
      <li v-for="(item,index) in todos" :key="item.id">
         <!--作用域插槽将数据回传给父组件-->
         <slot :$row="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
defineProps(['todos']);//接受父组件传递过来的数据
</script>
<style scoped>
</style>
```

父组件内部代码如下:

```
<template>
  <div>
    <h1>slot</h1>
    <Todo :todos="todos">
      <template v-slot="{$row,$index}">
         <!--父组件决定子组件的结构与外观-->
         <span :style="{color:$row.done?'green':'red'}">{{$row.title}}</span>
      </template>
    </Todo>
  </div>
</template>

<script setup lang="ts">
import Todo from "./Todo.vue";
import { ref } from "vue";
//父组件内部数据
let todos = ref([
  { id: 1, title: "吃饭", done: true },
  { id: 2, title: "睡觉", done: false },
  { id: 3, title: "打豆豆", done: true },
]);
</script>
<style scoped>
</style>
```

## [Pina](https://pinia.vuejs.org/zh/core-concepts/)和[vuex](https://vuex.vuejs.org/zh/)
Pina和vuex都可用于Vue 的状态管理库。

__对比 Vuex__

Pinia 起源于一次探索 Vuex 下一个迭代的实验，因此结合了 Vuex 5 核心团队讨论中的许多想法。最后，我们意识到 Pinia 已经实现了我们在 Vuex 5 中想要的大部分功能，所以决定将其作为新的推荐方案来代替 Vuex。

与 Vuex 相比，Pinia 不仅提供了一个更简单的 API，也提供了符合组合式 API 风格的 API，最重要的是，搭配 TypeScript 一起使用时有非常可靠的类型推断支持。
## keep-alive
### 1. keep-alive原理
他是通过一个算法，对页面进行缓存。使用频率搞的会放上面，使用频率少的会在最后，如果最后装满了，使用频率不高的，会清除掉。
使用场景，一般是列表去详情，然后回来，缓存列表。 还加一个生命周期，activityed ，如果缓存命中后会调用这个方法。
### 2. keep-alive 中的生命周期哪些
keep-alive是 Vue 提供的一个内置组件，用来对组件进行缓存——在组件切换过程中将状态保留在内存中，防止重复渲染DOM。

如果为一个组件包裹了 keep-alive，那么它会多出两个生命周期：deactivated、activated。同时，beforeDestroy 和 destroyed 就不会再被触发了，因为组件不会被真正销毁。

当组件被换掉时，会被缓存到内存中、触发 deactivated 生命周期；当组件被切回来时，再去缓存里找这个组件、触发 activated钩子函数。


## $nextTick 原理及作用
Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。

nextTick 的核心是利用了如 Promise 、MutationObserver、setImmediate、setTimeout的原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。

nextTick 不仅是 Vue 内部的异步队列的调用方法，同时也允许开发者在实际项目中使用这个方法来满足实际应用中对 DOM 更新数据时机的后续逻辑处理

nextTick 是典型的将底层 JavaScript 执行原理应用到具体案例中的示例，引入异步更新队列机制的原因∶

+ 如果是同步更新，则多次对一个或多个属性赋值，会频繁触发 UI/DOM 的渲染，可以减少一些无用渲染
+ 同时由于 VirtualDOM 的引入，每一次状态发生变化后，状态变化的信号会发送给组件，组件内部使用 VirtualDOM 进行计算得出需要更新的具体的 DOM 节点，然后对 DOM 进行更新操作，每次更新状态后的渲染过程需要更多的计算，而这种无用功也将浪费更多的性能，所以异步渲染变得更加至关重要

Vue采用了数据驱动视图的思想，但是在一些情况下，仍然需要操作DOM。有时候，可能遇到这样的情况，DOM1的数据发生了变化，而DOM2需要从DOM1中获取数据，那这时就会发现DOM2的视图并没有更新，这时就需要用到了nextTick了。

由于Vue的DOM操作是异步的，所以，在上面的情况中，就要将DOM2获取数据的操作写在$nextTick中。
```
this.$nextTick(() => {    // 获取数据的操作...}) 
```
所以，在以下情况下，会用到nextTick：

+ 在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的DOM结构的时候，这个操作就需要方法在nextTick()的回调函数中。
+ 在vue生命周期中，如果在created()钩子进行DOM操作，也一定要放在nextTick()的回调函数中。

因为在created()钩子函数中，页面的DOM还未渲染，这时候也没办法操作DOM，所以，此时如果想要操作DOM，必须将操作的代码放在nextTick()的回调函数中。

## [Vue Router](https://router.vuejs.org/zh/introduction.html)路由
### 1. Vue-Router 的懒加载如何实现
非懒加载：
```
import List from '@/components/list.vue'
const router = new VueRouter({
  routes: [
    { path: '/list', component: List }
  ]
}
```
方案一(常用)：使用箭头函数+import动态加载
```
const List = () => import('@/components/list.vue')
const router = new VueRouter({
  routes: [
    { path: '/list', component: List }
  ]
})
```
方案二：使用箭头函数+require动态加载
```
const router = new Router({
  routes: [
   {
     path: '/list',
     component: resolve => require(['@/components/list'], resolve)
   }
  ]
})
```
方案三：使用webpack的require.ensure技术，也可以实现按需加载。 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
```
// r就是resolve
const List = r => require.ensure([], () => r(require('@/components/list')), 'list');
// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
const router = new Router({
  routes: [
  {
    path: '/list',
    component: List,
    name: 'list'
  }
 ]
}))
```
### 2. 路由的hash和history模式的区别
Vue-Router有两种模式：hash模式和history模式。默认的路由模式是hash模式。

#### 2.1 hash模式

+ 简介： hash模式是开发中默认的模式，它的URL带着一个#，例如：www.abc.com/#/vue，它的hash值就是#/vue。

+ 特点：hash值会出现在URL里面，但是不会出现在HTTP请求中，对后端完全没有影响。所以改变hash值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的IE浏览器也支持这种模式。hash路由被称为是前端路由，已经成为SPA（单页面应用）的标配。

+ 原理： hash模式的主要原理就是onhashchange()事件：
```
window.onhashchange = function(event){
	console.log(event.oldURL, event.newURL);
	let hash = location.hash.slice(1);
}
```
> 使用onhashchange()事件的好处就是，在页面的hash值发生变化时，无需向后端发起请求，window就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash值变化对应的URL都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退。虽然是没有请求后端服务器，但是页面的hash值和对应的URL关联起来了。

#### 2.2 history模式

__简介：__ history模式的URL中没有#，它使用的是传统的路由分发模式，即用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理。

__特点：__ 当使用history模式时，URL就像这样：abc.com/user/id。相比hash模式更加好看。但是，history模式需要后台配置支持。如果后台没有正确配置，访问时会返回404。

__API：__ history api可以分为两大部分，切换历史状态和修改历史状态：

+ __修改历史状态：__ 包括了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了url，但浏览器不会立即向后端发送请求。如果要做到改变url但又不刷新页面的效果，就需要前端用上这两个API。
+ __切换历史状态：__ 包括forward()、back()、go()三个方法，对应浏览器的前进，后退，跳转操作。
虽然history模式丢弃了丑陋的#。但是，它也有自己的缺点，就是在刷新页面的时候，如果没有相应的路由或资源，就会刷出404来。
如果想要切换到history模式，就要进行以下配置（后端也要进行配置）：
```
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```
#### 2.3 两种模式对比

调用 history.pushState() 相比于直接修改 hash，存在以下优势:

+ pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
+ pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
+ pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
+ pushState() 可额外设置 title 属性供后续使用。
+ hash模式下，仅hash符号之前的url会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回404错误；history模式下，前端的url必须和实际向后端发起请求的url一致，如果没有对用的路由处理，将返回404错误。

hash模式和history模式都有各自的优势和缺陷，还是要根据实际情况选择性的使用。

### 3. 如何获取页面的hash变化
__监听$route的变化__
```
// 监听,当路由发生变化的时候执行
watch: {
  $route: {
    handler: function(val, oldVal){
      console.log(val);
    },
    // 深度观察监听
    deep: true
  }
},
```
__window.location.hash读取#值__

window.location.hash 的值可读可写，读取来判断状态是否改变，写入时可以在不重载网页的前提下，添加一条历史访问记录。

### 4. $route 和$router 的区别
+ $route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数;
+ $router 是“路由实例”对象包括了路由的跳转方法，钩子函数等。

### 5. 如何定义动态路由？如何获取传过来的动态参数？
### 6. Vue-router 路由钩子在生命周期的体现
+  使用 location.href= /url 来跳转，简单方便，但是刷新了页面；

+  使用 history.pushState( /url ) ，无刷新页面，静态跳转；

+  引进 router ，然后使用 router.push( /url ) 来跳转，使用了 diff 算法，实现了按需加载，减少了 dom 的消耗。其实使用 router 跳转和使用 history.pushState() 没什么差别的，因为vue-router就是用了history.pushState() ，尤其是在history模式下。

### 7. Vue-router跳转和location.href有什么区别
__用法：__ query要用path来引入，params要用name来引入，接收参数都是类似的，分别是 this.$route.query.name和 this.$route.params.name 。

__url地址显示：__ query更加类似于ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示

__注意：__ query刷新不会丢失query里面的数据 params刷新会丢失 params里面的数据。

### 8. params和query的区别
+ 全局前置/钩子：beforeEach、beforeResolve、afterEach
+ 路由独享的守卫：beforeEnter
+ 组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
### 9. Vue-router 导航守卫有哪些
在前端技术早期，一个 url 对应一个页面，如果要从 A 页面切换到 B 页面，那么必然伴随着页面的刷新。这个体验并不好，不过在最初也是无奈之举——用户只有在刷新页面的情况下，才可以重新去请求数据。

后来，改变发生了——Ajax 出现了，它允许人们在不刷新页面的情况下发起请求；与之共生的，还有“不刷新页面即可更新页面内容”这种需求。在这样的背景下，出现了 SPA（单页面应用）。

SPA极大地提升了用户体验，它允许页面在不刷新的情况下更新页面内容，使内容的切换更加流畅。但是在 SPA 诞生之初，人们并没有考虑到“定位”这个问题——在内容切换前后，页面的 URL 都是一样的，这就带来了两个问题：

> SPA 其实并不知道当前的页面“进展到了哪一步”。可能在一个站点下经过了反复的“前进”才终于唤出了某一块内容，但是此时只要刷新一下页面，一切就会被清零，必须重复之前的操作、才可以重新对内容进行定位——SPA 并不会“记住”你的操作。
> 由于有且仅有一个 URL 给页面做映射，这对 SEO 也不够友好，搜索引擎无法收集全面的信息
为了解决这个问题，前端路由出现了。

前端路由可以帮助我们在仅有一个页面的情况下，“记住”用户当前走到了哪一步——为 SPA 中的各个视图匹配一个唯一标识。这意味着用户前进、后退触发的新内容，都会映射到不同的 URL 上去。此时即便他刷新页面，因为当前的 URL 可以标识出他所处的位置，因此内容也不会丢失。
那么如何实现这个目的呢？首先要解决两个问题：

> 当用户刷新页面时，浏览器会默认根据当前 URL 对资源进行重新定位（发送请求）。这个动作对 SPA 是不必要的，因为我们的 SPA 作为单页面，无论如何也只会有一个资源与之对应。此时若走正常的请求-刷新流程，反而会使用户的前进后退操作无法被记录。
> 单页面应用对服务端来说，就是一个URL、一套资源，那么如何做到用“不同的URL”来映射不同的视图内容呢？

从这两个问题来看，服务端已经完全救不了这个场景了。所以要靠咱们前端自力更生，不然怎么叫“前端路由”呢？作为前端，可以提供这样的解决思路：

> 拦截用户的刷新操作，避免服务端盲目响应、返回不符合预期的资源内容。把刷新这个动作完全放到前端逻辑里消化掉。
> 感知 URL 的变化。这里不是说要改造 URL、凭空制造出 N 个 URL 来。而是说 URL 还是那个 URL，只不过我们可以给它做一些微小的处理——这些处理并不会影响 URL 本身的性质，不会影响服务器对它的识别，只有我们前端感知的到。一旦我们感知到了，我们就根据这些变化、用 JS 去给它生成不同的内容。


### 10. 如何解决前端路由刷新404问题
```
devServer: {
    open: true,
    host: "localhost",
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true, // 解决vue-router刷新404问题
  },
```


## 参考来源
> 来自：程序IT圈 ——《详解 30 道 Vue 面试题（建议收藏）》(知乎)  
> 链接：https://zhuanlan.zhihu.com/p/447258253

> 来自：不太帅的程序员 ——《83个关于「Vue的高频面试」问题整理，适合面试或者全面学习》(知乎)  
> 链接：https://zhuanlan.zhihu.com/p/438669938?utm_id=0

>来自：WILLCSDNKK ——《Vue3对比Vue2的改动有哪些》(CSDN)  
>链接：https://blog.csdn.net/WILLCSDNKK/article/details/120021612

>来自：幕布斯7119047 ——《Vue组件封装原则，全网最详细》(慕课网)  
>链接：https://www.imooc.com/article/326149/

> 《Vue.js设计与实现》霍春阳 著

>来自：尚硅谷 ——《尚硅谷Vue项目实战硅谷甄选，vue3项目+TypeScript前端项目一套通关 讲师：贾成豪》(bilibili)  
>链接：https://www.bilibili.com/video/BV1Xh411V7b5/?vd_source=1a8169a934e13ebae47b8fee74976ed2
