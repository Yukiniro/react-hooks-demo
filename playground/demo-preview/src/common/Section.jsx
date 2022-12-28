import "./Section.css";
import classNames from "classnames";

function Section(props) {
  // eslint-disable-next-line react/prop-types
  const { children, theme } = props;
  const className = classNames("section", theme);
  return <div className={className}>{children}</div>;
}

export default Section;
