import { Component } from "react";
import "./App.css";
import Section from "./common/Section";
import Row from "./common/Row";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jack",
      surname: "Tom",
      width: 0,
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSurnameChange = e => {
    this.setState({ surname: e.target.value });
  };

  updateWidth = () => {
    const width = document.body.getBoundingClientRect().width;
    this.setState({ width });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    const { name, surname, width } = this.state;
    return (
      <Section>
        <h1 className="title">Hello World</h1>
        <h2 className="section-title">Window Width: {width}px</h2>
        <Row title="Name">
          <input value={name} onChange={this.handleNameChange} />
        </Row>
        <Row title="Surname">
          <input value={surname} onChange={this.handleSurnameChange} />
        </Row>
      </Section>
    );
  }
}

export default App;
