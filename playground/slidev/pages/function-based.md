---
layout: image-left
image: /public/3.jpg
---

- 基于 **函数** 的组件
  - 没有状态
  - 没有生命周期
  - 没有组件实例
  - 纯粹的 `data -> view` 映射

```javascript
function MyClassComponent(props) {
  const { count } = props;
  return <div>{count}</div>;
}
```

---
src: ./pages/what-is-hook.md
---
