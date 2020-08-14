import {
  CREATE_USER,
  DELETE_USER,
} from './actionTypes';

const store = {
  users: [
    {
      id: '0',
      name: 'Riven'
    },
    {
      id: '2',
      name: 'Renekton'
    }
  ]
}

export default function (state = store, action) {
  switch (action.type) {
    case CREATE_USER:
      return ({
        ...state,
        users: [...state.users, action.payload]
      });

    case DELETE_USER:
      return ({
        ...state,
        users: state.users.filter(({id}) => id !== action.payload.id)
      });

    default:
      return state;
  }

}