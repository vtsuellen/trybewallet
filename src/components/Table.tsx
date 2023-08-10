import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from '../types/types';
import { deleteExpenses } from '../redux/actions';

function Table() {
  const dispatch: Dispatch = useDispatch();

  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  const deleteExpense = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    dispatch(deleteExpenses(id));
  };

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
              <button
                type="button"
                data-testid="edit-btn"
              >
                <img src=".././imgs/editar.svg" alt="editar" />
              </button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ (e) => deleteExpense(e, expense.id) }
              >
                <img src=".././imgs/deletar.svg" alt="excluir" />
              </button>
            </td>
          </tr>
        </tbody>))}

    </table>
  );
}

export default Table;
