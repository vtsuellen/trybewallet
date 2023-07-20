import Api from '../../Api/API';
import { Dispatch, ExpenseInfoExchangeRates, ExpensesType } from '../../types/types';

export const saveUser = (email: string) => ({
  type: 'SET_EMAIL',
  payload: email,
});

export const storeCurrencies = (currencies: any) => ({
  type: 'STORE_CURRENCIES',
  payload: currencies,
});

export const pullCurrencies = () => {
  return async (dispatch: Dispatch) => {
    const data = await Api();
    dispatch(storeCurrencies(data));
  };
};

export const registerExpenses = (info: ExpenseInfoExchangeRates) => {
  return { type: 'SET_EXPENSE', payload: info };
};

export const Expenses = (info: ExpensesType) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(registerExpenses({ ...info, exchangeRates: data }));
  };
};
