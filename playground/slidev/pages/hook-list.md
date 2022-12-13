---
layout: two-cols
---

## 常用 `hook`

- useState
- useEffect
- useLayoutEffect
- useMemo
- useCallback
- useRef
- useContext
- useReducer
- useImperativeHandle
- useDeferredValue
- useTransition
- useDebugValue

::right::

## 其他 `hook`

- useId
- useSyncExternalStore
- useInsertionEffect

---
layout: center
---

# useState

```javascript
const [count, setCount] = useState(0);
```

---
layout: center
---

# useEffect

```javascript
useEffect(() => {
  ChatAPI.subscribe();
});
```

---
layout: center
---

# useLayoutEffect

```javascript
useLayoutEffect(() => {
  ChatAPI.subscribe();
});
```

---
layout: center
---

# useContext

```javascript
const themes = {
  light: { bkColor: "#FFF", color: "#000" },
  dark: { bkColor: "#000", color: "#FFF" },
};

const ThemeContext = createContext(themes.light);
```

---
layout: center
---

# useReducer

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---
layout: center
---

# useImperativeHandle

```javascript
useImperativeHandle(ref, () => {
  return {
    focus: () => {
      inputRef.current.focus();
    },
  };
});
```
---
layout: center
---

# useDeferredValue

```javascript
const deferredValue = useDeferredValue(value);
```

---
layout: center
---

# useTransition

```javascript
const [isPending, startTransition] = useTransition();
```

---
layout: center
---

# useDebugValue

```javascript
useDebugValue(value);
```

---
src: ./pages/logic-reuse.md
---
