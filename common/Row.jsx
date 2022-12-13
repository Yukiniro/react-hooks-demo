import "./Row.css";

function Row(props) {
  // eslint-disable-next-line react/prop-types
  const { title, children } = props;
  return (
    <div className="row">
      <label className="label">
        {title}
        {children}
      </label>
    </div>
  );
}

export default Row;
