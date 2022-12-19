import { Component } from "react";

class RenderCursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: { x: 0, y: 0 },
    };
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.updateCursor);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.updateCursor);
  }

  updateCursor = e => {
    this.setState({
      cursor: {
        x: e.x,
        y: e.y,
      },
    });
  };

  render() {
    const { x, y } = this.state.cursor;
    const { render } = this.props;
    return render({ x, y });
  }
}

export default RenderCursor;
