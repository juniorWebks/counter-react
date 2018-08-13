import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
  value: state.counter.counterValue  //odwolanie do reducera
})
class Counter extends React.Component {

  render() {
    return (
      <div>
        My awesome counter:{this.props.value}
      </div>

    )
  }
}

export default connect(mapStateToProps)(Counter);