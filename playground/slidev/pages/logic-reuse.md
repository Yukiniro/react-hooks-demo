# 自定义 `hook`

```javascript
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

---

除了 React 内置的 `hook` 外，我们还可以自定义 `hook`，这样便于进行逻辑复用。

在 `hook` 之前进行组件之间的逻辑复用时一般有以下几种：

- Mixin - _目前基本弃用_
- 高阶组件（HOC）
- render-props

---
src: ./pages/rules.md
---
