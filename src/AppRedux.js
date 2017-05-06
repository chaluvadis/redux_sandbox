import React, { Component } from 'react';

const counter = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': return { value: state.value + 1 };
        case 'DECREMENT': return { value: state.value - 1 };
        default: return state;
    }
}
export default class AppRedux extends Component {
    state = counter(undefined, {});

    dispatch(action) {
        this.setState(prevState => counter(prevState, action));
    }

    increment = () => {
        this.dispatch({type: 'INCREMENT'});
    }

    decrement = () => {
        this.dispatch({type: 'DECREMENT'});
    }
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