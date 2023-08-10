// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { Wallet } from '../../types/types';

const initialState: Wallet = {
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
    case 'DELETE_EXPENSES': {
      return {
        ...state,
        expenses: [...state
          .expenses.filter((expense) => expense.id !== action.payload)],
      };
    }
    default:
      return state;
  }
};

export default walletReducer;
