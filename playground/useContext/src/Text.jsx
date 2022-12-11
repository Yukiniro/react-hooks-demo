import { useContext } from "react";
import { ThemeContext } from "./ThemoContext";
import { TextContext } from "./TextContext";

function Text() {
  const { bkColor, color } = useContext(ThemeContext);
  const text = useContext(TextContext);
  return (
    <div
      style={{
        color,
        background: bkColor,
        margin: "12px",
        padding: "4px 6px",
        borderRadius: "6px",
      }}
    >
      {text}
    </div>
  );
}

export default Text;
