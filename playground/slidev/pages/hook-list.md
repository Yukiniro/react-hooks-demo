---
layout: two-cols
---

## 常用 `hook`

<v-click>

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

</v-click>

::right::

## 其他 `hook`

<v-click>

- useDebugValue
- useId
- useSyncExternalStore
- useInsertionEffect

</v-click>

---

# useState

```javascript
const [state, setState] = useState(0);
```

`useState` 可以传入一个初始值或者初始函数。

通过解构语法我们将其分为数据 `state` 和数据的更新 `setState`。`state` 和 `setState` 只是普通的 JavaScript 变量，所以也可以命名为其他名字。

---

# useEffect

```javascript
useEffect(() => {
  ChatAPI.subscribe();
  return () => {
    ChatAPI.unsubscribe();
  };
}, [deps]);
```

`useEffect` 接收一个包含命令式、且可能有副作用代码的函数，该函数返回一个副作用清除函数。

`[deps]` 是该副作用的依赖，根据其依赖是否变化来进行判断是否进行该副作用。

如果 `[deps]` 是空数组的话则只会进行一次副作用处理。

<v-click>

React 18 之前 `useEffect` 中的函数会在浏览器完成布局与绘制之后在一个延迟事件中被调用，但是在之后的版本中如果它是离散的用户输入（如点击）的结果时，或者它是由 `flushSync` 包装的更新结果时，传递给 `useEffect` 的函数将在屏幕布局和绘制之前同步执行。（_如果并发模式下单个 work 的执行比较快也会导致同步执行_）

</v-click>

---

# useLayoutEffect

```javascript
useLayoutEffect(() => {
  ChatAPI.subscribe();
});
```

`useLayoutEffect` 的函数签名与 `useEffect` 相同，不同的是它一定会在所有的 DOM 变更之后，浏览器执行绘制之前同步进行调用副作用函数，并且其内部的更新也会被同步刷新。

---

# useMemo

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

`useMemo` 返回一个 _记忆化_ 的值，也就是说会缓存高额开销的函数计算，同时提供了依赖项列表来告诉 React 设么时候可以重新计算并返回新的值。

但是需要注意的是，React 不保证会一直保持缓存的值，React 会选择在某些时刻 “遗忘” 已经记忆的值，比如离屏组件。

---

# useCallback

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

`useCallback` 的定义和表现跟 `useMemo` 几乎一致，只不过是 _记忆化的值_ 变成了 _记忆化的函数_。可以将 `useCallback(fn, deps)` 看作是 `useMemo(() => fn, deps)`。

---

# useContext

```javascript
const themes = {
  light: { bkColor: "#FFF", color: "#000" },
  dark: { bkColor: "#000", color: "#FFF" },
};

const ThemeContext = createContext(themes.light);
```

`useContext` 接收一个 `context` 对象作为参数并返回该 `context` 的当前值。当前的 `context` 值由上层组件中距离当前组件最近的 `ThemeContext.Provider` 的 `value` 决定。

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

`useReducer` 可以看作是 `useState` 在复杂计算下的替代方案。

它接受一个 `(state, action) => newState` 的 `reducer` 函数并返回一个 `state` 及用以发送 `action` 的 `dispatch` 函数。

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

`useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值。

---

# useDeferredValue

```javascript
const deferredValue = useDeferredValue(value);
```

`useDeferredValue` 接受一个值并返回该值的新的值，`deferredValue` 的更新会在更紧急的更新之后，如果当前的更新是一个紧急的更新，比如用户输入，那么 `deferredValue` 便是之前的，在紧急更新之后会立即进行更新。

---

# useTransition

```javascript
const [isPending, startTransition] = useTransition();
```

`useTransition` 返回一个过渡状态及一个过渡任务的启动函数。

---
src: ./pages/logic-reuse.md
---
