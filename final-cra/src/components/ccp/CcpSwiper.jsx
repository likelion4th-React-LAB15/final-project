import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  A11y,
} from 'swiper';
import styled from 'styled-components/macro';
import theme from 'style/theme';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/controller';
import { useRef, useState } from 'react';

import playIcon from 'assets/icons/icon-swiper-play.svg';
import stopIcon from 'assets/icons/icon-swiper-stop.svg';

SwiperCore.use([Pagination, Autoplay, Keyboard, A11y]);

const swipeData = [
  { id: 1, src: 'golf-img1.jpg', alt: '골프장 배경1' },
  { id: 2, src: 'golf-img2.jpg', alt: '골프장 배경2' },
  { id: 3, src: 'golf-img3.jpg', alt: '골프장 배경3' },
  { id: 4, src: 'golf-img4.jpg', alt: '골프장 배경4' },
];

export const CcpSwiper = ({ children }) => {
  const swiperRef = useRef(null);
  const [swiperControl, setSwiperControl] = useState(true);
  return (
    <StyledCcpSwiper>
      <Swiper
        ref={swiperRef}
        spaceBetween={100}
        slidesPerView={'auto'}
        centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 7000,
        }}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        a11y={{
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
        }}
        loop={true}
        // 컨트롤러, 키보드 접근
        keyboard
        modules={[Navigation, Autoplay, Pagination, A11y]}
        className="activeSlideWrap"
      >
        {swipeData.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
              onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
            >
              <img src={require(`assets/images/${data.src}`)} alt={data.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="buttonWrap">
        <button
          className={swiperControl ? 'off' : ''}
          onClick={() => {
            swiperRef.current.swiper.autoplay.start();
            setSwiperControl((swiperControl) => (swiperControl = true));
          }}
        >
          <img src={playIcon} alt="시작" />
        </button>
        <button
          className={!swiperControl ? 'off' : ''}
          onClick={() => {
            swiperRef.current.swiper.autoplay.stop();
            setSwiperControl((swiperControl) => (swiperControl = false));
          }}
        >
          <img src={stopIcon} alt="정지" />
        </button>
      </div>
    </StyledCcpSwiper>
  );
};

const StyledCcpSwiper = styled.div`
  width: 100vw;
  position: relative;
  padding-bottom: 5.3125rem;
  .buttonWrap {
    margin: 2.5rem auto 0 auto;
    text-align: right;
    max-width: 100rem;
    width: 80%;
  }
  button {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border: 0;
    margin-left: 0.625rem;
    cursor: pointer;
    background-color: ${theme.indigo};
    border-radius: 50%;
    color: ${theme.white};
    pointer-events: visible;
  }
  button.off {
    background-color: #c9c9c9;
    pointer-events: none;
  }
  .activeSlideWrap {
    max-width: 100rem;
    overflow: visible;
    width: 80%;
  }
  .swiper {
    overflow: visible;
  }
  .swiper-slide {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 54.3%;
    border-radius: 1.875rem;
    font-size: 1.125rem;
    text-align: center;
    opacity: 0.2;
    transition: opacity 0.5s ease;
    overflow: hidden;
  }
  .swiper-slide img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-slide.swiper-slide-active {
    opacity: 1;
  }
  .swiper-pagination {
    bottom: -2.5rem;
  }
  .swiper-pagination-bullet {
    width: 0.875rem;
    height: 0.875rem;
    background-color: ${theme.gray};
  }
  .swiper-pagination-bullet-active {
    background-color: ${theme.indigo};
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 0.625rem;
  }
  .swiper-button-next,
  .swiper-button-prev {
    transform: translateY(-30%);
    background-color: rgba(0, 0, 0, 0.5);
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
    color: ${theme.white};
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.875rem;
  }
  .swiper-button-next:focus,
  .swiper-button-prev:focus,
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    border: 0.125rem solid ${theme.white};
  }
  .swiper-button-next {
    right: 6.25rem;
  }
  .swiper-button-prev {
    left: 6.25rem;
  }
`;
