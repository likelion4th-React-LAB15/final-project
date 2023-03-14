import styled from "styled-components";
import theme from "style/theme";
import Wave from "components/Wave/Wave";
import SihkeyBgBottom from 'assets/images/fix-siheky-bottom.svg';
import SihekyInner from './SihekyInner';

function Siheky() {

  return (
    <>
      <Wave waveNavy />
      <SihekyContainer bg={SihkeyBgBottom}>
        <SihekyInner />
      </SihekyContainer >
    </>
  )
}

const SihekyContainer = styled.section`
  width: 100%;
  min-height: 35rem;
  background-color: ${theme.blue};
  background-image: url(${props => props.bg});
  background-repeat: repeat no-repeat;
  background-position: center bottom;
  background-blend-mode: darken;
  position: relative;
  padding:6.25rem 0 3.125rem 0;
  overflow: hidden;
`

SihekyContainer.displayName = 'SihekyContainer';

export default Siheky