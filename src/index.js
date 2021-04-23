import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let cartstate = [
  {id: 0, name: '멋진신발', quantity: 2}, 
  {id: 1, name: '꾸진신발', quantity: 3}, 
  {id: 2, name: '물컹신발', quantity: 2}
];

function reducer(state = cartstate, action){
  if(action.type == 'add'){
    let newArray = [...state];
    newArray[action.id].quantity++;
    return newArray;
  }else if(action.type == 'minus'){
    let newArr = [...state];
    newArr[action.id].quantity--;

    if(newArr[action.id].quantity < 0)
      newArr[action.id].quantity = 0;

    return newArr;
  }else{
    return state
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App /> 
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
