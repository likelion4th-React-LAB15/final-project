import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Keyboard, A11y } from 'swiper';
import styled from 'styled-components/macro';
import theme from 'style/theme';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay, Keyboard]);

export const CcpSwiper = ({ children }) => {
  return (
    <StyledCcpSwiper>
      <Swiper
        spaceBetween={100}
        slidesPerView={'auto'}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
        keyboard
        modules={[Autoplay, Pagination, A11y]}
        className="activeSlideWrap"
      >
        <SwiperSlide>
          <img
            src={require('assets/images/golf-img1.jpg')}
            alt="CCP 괌 골프장 배경1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require('assets/images/golf-img2.jpg')}
            alt="CCP 괌 골프장 배경2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require('assets/images/golf-img3.jpg')}
            alt="CCP 괌 골프장 배경3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require('assets/images/golf-img2.jpg')}
            alt="CCP 괌 골프장 배경2"
          />
        </SwiperSlide>
      </Swiper>
    </StyledCcpSwiper>
  );
};

const StyledCcpSwiper = styled.div`
  width: 100vw;
  /* left: 50%;
  transform: translateX(-50%); */
  /* min-width: 1400px; */
  position: relative;
  padding-bottom: 85px;
  .activeSlideWrap {
    max-width: 1600px;
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
    background: #f00;
    font-size: 18px;
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
    bottom: -40px;
  }
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background-color: ${theme.gray};
  }
  .swiper-pagination-bullet-active {
    background-color: ${theme.indigo};
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 10px;
  }
`;
