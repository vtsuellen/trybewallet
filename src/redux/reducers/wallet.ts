// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';

const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,

};

const walletReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_EXPENSE': {
      return { ...state, expenses: [...state.expenses, action.payload] };
    }
    case 'STORE_CURRENCIES': {
      return { ...state, currencies: action.payload };
    }
    default:
      return state;
  }
};

export default walletReducer;
