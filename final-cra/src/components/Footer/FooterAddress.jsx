import styled from "styled-components";


function FooterAddress() {

  return (
    <>
      <StyledFooterAddress>
        <div className="addressInner addressTop">
          <h2 className="footerLogo"><img src="" alt="DIF 로고" /></h2>
          <div>
            <a href="#">개인정보 처리방침</a>
            <span className="line" aria-hidden="true"></span>
            <a href="#">이메일무단수집거부</a>
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
  padding-top: 50px;
  color:#fff;
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
    font-size:18px;
    line-height: 30px;
    color: inherit;
    text-decoration: none;
  }
  .addressTop .line{
    display: inline-block;
    width:1px;
    height:14px;
    margin:0 10px;
    background-color: #fff;
  }
  .footerLogo{
    order: 1;
  }

  .addressMiddle{
    margin:20px 0 30px 0;
  }
  .addressMiddle address{
    font-size: 16px;
  }
  .addressMiddle strong{
    font-weight:700;
  }
  .addressMiddle .footerEmail{
    font-size: 14px;
    color: rgba(255,255,255,0.5);
  }

  .addressBottom address{
    font-size: 14px;
    color: rgba(255,255,255,0.5);
  }
`


export default FooterAddress