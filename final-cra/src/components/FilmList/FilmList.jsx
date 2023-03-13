import styled from "styled-components";


function FilmList() {
  return (
    <>
      <FilmListContainer className="filmScrollWrap">
        <h2>영상 썸네일 리스트 A11y 적용해야함</h2>
        <FilmListInner className="scrollLeftMove" marqueeLeft>
          <h3>
            <BorderFilmText primaryColor>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText primaryColor>GUAM</FullFilmText>
            <BorderFilmText primaryColor>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText primaryColor>GUAM</FullFilmText>
            <BorderFilmText primaryColor>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText primaryColor>GUAM</FullFilmText>
          </h3>
          <VideoList>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
          </VideoList>
        </FilmListInner>
        <FilmListInner>
          <h3>
            <BorderFilmText>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText>GUAM</FullFilmText>
            <BorderFilmText>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText>GUAM</FullFilmText>
            <BorderFilmText>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText>GUAM</FullFilmText>
          </h3>
          <VideoList>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
            <VideoItem>gg</VideoItem>
          </VideoList>
        </FilmListInner>
      </FilmListContainer>
    </>
  )
}

const FilmListContainer = styled.section`
  width: 100%;
  position: relative;
  padding:250px 0;
  overflow: hidden;
`
FilmListContainer.displayName = 'FilmListContainer';
const FilmListInner = styled.div`
  width: 100%;
  padding: 35px 0;
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
  h3{
    display: flex;
    justify-content: center;
    gap:20px;
    margin:0 auto;
  }
`

const VideoList = styled.ul`
  width: max-content;
  display: flex;
  flex-flow: row wrap;
  white-space: nowrap;
  justify-content: center;
  margin:0 auto;
  gap:30px;
`

const VideoItem = styled.li`
  width: 352px;
  height:243px;
  list-style: none;
  background-color: red;
`


const FullFilmText = styled.span`
  font-size: 103px;
  font-weight: 700;
  color: ${props => (props.primaryColor ? '#212C92' : '#ff0099')};
  font-family: 'Poppins',Sans-serif;
`

const BorderFilmText = styled.span`
  font-size: 103px;
  font-weight: 700;
  color: #fff;
  font-family: 'Poppins',Sans-serif;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${props => (props.primaryColor ? '#212C92' : '#ff0099')};
`

export default FilmList