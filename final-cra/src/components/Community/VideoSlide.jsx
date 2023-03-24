import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useEffect, useRef, useState } from 'react';
import { VideoPopup } from './../../components/Community/VideoPopup';
import styled from 'styled-components';
import theme from './../../style/theme';
import Arrow from './../../assets/icons/btn-arrow-next.svg';

const SwiperWrapper = styled.div`
  .swiper {
    max-width: 67.5rem;
    margin: 0 auto;
    overflow: hidden;
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
    border: 2px solid #212c92;
    border-radius: 30px;
    transition: all 0.26s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 2px solid ${theme.pink};
    }
  }

  .swiper-slide > h3 {
    font-size: 20px;
    line-height: 23px;
    height: 46px;
    color: #000551;
    font-weight: 600;
    font-family: 'welcome', Sans-serif;
    display: -webkit-box;
    overflow: hidden;
    word-break: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .swiper-slide > p {
    font-size: 17px;
    line-height: 25px;
    height: 48px;
    font-weight: 400;
    color: #31356d;
    display: -webkit-box;
    overflow: hidden;
    word-break: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .swiper-slide > span {
    font-size: 15px;
    line-height: 23px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }

  .swiper-slide video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
];

export const VideoSlide = () => {
  const [srcState, setSrcSate] = useState(['', false]);
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current.addEventListener('click', (e) => {
      if (e.target.dataset.community) {
        let srcLink = e.target.getAttribute('src').split('/')[3].split('.')[0];
        setSrcSate(() => {
          srcState[0] = srcLink;
          srcState[1] = true;
        });
        console.log(srcState);
      }
    });
  }, []);

  return (
    <>
      <SwiperWrapper>
        <button
          type="button"
          id="previousButton"
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
        />
        <button
          type="button"
          id="nextButton"
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
        />
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          scrollbar={{ draggable: true }}
          // touchRatio={0}
          className="mySwiper"
          ref={swiperRef}
          speed={1000}
        >
          {videoData.map(({ src, id }, idx) => {
            return (
              <>
                <SwiperSlide
                  key={id}
                  style={{
                    height: '17.5rem',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    overflow: 'hidden',
                  }}
                >
                  <video
                    src={require(`./../../assets/video/${src}`)}
                    data-community
                  ></video>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </SwiperWrapper>
    </>
  );
};
