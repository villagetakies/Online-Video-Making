import React from 'react'
import './App.css'
//import { Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import Artboard from './artboard';

function App(){
  return(
    <Provider store={store}>
      <div className="app">
        <Artboard />
      </div>
    </Provider>
  );
}

export default App;