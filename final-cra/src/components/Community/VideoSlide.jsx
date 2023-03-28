import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { forwardRef } from 'react';
import { ReactComponent as PlayBtn } from 'assets/icons/ico_video.svg';
import styled from 'styled-components';
import theme from 'style/theme';
import Arrow from 'assets/icons/btn-arrow-next.svg';
import 'swiper/css/pagination';

const videoData = [
  {
    id: 1,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-1.mp4',
  },
  {
    id: 2,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-2.mp4',
  },
  {
    id: 3,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-3.mp4',
  },
  {
    id: 4,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-4.mp4',
  },
  {
    id: 5,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-5.mp4',
  },
  {
    id: 6,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-6.mp4',
  },
  {
    id: 6,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    src: 'communityVideo-7.mp4',
  },
];
console.warn = console.error = () => {};
export const VideoSlide = forwardRef((_, ref) => {
  return (
    <>
      <SwiperWrapper>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          navigation={true}
          Pagination={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          scrollbar={{ draggable: true }}
          keyboard={true}
          // touchRatio={0}
          className="mySwiper"
          ref={ref}
          speed={1000}
        >
          {videoData.map(({ src, id }, idx) => {
            return (
              <>
                <SwiperSlide
                  key={idx}
                  style={{
                    height: '17.5rem',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    position: 'relative',
                  }}
                >
                  <h3>{idx + 1}</h3>
                  <div className="wrap">
                    <PlayBtn className="playBtn" />
                    <video
                      src={require(`assets/video/${src}`)}
                      data-community
                    ></video>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </SwiperWrapper>
    </>
  );
});

const SwiperWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
  margin-bottom: 12.5rem;

  .swiper {
    max-width: 90%;
    margin: 0 auto;

    position: relative;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .swiper-slide {
    flex-shrink: 0;
    height: 100%;
    text-align: center;
    font-size: 18px;
    background: #fff;
    border-radius: 30px;
    transition: all 0.26s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover {
      .playBtn {
        opacity: 0;
      }
      h3 {
        -webkit-text-stroke: 3px ${theme.pink};
      }
    }

    .playBtn {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.4s;
      pointer-events: none;
      transition: all 0.5s;
    }
  }

  .swiper-slide > h3 {
    position: absolute;
    left: -10%;
    bottom: -2.125rem;
    z-index: 10;
    font-weight: 900;
    font-size: 12.5rem;
    color: #fff;
    -webkit-text-stroke: 3px ${theme.blue};
    pointer-events: none;
    font-family: 'Roboto', sans-serif;
    transition: all 0.4s;
  }

  .wrap {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 1.75rem;
  }

  .swiper-slide .wrap video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1.2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  button[type='button'] {
    border: 0;
  }

  #previousButton {
    width: 40px;
    height: 40px;
    background: url(${Arrow}) no-repeat center;
    position: absolute;
    left: 300px;
    top: 540px;
    transform: translateY(-50%) rotate(180deg);
    cursor: pointer;
  }
  #nextButton {
    width: 40px;
    height: 40px;
    background: url(${Arrow}) no-repeat center;
    position: absolute;
    right: 300px;
    top: 540px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
