# 逻辑复用

除了 React 内置的 `hook` 外，我们还可以自定义 `hook`，这样便于进行逻辑复用。

<v-click>

在 `hook` 之前进行组件之间的逻辑复用时一般有以下几种：

</v-click>

<v-clicks>

- Mixin - _目前基本弃用_
- 高阶组件（HOC）- _高阶组件是参数为组件，返回值为新组件的函数_
- render-props - _render prop 是一个用于告知组件需要渲染什么内容的函数 prop_

</v-clicks>

---

# 自定义 `hook`

<v-click>

```javascript {all|3,19,21|4|5,16|6-15|12|14|all}
import { useState, useEffect } from "react";

function useCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const func = e => {
      setCursor({
        x: e.x,
        y: e.y,
      });
    };
    window.addEventListener("mousemove", func);
    return () => {
      window.removeEventListener("mousemove", func);
    };
  }, []);

  return cursor;
}

export default useCursor;
```

</v-click>

---
src: ./pages/rules.md
---
