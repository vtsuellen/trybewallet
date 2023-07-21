import { useSelector } from 'react-redux';
import { RootState } from '../types/types';

function Table() {
  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      {expenses.map((expense) => (
        <tbody key={ expense.id }>
          <tr>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(Number(expense.value)
              * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
            </td>
          </tr>
        </tbody>))}

    </table>
  );
}

export default Table;
