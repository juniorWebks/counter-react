import React from 'react'

import {connect} from 'react-redux'

import { add, sub } from './store'

const mapDispatchToProps = (dispatch) =>({
    isaAdd:(number) => dispatch(add(number)),
    isaSub:(number) => dispatch(sub(number))
})

class CounterButtons extends React.Component {

    state ={
        inputValue:0
    }

    handleChange = (event) => {
this.setState({
    inputValue:parseInt(event.target.value)
})
    }


    render() {
        return (
            <div>
                <input type="number" onChange={this.handleChange}/>
                <button onClick={()=>this.props.isaAdd(this.state.inputValue)}>Add</button>
                <button onClick={()=>this.props.isaSub(this.state.inputValue)}>Sub</button>
            </div>
        )
    }

}
//dekorujemy
export default connect(null, mapDispatchToProps)(CounterButtons)