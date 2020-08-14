import uniqid from 'uniqid';
import {
  ADD_TEXT
} from './actionTypes';

export const addtext = (email, text) => ({
  type: ADD_TEXT,
  payload: {
    email,
    text
  }
})


export default {
    addtext
}