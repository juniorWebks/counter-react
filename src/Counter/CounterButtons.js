import React from 'react'

import {connect} from 'react-redux'

import { add, sub } from './store'

const mapDispatchToProps = (dispatch) =>({
    isaAdd:() => dispatch(add()),
    isaSub:() => dispatch(sub())
})

class CounterButtons extends React.Component {



    render() {
        return (
            <div>
                <button onClick={this.props.isaAdd}>Add</button>
                <button onClick={this.props.isaSub}>Sub</button>
            </div>
        )
    }

}
//dekorujemy
export default connect(null, mapDispatchToProps)(CounterButtons)