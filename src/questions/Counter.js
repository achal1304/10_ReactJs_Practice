import React, { Component } from 'react'

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment(e) {
        var newcount = this.state.count += 1
        this.setState({
            count: newcount
        })
    }
    decrement(e) {
        if (this.state.count > 0){
            var newcount = this.state.count -= 1
            this.setState({
                count: newcount
            })
        }
        
    }

    render() {
        return (
            <div>
                <div>Counter</div>

                <button onClick={this.decrement}>-</button>
                {this.state.count}
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
