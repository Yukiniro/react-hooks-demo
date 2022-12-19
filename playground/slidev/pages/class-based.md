---
layout: image-right
image: /public/2.jpg
---

# 基于 **类** 的组件

<v-clicks>

- 具有自身的状态 `state`
- 具有生命周期 `componentDidUpdate` 等
- 具有组件实例

</v-clicks>

<v-click>

```javascript
class MyClassComponent extends Componet {
  constructor() {
    this.state = { count: 1 };
  }

  componentDidUpdate() {
    console.log(this.state.count);
  }

  render() {
    const { count } = this.state;
    return <div>{count}</div>;
  }
}
```

</v-click>

---
src: ./pages/function-based.md
---