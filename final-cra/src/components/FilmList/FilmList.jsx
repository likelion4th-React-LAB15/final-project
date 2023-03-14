import styled from "styled-components";
import theme from "style/theme";


function FilmList() {
  return (
    <>
      <FilmListContainer className="filmScrollWrap">
        <h2 className='a11y-hidden'>영상 썸네일 리스트 A11y 적용해야함</h2>
        <FilmListInner className="scrollLeftMove" marqueeLeft>
          <h3 className="posLeft">
            <BorderFilmText primaryColor>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText primaryColor>GUAM</FullFilmText>
            <BorderFilmText primaryColor>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText primaryColor>GUAM</FullFilmText>
            <BorderFilmText primaryColor>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText primaryColor>GUAM</FullFilmText>
          </h3>
          <VideoList marqueeLeft>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-04.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-05.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-06.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-07.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-04.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-05.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-06.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-07.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-04.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-05.webp')} alt="" /></a></VideoItem>
          </VideoList>
        </FilmListInner>
        <FilmListInner>
          <h3 className="posRight">
            <BorderFilmText>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText>GUAM</FullFilmText>
            <BorderFilmText>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText>GUAM</FullFilmText>
            <BorderFilmText>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText>GUAM</FullFilmText>
          </h3>
          <VideoList>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-08.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-09.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-10.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-11.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-12.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-14.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-15.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-16.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-08.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-09.webp')} alt="" /></a></VideoItem>
            <VideoItem><a href="{()=>false}"><img src={require('../../assets/images/background-10.webp')} alt="" /></a></VideoItem>
          </VideoList>
        </FilmListInner>
      </FilmListContainer>
    </>
  )
}

const FilmListContainer = styled.section`
  width: 100%;
  position: relative;
  padding:15.625rem 0 12.5rem 0; 
  overflow: hidden;
`
FilmListContainer.displayName = 'FilmListContainer';
const FilmListInner = styled.div`
  width: 100%;
  height: 26.25rem; 
  margin: 2.1875rem 0; 
  white-space: nowrap;
  animation: ${props => (props.marqueeLeft) ? 'marqueeLeft 60s linear infinite' : 'marqueeRight 60s linear infinite'} ;
  @keyframes marqueeLeft {
    0% { transform: translateX(0%); }
    50% { transform: translateX(-50%); }
    100% { transform: translateX(0%);}
  }
  @keyframes marqueeRight {
    0% { transform: translateX(0%); }
    50% { transform: translateX(50%); }
    100% { transform: translateX(0%);}
  }
  h3.posLeft{
    display: flex;
    justify-content: center;
    gap:1.25rem;
    position: absolute;
    top:0;
    left:0;
  }
  h3.posRight{
    display: flex;
    justify-content: center;
    gap:1.25rem;
    position: absolute;
    top:0;
    right:0;
  }
`

const VideoList = styled.ul`
  width: max-content;
  display: flex;
  flex-flow: row wrap;
  white-space: nowrap;
  justify-content: center;
  gap:1.875rem; 
  position: absolute;
  left: ${props => (props.marqueeLeft) ? '0' : ''} ;
  right: ${props => !(props.marqueeLeft) ? '0' : ''} ;
  top:8.75rem;
`

const VideoItem = styled.li`
  width: 22rem;
  height: 15.1875rem;
  list-style: none;  
  a{
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.5s;
  }
  a:hover{
    border-radius: 1.875rem;
  }
  img{
    display: block;
    height: 100%;
    object-fit: cover;
  }
`


const FullFilmText = styled.span`
  font-size: 6.4375rem;
  font-weight: 700;
  color: ${props => (props.primaryColor ? theme.blue : theme.pink)};
  font-family: 'Poppins',Sans-serif;
`

const BorderFilmText = styled.span`
  font-size: 6.4375rem;
  font-weight: 700;
  color: ${theme.white};
  font-family: 'Poppins',Sans-serif;
  -webkit-text-stroke-width: 0.125rem;
  -webkit-text-stroke-color: ${props => (props.primaryColor ? theme.blue : theme.pink)};
`

export default FilmList