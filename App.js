import { Component } from "./src/core";
import { H1 } from "./src/components/atoms/typography/Heddings/H1";

export class App extends Component {

  render() {
    return (
      `<h1>My app</h1>`
    )
  }
}

customElements.define("my-app", App);