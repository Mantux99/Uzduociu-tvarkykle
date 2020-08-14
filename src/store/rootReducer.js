import taskReducer from "./modules/taskStore/reducer";
import userReducer from "./modules/userStore/reducer";

export default combineReducersFlat([taskReducer, userReducer]);

function combineReducersFlat(reducers) {
  const rootStates = [];
  
  return function (state, action) {
    let newState = {};
    if (state === undefined) {
      reducers.forEach(reducer => {
        const reducerInitState = reducer(state, action);
        rootStates.push(Object.keys(reducerInitState));
        newState = { ...newState, ...reducerInitState };
      });
    }
    else {
      reducers.forEach((reducer, i) => {
        const reducerState = rootStates[i].reduce((accState, prop) => {
          accState[prop] = state[prop];
          return accState;
        }, {});
        const reducerNewState = reducer(reducerState, action);
        newState = { ...newState, ...reducerNewState };
      })
    }

    return newState;
  }
}

// Try hards wanna be: https://stackoverflow.com/questions/43290107/combine-redux-reducers-without-adding-nesting