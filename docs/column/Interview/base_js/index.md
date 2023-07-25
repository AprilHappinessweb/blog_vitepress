# JAVASCRIPT

## 闭包
闭包是指函数以及其在定义时可访问的外部变量的组合。简单来说，闭包是一个函数和对其周围环境（词法环境）的引用的组合体。

闭包的产生是因为 JavaScript 中的函数具有词法作用域，即函数可以访问其定义时所处的上下文中的变量。当一个函数内部定义了另一个函数，并且内部的函数引用了外部函数的变量，那么内部函数就形成了一个闭包。

闭包可以让内部函数访问到外部函数的变量，即使外部函数已经执行完毕，这也意味着闭包可以"记住"并访问创建它的上下文中的变量。闭包在 JavaScript 中有许多应用，包括数据封装、模块化开发、私有变量等。

理解：主要是为了设计私有的方法和变量。
优点：可以避免全局变量造成污染。
缺点：闭包会常驻内存，增加内存使用量，使用不当会造成内存泄漏。
特征：（1）函数嵌套函数。（2）在函数内部可以引用外部的参数和变量。（3）参数和变量不会以垃圾回收机制回收。

下面是一个简单的闭包示例：

```js
function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

var closure = outer();
closure(); // 输出 10
```

闭包可以保留外部函数的变量状态，并且每次对内部函数的调用都可以访问到这些状态。这使得闭包能够在函数之间创建数据的私有空间，避免全局命名冲突，并且可以实现高级的编程模式，如柯里化和函数式编程。

注：由于闭包会持有对外部变量的引用，在使用不当的情况下可能会导致内存泄漏。因此，合理地使用闭包，避免无限制地引用外部的变量是很重要的。

此处内容由“晓”整理。

## 防抖与节流
+ 节流（throttle）：在规定的时间间隔范围内不会重复触发回调。只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发。
+ 防抖（debounce）：前面的所有触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发，只会执行一次。
可使用lodash插件实现函数的防抖与节流。

## 深拷贝，浅拷贝
深拷贝（Deep Copy）和浅拷贝（Shallow Copy）是在编程中常用的两种拷贝数据的方式。

浅拷贝：是指创建一个新的对象或数组，并将原始对象或数组中的元素的引用复制给新对象或数组。简单来说，浅拷贝只复制对象或数组的第一层，不会递归复制嵌套的对象或数组。

深拷贝：是指创建一个新的对象或数组，并递归地复制原始对象或数组中所有的元素及其属性。也就是说，深拷贝不仅复制了第一层的对象或数组，还会递归复制嵌套的对象或数组。

为了更好地理解深拷贝和浅拷贝，以下是它们的特点和示例：

浅拷贝的特点：

- 新对象或数组与原对象或数组共享相同的引用。
- 修改新对象或数组的属性或元素会影响原对象或数组。
- 浅拷贝可以通过一些浅拷贝方法或运算符实现，如 Object.assign()、Array.prototype.slice()、展开运算符等。

示例代码：

```js
const obj1 = { name: 'Alice', age: 25 };
const obj2 = Object.assign({}, obj1);
obj2.name = 'Bob';

console.log(obj1);  // { name: 'Alice', age: 25 }
console.log(obj2);  // { name: 'Bob', age: 25 }
```

深拷贝的特点：

- 新对象或数组与原对象或数组完全独立，没有共享的引用。
- 修改新对象或数组的属性或元素不会影响原对象或数组。
- 深拷贝可以通过一些深拷贝方法实现，如递归遍历拷贝、JSON 序列化与反序列化等。

示例代码：

```js
const obj1 = { name: 'Alice', age: 25 };
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = 'Bob';

console.log(obj1);  // { name: 'Alice', age: 25 }
console.log(obj2);  // { name: 'Bob', age: 25 }
```
以上内容由“晓”整理，也可学习下面这篇文章加强：  
[如何写出一个惊艳面试官的深拷贝?(作者：ConardLi，稀土掘金)](https://juejin.cn/post/6844903929705136141)

## 异步
这部分着重要理解 Promise、async awiat、event loop 等。
### 1. event loop、宏任务和微任务
首先推荐一个可以在线看代码流程的网站：loupe。

然后看下这个视频学习下：到底什么是 Event Loop 呢？
简单的例子：
```
console.log("Hi");

setTimeout(function cb() {
  console.log("cb"); // cb 即 callback
}, 5000);

console.log("Bye");
```
它的执行过程是这样的：
![Alt text](/public/images/base_js/image.png)

Web APIs 会创建对应的线程，比如 setTimeout 会创建定时器线程，ajax 请求会创建 http 线程。。。这是由 js 的运行环境决定的，比如浏览器。

看完上面的视频之后，至少大家画 Event Loop 的图讲解不是啥问题了，但是涉及到宏任务和微任务，我们还得拜读一下这篇文章：[这一次，彻底弄懂 JavaScript 执行机制。](https://juejin.cn/post/6844903512845860872)如果意犹未尽，不如再读下这篇非常详细带有大量动图的文章：[做一些动图，学习一下 EventLoop。](https://juejin.cn/post/6969028296893792286#comment)想了解事件循环和页面渲染之间关系的又可以再阅读这篇文章：[深入解析你不知道的 EventLoop 和浏览器渲染、帧动画、空闲回调（动图演示）。](https://juejin.cn/post/6844904165462769678)

__注意：1.Call Stack 调用栈空闲 -> 2.尝试 DOM 渲染 -> 触发 Event loop。__

+ 每次 Call Stack 清空（即每次轮询结束），即同步任务执行完。
+ 都是 DOM 重新渲染的机会，DOM 结构有改变则重新渲染。
+ 然后再去触发下一次 Event loop。

宏任务：setTimeout，setInterval，Ajax，DOM 事件。
微任务：Promise async/await。

两者区别：

宏任务：DOM 渲染后触发，如 setTimeout 、setInterval 、DOM 事件 、script 。
微任务：DOM 渲染前触发，如 Promise.then 、MutationObserver 、Node 环境下的 process.nextTick 。

__从 event loop 解释，为何微任务执行更早？__

+ 微任务是 ES6 语法规定的（被压入 micro task queue）。
+ 宏任务是由浏览器规定的（通过 Web APIs 压入 Callback queue）。
+ 宏任务执行时间一般比较长。
+ 每一次宏任务开始之前一定是伴随着一次 event loop 结束的，而微任务是在一次 event loop 结束前执行的。

### 2. Promise
关于这一块儿没什么好说的，最好是实现一遍 Promise A+ 规范，多少有点印象，当然面试官也不会叫你默写一个完整的出来，但是你起码要知道实现原理。

> 关于 Promise 的所有使用方式，可参照这篇文章：[ECMAScript 6 入门 - Promise 对象。](https://es6.ruanyifeng.com/#docs/promise)
手写 Promise 源码的解析文章，可阅读此篇文章：[从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节。](https://juejin.cn/post/6945319439772434469#heading-0)
关于 Promise 的面试题，可参考这篇文章：[要就来 45 道 Promise 面试题一次爽到底。](https://juejin.cn/post/6844904077537574919)

实现一个 Promise.all：
```
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    // 参数可以不是数组，但必须具有 Iterator 接口
    if (typeof promises[Symbol.iterator] !== "function") {
      reject("Type error");
    }
    if (promises.length === 0) {
      resolve([]);
    } else {
      const res = [];
      let count = 0;
      const len = promises.length;
      for (let i = 0; i < len; i++) {
        //考虑到 promises[i] 可能是 thenable 对象也可能是普通值
        Promise.resolve(promises[i])
          .then((data) => {
            res[i] = data;
            if (++count === len) {
              resolve(res);
            }
          })
          .catch((err) => {
            reject(err);
          });
      }
    }
  });
};
```

### 3. async/await 和 Promise 的关系
+ async/await 是消灭异步回调的终极武器。
+ 但和 Promise 并不互斥，反而，两者相辅相成。
+ 执行 async 函数，返回的一定是 Promise 对象。
+ await 相当于 Promise 的 then。
+ tru...catch 可捕获异常，代替了 Promise 的 catch。

## applay 实现


13、原型和原型链
答：
原型：每一个 JavaScript 对象（null 除外）在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性，其实就是 prototype 对象。
原型链：由相互关联的原型组成的链状结构就是原型链。

## 浏览器垃圾回收机制
JavaScript是垃圾回收语言，哪个变量不用了就会周期性的被清除。

目前有两种策略：

标记清理和引用计数。标记清理就是在上下文执行中会标记变量的进入和离开，垃圾回收程序会做销毁带标记的变量和回收内存。引用计算就是每个值会记录引用次数，当次数为0，垃圾回收就会收走它。

## 原型链和继承

原型链（Prototype Chain）是 JavaScript 中对象之间继承关系的一种机制。每个对象都有一个原型对象（Prototype Object），并且可以通过原型链来访问和继承原型对象的属性和方法。

在 JavaScript 中，每个函数都有一个 `prototype` 属性，它是一个指向原型对象的指针。当我们使用 `new` 关键字创建一个对象时，这个对象会`继承其构造函数`的**原型对象上**的**属性**和**方法**。

原型链继承是通过将一个对象的原型设置为另一个对象实现的。在 ES6 之前，我们可以使用 `prototype` 属性和构造函数来实现继承。

下面是一个使用 `prototype` 和构造函数实现继承的示例：

```js
// 父类
function Animal(name) {
  this.name = name;
}

// 父类的方法
Animal.prototype.sayName = function() {
  console.log("My name is " + this.name);
};

// 子类
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// 使用父类的原型对象作为子类的原型对象
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// 子类的方法
Dog.prototype.bark = function() {
  console.log("Woof!");
};

// 创建对象并调用方法
var dog = new Dog("Buddy", "Labrador");
dog.sayName(); // 输出 "My name is Buddy"
dog.bark(); // 输出 "Woof!"
```

上面了例子中：定义了一个父类 `Animal` 和一个子类 `Dog`。父类有一个 `name` 属性和一个 `sayName` 方法，子类继承了父类的属性和方法，并且添加了自己的属性 `breed` 和方法 `bark`。

使用 `Animal.call(this, name)` 来调用父类的构造函数，以便在子类中设置父类的属性。然后，通过 `Object.create(Animal.prototype)` 将父类的原型对象作为子类的原型对象，实现原型链继承。最后，我们将子类的原型对象的 `constructor` 属性设置为子类本身，这是为了保持正确的构造函数引用。

实现基于原型链的继承。子类通过原型链可以访问和继承父类的属性和方法，实现代码的复用和组织

## 如何判断webview是否加载完成
1. [你真的了解webview么？](https://zhuanlan.zhihu.com/p/58691238)
2. [在微信小程序的web-view，网页加载成功时候能触发bindload事件，网页加载失败的时候触发binderror事件，可根据这两个事件判断webview加载完成情况。](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)
3. [通过NavigationDelegate实现判断webview加载完成情况](https://www.jianshu.com/p/e32abad716d1)



## 参考来源
> 来自：vortesnail ——《做了一份前端面试复习计划，保熟～》(稀土掘金)  
> 链接：https://juejin.cn/post/7061588533214969892

> 来自：MonchLee ——《可能是最好的BFC解析了...》(稀土掘金)  
> 链接：https://juejin.cn/post/6960866014384881671

> 来自：阮一峰 ——《Flex 布局教程：语法篇》
> 链接：https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

> 《JavaScript高级程序设计》[美]马特·弗利斯比 著 李松峰 译
