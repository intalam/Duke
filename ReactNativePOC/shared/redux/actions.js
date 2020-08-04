export const SET_DOCTORS = 'SET_DOCTORS';

const setDoctors = (doctors) => {
  return {
    type: SET_DOCTORS,
    doctors,
  }
}

export {
  setDoctors,
}