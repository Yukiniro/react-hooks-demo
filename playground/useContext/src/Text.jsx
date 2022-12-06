import { useContext } from "react";
import { ThemeContext } from "./ThemoContext";

function Text() {
  const { bkColor, color } = useContext(ThemeContext);
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
      hello world
    </div>
  );
}

export default Text;
