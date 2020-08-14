import {
    ADD_TEXT
  } from './actionTypes';
  
  const store = {
    texts: [
      {
        email: 'mantukas@gmail.com',
        text: 'testuojammmmm'
      }
    ]
  }
  
  export default function (state = store, action) {
    switch (action.type) {
      case ADD_TEXT:
        return ({
          ...state,
          texts: [...state.texts, action.payload]
        });
  
      default:
        return state;
    }
  
  }