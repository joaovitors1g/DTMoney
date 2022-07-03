import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='title'>Desenvolvimento API</td>
            <td className='deposit'>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>04/06/2022</td>
          </tr>
          <tr>
            <td className='title'>Boleto</td>
            <td className='withdraw'>- R$ 600</td>
            <td>Contas</td>
            <td>20/06/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
