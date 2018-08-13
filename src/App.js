import React, { Component } from 'react'
import Counter from './Counter/Counter'
import CounterButtons from './Counter/CounterButtons'
import {combineReducers, createStore} from 'redux'
import counterReducer from './Counter/store'
import {Provider} from 'react-redux'

const reducers = combineReducers({
counter:counterReducer
})
const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Counter />
        <CounterButtons />
      </div>
      </Provider>
    )
  }
 }
 export default App;