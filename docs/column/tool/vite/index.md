# Vite
## 为什么选择vite？
+ 浏览器开始原生支持ES模块，且越来越多的JavaScript工具使用编译型语言编写。
+ 解决缓慢的服务器启动问题：
>Vite使用esbuild预构建依赖，快。
>Vite以原生ESM方式提供源码，按需提供源码。
+ 解决缓慢的更新问题：
> 在 Vite 中，HMR 是在原生 ESM 上执行的。
> Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）。
> Vite 附带了一套构建优化的构建命令，开箱即用。

## 参考来源
[vite官方中文文档](https://cn.vitejs.dev/guide/why.html)