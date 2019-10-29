import { createStore } from 'redux';
import formData from './reducers/formData';
export const store = createStore(formData)