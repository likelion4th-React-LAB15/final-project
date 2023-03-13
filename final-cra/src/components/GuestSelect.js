import styled from 'styled-components';
import OptionSelect from 'components/OptionSelect.js'

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 34px;
  margin-top: 41px;
`;

const GuestSelect = () => {
  return (
    <Container>
      <OptionSelect></OptionSelect>
    </Container>
  );
};

export default GuestSelect;