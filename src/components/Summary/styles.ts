import styled from 'styled-components';

type ValueCardProps = {
  isHighlighted?: boolean;
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const ValueCard = styled.div<ValueCardProps>`
  background: ${props =>
    props.isHighlighted ? 'var(--green)' : 'var(--shape)'};
  padding: 1.5rem 2rem;
  border-radius: 4px;
  color: ${props => (props.isHighlighted ? '#fff' : 'var(--text-title)')};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;

    span {
      font-weight: 400;
    }
  }
`;
