import uniqid from 'uniqid';
import {
  CREATE_USER,
  DELETE_USER,
} from './actionTypes';

export const createUser = (newUserData) => ({
  type: CREATE_USER,
  payload: {
    id: uniqid(),
    ...newUserData
  }
})

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: { id }
})

export default {
  createUser,
  deleteUser
}