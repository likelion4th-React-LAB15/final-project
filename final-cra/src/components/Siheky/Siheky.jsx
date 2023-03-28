import theme from 'style/theme';
import styled from 'styled-components/macro';
import SihekyInner from 'components/Siheky/SihekyInner';
import Wave from 'components/Wave/Wave';
import SihkeyBgBottom from 'assets/images/fix-siheky-bottom.svg';

function Siheky() {
  return (
    <>
      <Wave waveNavy />
      <SihekyContainer bg={SihkeyBgBottom}>
        <SihekyInner />
      </SihekyContainer>
    </>
  );
}

const SihekyContainer = styled.section`
  width: 100%;
  min-height: 35rem;
  background-color: ${theme.blue};
  background-image: url(${(props) => props.bg});
  background-repeat: repeat no-repeat;
  background-position: center bottom;
  background-blend-mode: darken;
  position: relative;
  padding: 6.25rem 0 3.125rem 0;
  overflow: hidden;
`;

export default Siheky;
