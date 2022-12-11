import { useImperativeHandle, forwardRef, useRef } from "react";

function Child(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
    };
  });
  return <input ref={inputRef} />;
}

export default forwardRef(Child);
