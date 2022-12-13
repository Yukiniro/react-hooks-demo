import "./Row.css";

function Row(props) {
  // eslint-disable-next-line react/prop-types
  const { title, children } = props;
  return (
    <div className="row">
      <p className="label">{title}</p>
      {children}
    </div>
  );
}

export default Row;
