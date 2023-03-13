import styled from "styled-components";
import FooterAddress from "components/Footer/FooterAddress";
import FooterGnb from 'components/Footer/FooterGnb';
import FooterWave from "./FooterWave";


function Footer() {

  return (
    <>
      <FooterWave />
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
  background-color: #212C93;
  position: relative;
  padding:100px 0 50px 0;
  overflow: hidden;
`

const FooterInner = styled.div`
  max-width: 1300px;
  margin:0 auto;
`



export default Footer