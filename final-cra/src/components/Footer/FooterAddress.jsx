import styled from "styled-components";
import theme from "style/theme";

function FooterAddress() {

  return (
    <>
      <StyledFooterAddress>
        <div className="addressInner addressTop">
          <h2 className="footerLogo"><img src={require('assets/icons/logo-off.png')} alt="Dobby Islands Free" /></h2>
          <div>
            <a href="{()=>false}">개인정보 처리방침</a>
            <span className="line" aria-hidden="true"></span>
            <a href="{()=>false}">이메일무단수집거부</a>
          </div>
        </div>
        <div className="addressInner addressMiddle">
          <address>
            <div>
              <strong>DIF Guam</strong> : 210 Pale San Vitores Road, Tumon Bay, Guam 96913 / Tel : +1 (671) 646-9171
            </div>
            <div>
              <strong>DIF Saipan</strong> : 779 Chalan Tun Thomas P. Sablan Road, Saipan, MP 96950 CNMI / Tel : +1 (670) 234-7976
            </div>
          </address>
          <div className="footerEmail">
            마케팅제휴문의 E-mail : marketing@phrkorea.com
          </div>
        </div>
        <div className="addressInner addressBottom">
          <address>
            Copyright &copy; Pacific Islands Club Co, Ltd. All right reserved.
          </address>
        </div>
      </StyledFooterAddress>
    </>
  )
}


const StyledFooterAddress = styled.div`
  padding-top: 3.125rem;
  color: ${theme.white};
  .addressInner{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .addressTop div{
    display: flex;
    align-items: center;
  }
  .addressTop a{
    font-size: 1.125rem;
    line-height: 1.875rem;
    color: inherit;
    text-decoration: none;
  }
  .addressTop .line{
    display: inline-block;
    width: 0.0625rem;
    height: 0.875rem;
    margin:0 0.625rem;
    background-color: #fff;
  }
  .footerLogo{
    order: 1;
  }

  .addressMiddle{
    margin: 1.25rem 0 1.875rem 0;
  }
  .addressMiddle address{
    font-size: ${theme.textBase};
  }
  .addressMiddle strong{
    font-weight:700;
  }
  .addressMiddle .footerEmail{
    font-size: 0.875rem;
    color: rgba(255,255,255,0.5);
  }

  .addressBottom address{
    font-size: 0.875rem;
    color: rgba(255,255,255,0.5);
  }
`


export default FooterAddress