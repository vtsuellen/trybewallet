import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../types/types';

function Header() {
  const [istotal, setIsTotal] = useState(0);
  const email = useSelector((state: RootState) => state.user.email);
  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  function teste() {
    const sum = expenses.reduce((total, expense) => {
      const { value, currency, exchangeRates } = expense;
      const newCurrency = exchangeRates[currency];
      const valueCurrency = newCurrency.ask;
      const multiply = Number(value) * Number(valueCurrency);

      total += Number(multiply.toFixed(2));
      return total;
    }, 0);
    setIsTotal(sum);
  }

  useEffect(() => {
    teste();
  }, [expenses]);

  return (
    <div>
      <h1>
        Trybe
        <span>Wallet</span>
      </h1>
      <div>
        <p>
          Total de Despesas:
        </p>
        <p data-testid="total-field">{ istotal.toFixed(2) }</p>
        <span data-testid="header-currency-field">BRL</span>
      </div>
      <p data-testid="email-field">{ email }</p>
    </div>
  );
}

export default Header;
