import ReservationTitle from 'components/Reservation/ReservationTitle.js';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import Footer from 'components/footer/Footer';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';

export const Reservation4 = () => {
  return (
    <>
      <Header />
      <SmoothScroll>
        <ReservationTitle value={'장바구니 및 결제'}></ReservationTitle>;
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default Reservation4;
