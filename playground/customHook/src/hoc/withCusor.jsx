import { Component } from "react";

function withCorsur(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return class extends Component {
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
      return <WrappedComponent x={x} y={y} />;
    }
  };
}

export default withCorsur;
