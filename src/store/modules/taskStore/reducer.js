import {
  CREATE_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  ASSIGN_USER_TO_TASK,
} from './actionTypes';

const store = {
  tasks: [
    {
      id: '6516',
      userId: null,
      title: 'Pabanint Kayn',
      done: true,
    },
    {
      id: '1116',
      userId: '0',
      title: 'Pasikelt lvl 3',
      done: false,
    },
    {
      id: '6hj6',
      userId: '2',
      title: 'Perlaužt veidą',
      done: true,
    }
  ]
}

export default function (state = store, action) {
  switch (action.type) {
    case CREATE_TASK:
      return ({
        ...state,
        tasks: [...state.tasks, action.payload]
      });

    case DELETE_TASK:
      return ({
        tasks: state.tasks.filter(({id}) => id !== action.payload.id)
      });

    case TOGGLE_TASK:
      return ({
        ...state,
        tasks: state.tasks.map(task => ({
          ...task,
          done: task.id === action.payload.id ? !task.done : task.done
        }))
      });

    case ASSIGN_USER_TO_TASK:
      return({
        ...state,
        tasks: state.tasks.map(task => ({
          ...task,
          userId: task.id === action.payload.id? action.payload.userId : task.userId
        }))
      })

    default:
      return state;
  }

}