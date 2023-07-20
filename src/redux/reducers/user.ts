// Esse reducer será responsável por tratar as informações da pessoa usuária

import { AnyAction } from 'redux';

const initialState = {
  email: '',
};

const user = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_EMAIL': {
      return { ...state, email: action.payload };
    }
    default:
      return state;
  }
};

export default user;
