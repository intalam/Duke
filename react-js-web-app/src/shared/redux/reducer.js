import doctorsArray from '../../shared/doctors';
import {SET_DOCTORS} from './actions';
const defaultState = {doctors: doctorsArray};


export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case SET_DOCTORS:
      let newState = {...state};
      newState.doctors = action.doctors;
      return newState;
    default:
      return {...state};
  }
}