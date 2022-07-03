import { Container, ValueCard } from './styles';

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <ValueCard>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt='Icone de seta apontando para cima' />
        </header>
        <strong>
          <span>R$</span> 1000,00
        </strong>
      </ValueCard>
      <ValueCard>
        <header>
          <p>Saidas</p>
          <img src={outcomeIcon} alt='Icone de seta apontando para baixo' />
        </header>
        <strong>
          <span>R$</span> 500,00
        </strong>
      </ValueCard>
      <ValueCard isHighlighted>
        <header>
          <p>Total</p>
          <img src={totalIcon} alt='Cifrão' />
        </header>
        <strong>
          <span>R$</span> 500,00
        </strong>
      </ValueCard>
    </Container>
  );
}
