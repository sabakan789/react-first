import React, { Component } from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  handlePulasButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMainasButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePulasButton}>+1</button>
        <button onClick={this.handleMainasButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
