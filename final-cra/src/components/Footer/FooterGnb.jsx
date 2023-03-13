import styled from "styled-components";


function FooterGnb() {

  return (
    <>
      <StyledFooterGnb>
        <li>
          <a href="#" className="menuLink">RESERVATION</a>
          <ul>
            <li><a href="#">예약하기</a></li>
            <li><a href="#">자주하는 질문</a></li>
            <li><a href="#">일반문의</a></li>
            <li><a href="#">확장예약문의</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="menuLink">DIF</a>
          <ul>
            <li><a href="#">DIF소개</a></li>
            <li><a href="#">DIF카드</a></li>
            <li><a href="#">클럽메이트</a></li>
            <li><a href="#">Why choose DIF?</a></li>
            <li><a href="#">DIF Cares</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="menuLink">GUAM</a>
          <ul>
            <li><a href="#">DIF괌</a></li>
            <li><a href="#">객실</a></li>
            <li><a href="#">레스토랑&바</a></li>
            <li><a href="#">워터파크&액티비티</a></li>
            <li><a href="#">슈퍼 아메리칸 서비스</a></li>
            <li><a href="#">키즈프로그램</a></li>
            <li><a href="#">부대시설</a></li>
            <li><a href="#">제휴골프장</a></li>
            <li><a href="#">일반서비스</a></li>
            <li><a href="#">공식 홈페이지 예약 특전</a></li>
            <li><a href="#">예약하기</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="menuLink">SAIPAN</a>
          <ul>
            <li><a href="#">DIF사이판</a></li>
            <li><a href="#">객실</a></li>
            <li><a href="#">레스토랑&바</a></li>
            <li><a href="#">워터파크&액티비티</a></li>
            <li><a href="#">키즈프로그램</a></li>
            <li><a href="#">부대시설</a></li>
            <li><a href="#">일반서비스</a></li>
            <li><a href="#">예약하기</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="menuLink">NOTICE</a>
          <ul>
            <li><a href="#">DIF 괌</a></li>
            <li><a href="#">DIF 사이판</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="menuLink">COMMUNITY</a>
          <ul>
            <li><a href="#">DIF영상</a></li>
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
  padding-bottom:50px;
  border-bottom: 1px solid #4f547d;
  a{
    text-decoration: none;
    color: #fff;
  }
  a.menuLink{
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 1px;
    font-weight: 600;
  }
  ul{
    margin-top:30px;
  }
  ul li{
    height: 25px;
  }
  ul a{
    color:rgba(255,255,255,0.5);
    font-size: 18px;
  }
  ul a:hover{
    color:rgba(255,255,255,1);
  }
`


export default FooterGnb