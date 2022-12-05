# Features

- [x] useState
- [x] useEffect
- [x] useLayoutEffect
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
const [state, setState] = useState(0);
```

`useState` 可以传入一个值作为初始值，也可以传入一个函数，其返回值将作为初始值。

通过解构语法我们将其分为数据 `state` 和数据的更新 `setState`。`state` 和 `setState` 只是普通的 JavaScript 变量，所以也可以命名为其他名字。

更新 `state` 需要調用更新函数 `setState` (或者其他名字)，可以直接传入一个值。

```javascript
setState(state + 1); // state 等于 1
```

也可以传入一个函数，这个函数的参数是当前的 `state`

```javascript
setState(state => state + 1); // state 等于 1
```

如果前后的 `state` 完全相等则会跳过渲染

```javascript
setState(state => state); // 不会造成渲染
```

在 `class` 组件中我们通过 `setState` 来维护内部状态，在 hook 中返回的 `setState` 的作用和其基本一致，不过不会对 `state` 进行自动合并，所以在函数组件中如果 `state` 是对象，那么调用 `state` 时也需要传入完整的对象。

```javascript
const [state, setState] = useState({ name: "Yuki", age: 18 });

function Person({ initialCount }) {
  const [info, setInfo] = useState({ name: "Yuki", age: 18 });
  const handleNameChange = e => {
    setInfo({ name: e.target.value });
  };
  const handleAgeChange = e => {
    setInfo({ age: e.target.value });
  };
  return (
    <>
      <input onChange={handleNameChange} value={info.name} />
      <input onChange={handleAgeChange} value={info.age} />
    </>
  );
}
```

上述代码中任一输入框内的内容变更都会导致其他的输入框的内容被设置为 `undefined`。可以修改为下列代码：

```javascript
const [info, setInfo] = useState({ name: "Yuki", age: 18 });
const handleNameChange = e => {
  setInfo({ ...info, name: e.target.value });
};
```

# useEffect

函数组件在理解上比较接近于纯函数，每个组件可以看作是一次渲染的快照，所以在函数主体内不适合进行副作用的处理，比如 DOM 操作、网络请求、设置定时器等。
应当将这些操作移至 `useEffect` 中。

`useEffect` 是 React 的纯函数式世界通往命令式世界的逃生通道。

`useEffect` 接收一个包含命令式、且可能有副作用代码的函数。

```javascript
useEffect(() => {
  ChatAPI.subscribe();
});
```

一般来说，在进行事件订阅后需要在某种情况下进行订阅的取消，所以传递给 `useEffect` 的函数需返回一个清除函数。

```javascript
useEffect(() => {
  ChatAPI.subscribe();
  return () => {
    ChatAPI.unsubscribe();
  };
});
```

`useEffect` 默认情况下会在每轮渲染结束后执行，也可以通过传递第二个参数进行控制。

```javascript
useEffect(() => {
  ChatAPI.subscribe();
  return () => {
    ChatAPI.unsubscribe();
  };
}, []);

useEffect(() => {
  ChatAPI.subscribe(id);
  return () => {
    ChatAPI.unsubscribe(id);
  };
}, [id]);
```

`useEffect` 会根据第二个参数的内容控制其副作用是否执行，如果传递是空数组，则只会在组件挂载时执行副作用，组件卸载时执行清除函数，如果数组中有值，则会在该值改变时执行上一个清除函数并执行新的副作用。

React 18 之前 `useEffect` 中的函数会在浏览器完成布局与绘制之后在一个延迟事件中被调用，但是在之后的版本中如果它是离散的用户输入（如点击）的结果时，或者它是由 `flushSync` 包装的更新结果时，传递给 `useEffect` 的函数将在屏幕布局和绘制之前同步执行。（_如果并发模式下单个 work 的执行比较快也会导致同步执行_）

# useLayoutEffect

`useLayoutEffect` 的函数签名与 `useEffect` 相同，不同的是它一定会在所有的 DOM 变更之后，浏览器执行绘制之前同步进行调用副作用函数，并且其内部的更新也会被同步刷新。

# useMemo

# useCllabck
