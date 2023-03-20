import theme from "style/theme";
import styled from 'styled-components/macro';
import Wave from "components/wave/Wave";
import FooterGnb from 'components/footer/FooterGnb';
import FooterAddress from "components/footer/FooterAddress";


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

export default Footer