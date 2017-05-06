import React, { Component } from 'react';

export default class App extends Component {
  state = { value: 0 };

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        <p>
          <label className="label"> {this.state.value}</label>
        </p>
        <p>
          <button className="button" onClick={this.increment}>+</button>
          <button className="button" onClick={this.decrement}>-</button>
        </p>
      </div>
    )
  }
}