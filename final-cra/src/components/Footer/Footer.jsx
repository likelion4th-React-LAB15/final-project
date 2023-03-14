import styled from "styled-components";
import theme from "style/theme";
import FooterAddress from "components/Footer/FooterAddress";
import FooterGnb from 'components/Footer/FooterGnb';
import Wave from "components/Wave/Wave";


function Footer() {

  return (
    <>
      <Wave />
      <FooterContainer>
        <FooterInner>
          <FooterGnb />
          <FooterAddress />
        </FooterInner>
      </FooterContainer >
    </>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${theme.blue};
  position: relative;
  padding:6.25rem 0 3.125rem 0;
  overflow: hidden;
`

const FooterInner = styled.div`
  max-width: 81.25rem;
  margin:0 auto;
`

FooterContainer.displayName = 'FooterContainer';
FooterInner.displayName = 'FooterInner';

export default Footer