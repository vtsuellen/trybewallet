import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

type User = {
  email: string
};

export type RootState = {
  user: User
  wallet: Wallet
};

export type Wallet = {
  currencies: string[], // array de string

  expenses: any[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates

  editor: boolean, // valor booleano que indica se uma despesa está sendo editada

  idToEdit: number, // valor numérico que armazena o id da despesa que está sendo editada

};

export type Dispatch = ThunkDispatch<RootState, any, AnyAction>;

export type ExpensesType = {
  id: number;
  value: string;
  description: string;
  method: string;
  tag: string;
  currency: string;
};

export type ExpenseInfoExchangeRates = ExpensesType & { exchangeRates: object; };
