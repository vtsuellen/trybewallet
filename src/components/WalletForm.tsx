import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../types/types';
import { Expenses, pullCurrencies } from '../redux/actions';

// const initialState = { id: 0,
//   value: '',
//   description: '',
//   method: 'Dinheiro',
//   tag: 'Alimentação',
//   currency: 'USD' };

function WalletForm() {
  // const [formState, setFormState] = useState<ExpensesType>(initialState);
  const [isPayment, setIsPayment] = useState('Dinheiro');
  const [isCategories, setIsCategories] = useState('Alimentação');
  const [isCurrencies, setIsCurrencies] = useState('USD');
  const [isDescription, setIsDescription] = useState('');
  const [isValue, setIsValue] = useState('');

  const currencies = useSelector((state: RootState) => state.wallet.currencies);
  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(pullCurrencies());
  }, [dispatch]);

  const teste = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const dataUser = {
      id: expenses.length,
      value: isValue,
      description: isDescription,
      method: isPayment,
      tag: isCategories,
      currency: isCurrencies,
    };
    dispatch(Expenses(dataUser));

    setIsPayment('Dinheiro');
    setIsCategories('Alimentação');
    setIsCurrencies('USD');
    setIsDescription('');
    setIsValue('');
  };

  return (
    <form>
      <div>
        <label htmlFor="description">
          Descrição da despesa
          <input
            id="description"
            data-testid="description-input"
            value={ isDescription }
            onChange={ (event) => setIsDescription(event.target.value) }
          />

        </label>

        <label htmlFor="category">
          Categoria da despesa
          <select
            id="category"
            data-testid="tag-input"
            value={ isCategories }
            onChange={ (event) => setIsCategories(event.target.value) }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

      </div>
      <label htmlFor="value">
        Valor
        <input
          id="value"
          data-testid="value-input"
          type="number"
          value={ isValue }
          onChange={ (event) => setIsValue(event.target.value) }
        />
      </label>

      <label htmlFor="payment">
        Método de Pagamento
        <select
          id="payment"
          data-testid="method-input"
          value={ isPayment }
          onChange={ (event) => setIsPayment(event.target.value) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>

      <label htmlFor="currency-select">
        Moeda
        <select
          id="currency-select"
          data-testid="currency-input"
          value={ isCurrencies }
          onChange={ (event) => setIsCurrencies(event.target.value) }
        >
          {currencies?.map((currency, key) => <option key={ key }>{currency}</option>)}
        </select>
      </label>

      <button onClick={ teste }>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
