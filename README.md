# Features

- [x] useState
- [ ] useEffect
- [ ] useLayoutEffect
- [ ] useMemo
- [ ] useCallback
- [ ] useRef
- [ ] useContext
- [ ] useReducer
- [ ] useImperativeHandle
- [ ] useDeferredValue
- [ ] useTransition
- [ ] useId
- [ ] useDebugValue
- [ ] useSyncExternalStore
- [ ] useInsertionEffect

# useState

`useState` 用于维护组件的的基本状态，其返回一个数组。

```javascript
const [state, setState] = useStat(0);
```

通过解构语法我们将其分为数据 `state` 和数据的更新 `setState`。`state` 和 `setState` 只是普通的 JavaScript 变量，所以也可以命名为其他名字。

在 `class` 组件中我们通过 `setState` 来维护内部状态，在 hook 中返回的 `setState` 的作用和其基本一致，不过不会对 `state` 进行自动合并，所以在函数组件中如果 `state` 是对象，那么调用 `state` 时也需要传入完整的对象。

# useEffect

`useEffect` 是 React 的纯函数式世界通往命令式世界的逃生通道。

在函数组件的主体内不应该进行诸如事件监听、DOM 操作、网络请求等副作用，应该将其移动至 `useEffect` 中。
