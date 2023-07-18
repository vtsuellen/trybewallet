import { useSelector } from 'react-redux';
import { RootState } from '../types/types';

function Header() {
  const email = useSelector((state: RootState) => state.user.email);
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
        <p data-testid="total-field">0</p>
        <span data-testid="header-currency-field">BRL</span>
      </div>
      <p data-testid="email-field">{email}</p>
    </div>
  );
}

export default Header;
