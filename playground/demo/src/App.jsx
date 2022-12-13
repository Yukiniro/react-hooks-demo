import { Component } from "react";
import "./App.css";
import Section from "../../../common/Section";
import Row from "../../../common/Row";

class App extends Component {
  render() {
    return (
      <Section>
        <Row title="name">
          <input />
        </Row>
      </Section>
    );
  }
}

export default App;
