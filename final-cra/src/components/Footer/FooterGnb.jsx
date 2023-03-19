import theme from "style/theme";
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

function FooterGnb() {

  const dataFooter = [
    {
      id: 1,
      mainTitle: { title: 'RESERVATION', link: '/' },
      subTitle: [
        { title: '예약하기', link: '/' },
        { title: '자주하는 질문', link: '/' },
        { title: '일반문의', link: '/' },
        { title: '확장예약문의', link: '/' },
      ]
    }, {
      id: 2,
      mainTitle: { title: 'DIF', link: '/about' },
      subTitle: [
        { title: 'DIF소개', link: '/' },
        { title: 'DIF카드', link: '/' },
        { title: '클럽메이트', link: '/' },
        { title: 'Why choose DIF?', link: '/' },
        { title: 'DIF Cares', link: '/' },
      ]
    }, {
      id: 3,
      mainTitle: { title: 'GUAM', link: '/' },
      subTitle: [
        { title: 'DIF괌', link: '/' },
        { title: '객실', link: '/' },
        { title: '레스토랑&바', link: '/' },
        { title: '워터파크&액티비티', link: '/' },
        { title: '슈퍼 아메리칸 서비스', link: '/' },
        { title: '키즈프로그램', link: '/' },
        { title: '부대시설', link: '/' },
        { title: '제휴 골프장', link: '/' },
        { title: '일반서비스', link: '/' },
        { title: '공식 홈페이지 예약 특전', link: '/' },
        { title: '예약하기', link: '/' },
      ]
    }, {
      id: 4,
      mainTitle: { title: 'SAIPAN', link: '/' },
      subTitle: [
        { title: 'DIF사이판', link: '/' },
        { title: '객실', link: '/' },
        { title: '레스토랑&바', link: '/' },
        { title: '워터파크&액티비티', link: '/' },
        { title: '키즈프로그램', link: '/' },
        { title: '부대시설', link: '/' },
        { title: '일반서비스', link: '/' },
        { title: '예약하기', link: '/' },
      ]
    }, {
      id: 5,
      mainTitle: { title: 'NOTICE', link: '/' },
      subTitle: [
        { title: 'DIF 괌', link: '/' },
        { title: 'DIF 사이판', link: '/' },
      ]
    }, {
      id: 6,
      mainTitle: { title: 'COMMUNITY', link: '/' },
      subTitle: [
        { title: 'DIF영상', link: '/' },
      ]
    }
  ]

  return (
    <>
      <StyledFooterGnb>
        {
          dataFooter.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.mainTitle.link} className="menuLink">{item.mainTitle.title}</Link>
                <ul>
                  {
                    item.subTitle.map((subItem, idx) => {
                      return (
                        <li key={idx}>
                          <Link to={subItem.link}>{subItem.title}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
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
    font-family: 'Poppins', sans-serif;
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

export default FooterGnb