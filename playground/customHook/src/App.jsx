import "./App.css";
import CursorView from "./components/CursorView";
import withCorsur from "./hoc/withCusor";
import useCursor from "./hooks/useCursor";
import RenderCursor from "./rp/renderCursor";

// function App() {
//   const { x, y } = useCursor();
//   return (
//     <div className="App">
//       <h1>Custom Hook</h1>
//       <CursorView x={x} y={y} />
//     </div>
//   );
// }

// const EnhancedComponent = withCorsur(CursorView);
// function App() {
//   return (
//     <div className="App">
//       <h1>HOC</h1>
//       <EnhancedComponent />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <h1>Render Props</h1>
      <RenderCursor
        render={({ x, y }) => {
          return <CursorView x={x} y={y} />;
        }}
      />
    </div>
  );
}

export default App;
