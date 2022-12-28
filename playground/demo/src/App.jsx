import { Component } from "react";
import "./App.css";
import Section from "../../../common/Section";
import Row from "../../../common/Row";

class App extends Component {
  render() {
    return (
      <Section>
        <h1 className="title">Hello World</h1>
        <Row title="Name">
          <input />
        </Row>
      </Section>
    );
  }
}

export default App;
