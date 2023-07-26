# [webpack](https://webpack.js.org/)

## Webpack 基础之 5 个核心概念

1. entry：入口。
2. output：输出。
3. loader：加载器，比如处理样式（包括样式预处理）、图片、字体、音频、bable（js 编译器），写在如下编码里。
```
module：{
  rules[{
  }]
}
```
4. plugins：插件，比如处理 html 资源和压缩、css 压缩兼容、elsint 语法检测等。
5. mode：开发或生产模式，在根目录下的 config 文件夹中创建。
6. 生产环境中，把压缩的插件写在 optimization 里。

## Webpack 构建流程简单说一下：

   - 读取配置文件：Webpack 会根据配置文件中的内容创建一个 Compiler 对象，以及设置各种默认配置。
   - 确定入口：根据配置文件中的入口路径，确定项目的入口文件。
   - 解析模块：Webpack 从入口文件开始，递归解析模块依赖关系，生成一个依赖图。
   - 加载和转换：Webpack 根据模块的类型，使用相应的 Loader 加载并转换模块的源代码。
   - 分割代码：根据配置文件中的拆分策略，将模块进行合并或分割，生成最终的代码块。
   - 输出结果：生成最终的打包文件，将输出的代码块写入到指定的目录。
   - 执行插件：在不同的构建阶段执行插件的对应方法，完成自定义的功能。

## Webpack 优化
 ### 1. 提升开发体验
  + 使用  Source Map  让开发或上线时代码报错能有更加准确的错误提示。 
 ### 2.提升 webpack 提升打包构建速度
  + 使用  HotModuleReplacement  让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。
  + 使用  OneOf  让资源文件一旦被某个 loader 处理了，就不会继续遍历了，打包速度更快。
  + 使用  Include/Exclude  排除或只检测某些文件，处理的文件更少，速度更快。
  + 使用  Cache  对 eslint 和 babel 处理的结果进行缓存，让第二次打包速度更快。
  + 使用  Thead  多进程处理 eslint 和 babel 任务，速度更快。（需要注意的是，进程启动通信都有开销的，要在比较多代码处理时使用才有效果）
  + Performance：false；//关闭性能分析，提高打包速度 
  ### 3.减少代码体积
  + 使用  Tree Shaking  剔除了没有使用的多余代码，让代码体积更小。
  + 使用  @babel/plugin-transform-runtime  插件对 babel 进行处理，让辅助代码从中引入，而不是每个文件都生成辅助代码，从而体积更小。
  + 使用  Image Minimizer  对项目中图片进行压缩，体积更小，请求速度更快。（需要注意的是，如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。） 
  ### 4.优化代码运行性能
  + 使用  Code Split  对代码进行分割成多个 js 文件，从而使单个文件体积更小，并行加载 js 速度更快。并通过 import 动态导入语法进行按需加载，从而达到需要使用时才加载该资源，不用时不加载资源。
  + 使用  Preload / Prefetch  对代码进行提前加载，等未来需要使用时就能直接使用，从而用户体验更好。
  + 使用  Network Cache  能对输出资源文件进行更好的命名，将来好做缓存，从而用户体验更好。
  + 使用  Core-js  对 js 进行兼容性处理，让我们代码能运行在低版本浏览器。
  + 使用  PWA  能让代码离线也能访问，从而提升用户体验。


## Loader
### 1. Loader的原理是什么？
Loader 是帮助 webpack 将不同类型的文件转换为 webpack 可识别的模块。
### 2. 编写 Loader 的思路包括：

   - 确定输入和输出：确定 Loader 接收的源代码类型和输出的目标代码类型。
   - 编写处理函数：编写一个 JavaScript 函数，接收源代码作为参数，并对其进行转换、处理等操作。
   - 处理参数配置：在 Loader 函数中可以通过 `this.query` 或 `this.getOptions()` 获取传递给 Loader 的参数配置。
   - 输出结果：将处理后的结果返回给 Webpack，作为下一个 Loader 或插件的输入。
### 3. 常见的 Loader 有：

   - babel-loader：用于将 ES6+ 代码转换为兼容的 JavaScript 代码。
   - style-loader：将 CSS 插入到 DOM 中。
   - css-loader：解析 CSS 文件，并处理其中的依赖关系。
   - file-loader：处理文件（如图片、字体等）的导入。
   - url-loader：与 file-loader 类似，但可以设置阈值，小文件可以转换为 Data URL。
   - sass-loader：将 Sass/SCSS 文件转换为 CSS。

   我使用过的 Loader 包括 babel-loader、style-loader、css-loader、file-loader 等。
## plugin
### 1. plugin 的原理是什么？
webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。webpack 通过 Tapable 来组织这条复杂的生产线。 webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。 webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。 ——「深入浅出 Webpack」
站在代码逻辑的角度就是：webpack 在编译代码过程中，会触发一系列  Tapable  钩子事件，插件所做的，就是找到相应的钩子，往上面挂上自己的任务，也就是注册事件，这样，当 webpack 构建的时候，插件注册的事件就会随着钩子的触发而执行了。
### 编写 Plugin 的思路包括：

   - 创建一个 JavaScript 类，用于定义插件的行为。
   - 在类中实现 `apply` 方法，该方法会在构建过程中被 Webpack 调用。
   - 在 `apply` 方法中监听或修改特定的构建事件，并执行自定义的功能。
   - 使用钩子函数来处理不同的构建阶段，例如 `beforeRun`、`compilation`、`emit` 等。
   - 在 `apply` 方法中使用 Webpack 提供的 API 来操作和修改编译的结果，或输出一些额外的文件等。
### 2. 常见的 Plugin 有：

   - HtmlWebpackPlugin：用于生成 HTML 文件，并自动引入打包后的资源。
   - MiniCssExtractPlugin：将 CSS 提取为独立的文件。
   - CleanWebpackPlugin：清理构建目录。
   - CopyWebpackPlugin：将指定的文件或目录复制到构建目录。
   - DefinePlugin：定义全局常量。

   我使用过的 Plugin 包括 HtmlWebpackPlugin、MiniCssExtractPlugin、CleanWebpackPlugin 等。

## 参考来源
[尚硅谷Webpack5入门到原理（面试开发一条龙）](https://www.bilibili.com/video/BV14T4y1z7sw/?spm_id_from=333.337.search-card.all.click&vd_source=1a8169a934e13ebae47b8fee74976ed2)


