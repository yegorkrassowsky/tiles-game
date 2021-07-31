import React from 'react'
import './App.scss'
import {Provider} from 'react-redux'
import {store} from './store'
import Heading from './components/Heading'
import Board from './components/Board'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Provider store={store}>
          <Heading />
          <Board />
        </Provider>
      </div>
    </div>
  );
}

export default App;
