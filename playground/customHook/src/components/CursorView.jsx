function CursorView(props) {
  const { x, y } = props;
  return (
    <div>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  );
}

export default CursorView;
