import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

type HeaderProps = {
  openNewTransactionModal: () => void;
};

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt='DT Money' />
        <button type='button' onClick={openNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
