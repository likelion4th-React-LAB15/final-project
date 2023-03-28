import styled from 'styled-components';
import OptionSelect from 'components/Reservation/OptionSelect.js';

const GuestSelect = () => {
  return (
    <Container>
      <OptionSelect></OptionSelect>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.125rem;
  margin-top: 2.563rem;
`;

export default GuestSelect;
