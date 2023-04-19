import theme from 'style/theme';
import styled from 'styled-components/macro';

function FilmList() {
  return (
    <>
      <FilmListContainer className="filmScrollWrap">
        <h2 className="a11y-hidden">영상 썸네일 리스트</h2>
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
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-04.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상4"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-05.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상5"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-06.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상6"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-07.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상7"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-04.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상4"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-05.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상5"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-06.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상6"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-07.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상7"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-04.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상4"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-05.webp')}
                  width="352"
                  height="243"
                  alt="괌 영상5"
                />
              </a>
            </VideoItem>
          </VideoList>
        </FilmListInner>
        <FilmListInner>
          <h3 className="posRight">
            <BorderFilmText>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText>SAIPAN</FullFilmText>
            <BorderFilmText>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText>SAIPAN</FullFilmText>
            <BorderFilmText>POPULAR CONTENTS</BorderFilmText>
            <FullFilmText>SAIPAN</FullFilmText>
          </h3>
          <VideoList>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-08.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상8"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-09.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상9"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-10.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상10"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-11.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상11"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-12.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상12"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-14.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상14"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-15.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상15"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-16.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상16"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-08.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상8"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-09.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상9"
                />
              </a>
            </VideoItem>
            <VideoItem>
              <a href="/">
                <img
                  src={require('assets/images/background-10.webp')}
                  width="352"
                  height="243"
                  alt="사이판 영상10"
                />
              </a>
            </VideoItem>
          </VideoList>
        </FilmListInner>
      </FilmListContainer>
    </>
  );
}

const FilmListContainer = styled.section`
  width: 100%;
  position: relative;
  padding: 15.625rem 0 12.5rem 0;
  overflow: hidden;
`;

const FilmListInner = styled.div`
  width: 100%;
  height: 26.25rem;
  margin: 2.1875rem 0;
  white-space: nowrap;
  animation: ${(props) =>
    props.marqueeLeft
      ? 'marqueeLeft 60s linear infinite'
      : 'marqueeRight 60s linear infinite'};
  @keyframes marqueeLeft {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes marqueeRight {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  h3.posLeft {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    position: absolute;
    top: 0;
    left: 0;
  }
  h3.posRight {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const VideoList = styled.ul`
  width: max-content;
  display: flex;
  flex-flow: row wrap;
  white-space: nowrap;
  justify-content: center;
  gap: 1.875rem;
  position: absolute;
  left: ${(props) => (props.marqueeLeft ? '0' : '')};
  right: ${(props) => (!props.marqueeLeft ? '0' : '')};
  top: 8.75rem;
`;

const VideoItem = styled.li`
  width: 22rem;
  height: 15.1875rem;
  list-style: none;
  a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.5s;
  }
  a:hover {
    border-radius: 1.875rem;
  }
  img {
    display: block;
    height: 100%;
    object-fit: cover;
  }
`;

const FullFilmText = styled.span`
  font-size: 6.4375rem;
  font-weight: 700;
  color: ${(props) => (props.primaryColor ? theme.blue : theme.pink)};
  font-family: 'Poppins', Sans-serif;
`;

const BorderFilmText = styled.span`
  font-size: 6.4375rem;
  font-weight: 700;
  color: ${theme.white};
  font-family: 'Poppins', Sans-serif;
  -webkit-text-stroke-width: 0.125rem;
  -webkit-text-stroke-color: ${(props) =>
    props.primaryColor ? theme.blue : theme.pink};
`;

export default FilmList;
