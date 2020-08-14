import uniqid from 'uniqid';
import {
  CREATE_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  ASSIGN_USER_TO_TASK,
} from './actionTypes';

export const createTask = (newTaskData) => ({
  type: CREATE_TASK,
  payload: {
    id: uniqid(),
    ...newTaskData
  }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {id}
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});

export const assignUserToTask = (id, userId) => ({
  type: ASSIGN_USER_TO_TASK,
  payload: { id, userId }
});

export default {
  createTask,
  deleteTask,
  toggleTask,
  assignUserToTask
};