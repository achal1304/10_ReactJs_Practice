import React, { Component } from 'react'
import './Checkbox.css'

export default class Checkbox extends Component {
    arrayToDisplay = ['India','England','New zealand','United states of America'];
    constructor(props){
        super(props);
        
        this.state = {
            checkedBox : []
        }
        this.addCheckboxToResult = this.addCheckboxToResult.bind(this);
    }

    addCheckboxToResult = (e) => {
        var checklist = []
        if(e.target.checked){
            checklist = [...this.state.checkedBox, e.target.value]
        }else{
            checklist = this.state.checkedBox.filter(x => x != e.target.value)
        }
        this.setState({
            checkedBox : checklist
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='checkbox_wrapper'>
                {this.arrayToDisplay.map((item,idx) => {
                    return (
                        <label key={idx}>
                            <input onChange={this.addCheckboxToResult} value={item} type='checkbox'/>
                            {item}
                        </label>
                    )
                })}
                {this.state.checkedBox.map((item,idx) => {
                    return (
                        <p>{item}</p>
                    )
                })}
            </div>
        )
    }
}
