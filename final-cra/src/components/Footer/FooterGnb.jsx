import styled from "styled-components";
import theme from "style/theme";

function FooterGnb() {

  return (
    <>
      <StyledFooterGnb>
        <li>
          <a href="{()=>false}" className="menuLink">RESERVATION</a>
          <ul>
            <li><a href="{()=>false}">예약하기</a></li>
            <li><a href="{()=>false}">자주하는 질문</a></li>
            <li><a href="{()=>false}">일반문의</a></li>
            <li><a href="{()=>false}">확장예약문의</a></li>
          </ul>
        </li>
        <li>
          <a href="{()=>false}" className="menuLink">DIF</a>
          <ul>
            <li><a href="{()=>false}">DIF소개</a></li>
            <li><a href="{()=>false}">DIF카드</a></li>
            <li><a href="{()=>false}">클럽메이트</a></li>
            <li><a href="{()=>false}">Why choose DIF?</a></li>
            <li><a href="{()=>false}">DIF Cares</a></li>
          </ul>
        </li>
        <li>
          <a href="{()=>false}" className="menuLink">GUAM</a>
          <ul>
            <li><a href="{()=>false}">DIF괌</a></li>
            <li><a href="{()=>false}">객실</a></li>
            <li><a href="{()=>false}">레스토랑&바</a></li>
            <li><a href="{()=>false}">워터파크&액티비티</a></li>
            <li><a href="{()=>false}">슈퍼 아메리칸 서비스</a></li>
            <li><a href="{()=>false}">키즈프로그램</a></li>
            <li><a href="{()=>false}">부대시설</a></li>
            <li><a href="{()=>false}">제휴골프장</a></li>
            <li><a href="{()=>false}">일반서비스</a></li>
            <li><a href="{()=>false}">공식 홈페이지 예약 특전</a></li>
            <li><a href="{()=>false}">예약하기</a></li>
          </ul>
        </li>
        <li>
          <a href="{()=>false}" className="menuLink">SAIPAN</a>
          <ul>
            <li><a href="{()=>false}">DIF사이판</a></li>
            <li><a href="{()=>false}">객실</a></li>
            <li><a href="{()=>false}">레스토랑&바</a></li>
            <li><a href="{()=>false}">워터파크&액티비티</a></li>
            <li><a href="{()=>false}">키즈프로그램</a></li>
            <li><a href="{()=>false}">부대시설</a></li>
            <li><a href="{()=>false}">일반서비스</a></li>
            <li><a href="{()=>false}">예약하기</a></li>
          </ul>
        </li>
        <li>
          <a href="{()=>false}" className="menuLink">NOTICE</a>
          <ul>
            <li><a href="{()=>false}">DIF 괌</a></li>
            <li><a href="{()=>false}">DIF 사이판</a></li>
          </ul>
        </li>
        <li>
          <a href="{()=>false}" className="menuLink">COMMUNITY</a>
          <ul>
            <li><a href="{()=>false}">DIF영상</a></li>
          </ul>
        </li>
      </StyledFooterGnb>
    </>
  )
}


const StyledFooterGnb = styled.ul`
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-bottom:3.125rem;
  border-bottom: 0.0625rem solid #4f547d;
  a{
    text-decoration: none;
    color: ${theme.white};
  }
  a.menuLink{
    font-size: ${theme.textMd};
    line-height: 1.875rem;
    letter-spacing: 0.0625rem;
    font-weight: 600;
  }
  ul{
    margin-top: 1.875rem;
  }
  ul li{
    height: 1.5625rem;
  }
  ul a{
    color:rgba(255,255,255,0.5);
    font-size: 1.125rem;
  }
  ul a:hover{
    color:rgba(255,255,255,1);
  }
`

StyledFooterGnb.displayName = 'StyledFooterGnb';

export default FooterGnb