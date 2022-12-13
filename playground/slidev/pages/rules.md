# 规则

`hook` 本身时 `JavaScript` 函数，但是它可以和 React 进行通信所以有一定的使用规则。

- 只能在最顶层使用 `hook`，不要在循环，条件或嵌套函数中调用
- 只在 React 函数中调用 `hook`
- 自定义 `hook` 以 `use` 开头