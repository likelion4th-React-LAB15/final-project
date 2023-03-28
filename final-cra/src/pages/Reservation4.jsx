import React from 'react';
import ReservationTitle from 'components/Reservation/ReservationTitle.js';
import InputUserInfo from 'components/Reservation/InputUserInfo.js';
import styled from 'styled-components';
import theme from 'style/theme';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import ContinueButton from 'components/ContinueButton.js';
import Accordion from 'components/Reservation/Accordion.js';
import { useState, useEffect } from 'react';
import { Button } from 'components/user/UserButton.jsx';
import { useNavigate } from 'react-router-dom';
import ModalPortal from 'components/ModalPortal/ModalPortal';
import Modal from 'components/Modal/Modal';

export const Reservation4 = ({ checked }) => {
  const policy = {
    0: `보증 정책 \nDIF 괌은 체크인시 현장 결제로 진행됩니다. 반드시 이용 가능한 신용카드를 지참해 주시기 바랍니다. 일부 프로모션 요금의 경우 예약 시 전액 사전 결제가 요구될 수 있습니다. 
    \n취소 정책 \n예약 취소는 체크인 시간 기준 72시간 전에 진행되지 않으면 취소 수수료인 1박의 수수료가 부과됩니다.`,
  };

  const [checkedRooms, setCheckedRooms] = useState([]);
  const [state, setState] = useState({
    accordionContents: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    const checkedRoomsStr = localStorage.getItem('checkedRooms');

    if (checkedRoomsStr) {
      setCheckedRooms(JSON.parse(checkedRoomsStr));
    }
  }, []);

  useEffect(() => {
    const adults = localStorage.getItem('adults');
    const children = localStorage.getItem('children');
    const infants = localStorage.getItem('infants');
    const firstDay = localStorage.getItem('firstDay');
    const lastDay = localStorage.getItem('lastDay');

    const accordionContents = checkedRooms.map(({ name, imageUrl, price }) => ({
      id: name,
      price: price,
      handle: name,
      panel: `
        <section class="box">
          <img src=${imageUrl} alt=${name}>
        <div class="textContainer">
          <div class="textWrap">
            <p class="textTitle">투숙 인원</p>
            <p>성인 <span class="item">${adults}명</span></p>
            <p>아동(만 2세~11세) <span class="item">${children}명</span></p>
            <p>유아(만 2세 미만) <span class="item">${infants}명</span></p>
          </div>            
          <div class="textWrap">
            <p class="textTitle">투숙일</p>
            <p>체크인 <span class="item">${firstDay}&nbsp;&nbsp;&nbsp; ~ </span></p>
            <p>체크아웃 <span class="item">${lastDay}</span></p>            
          </div> 
        </div>
        </section>
      `,
    }));

    setState((prevState) => ({ ...prevState, accordionContents }));
  }, [checkedRooms]);

  const [totalPrice, setTotalPrice] = useState(0);

  const toggleCheckbox = (e) => {
    if (e.target.checked) {
      setTotalPrice(totalPrice + Number(e.target.value));
    } else {
      setTotalPrice(totalPrice - Number(e.target.value));
    }
  };

  const handleBackButtonClick = () => {
    HandleReserCheck();
  };

  const [modalOpen, setModalOpen] = useState(false);

  const HandleReserCheck = () => {
    setModalOpen(true);
  };

  const HandleModalClose = () => {
    setModalOpen(false);
  };
  const HandleWindowOpen = () => {
    setModalOpen(false);
    navigate('/reservation1');
  };

  return (
    <>
      <Header />
      <SmoothScroll>
        <ReservationTitle value={'장바구니 및 결제'}></ReservationTitle>
        <CartWrapper>
          <RoomWrapper>
            <Accordion
              list={state.accordionContents}
              onChange={toggleCheckbox}
            />
            <ButtonWrapper>
              <Button onClick={handleBackButtonClick} secondary visible>
                + 객실 추가
              </Button>
            </ButtonWrapper>
          </RoomWrapper>
          <UserInfoWrapper>
            <PayInfoWrapper>
              <PayTitle>결제 정보 입력</PayTitle>
              <InfoTitle>예약자 정보</InfoTitle>
              <InputUserInfo placeholder="이름" />
              <InputUserInfo placeholder="전화번호" />
              <InputUserInfo placeholder="이메일 주소" />
              <AddRequirement
                type="text"
                placeholder={'추가 요구사항'}
              ></AddRequirement>
              <Line />
              <InfoTitle>결제 정보</InfoTitle>
              <InputUserInfo placeholder="카드 번호" />
              <InputUserInfo placeholder="만료(MM/YY)" />
              <InputUserInfo placeholder="카드 소유자 영문명" />
              <CardImgWrapper>
                <VisaImg />
                <MasterCardImg />
              </CardImgWrapper>
              <TotalPriceWrapper>
                <Total>합계</Total>
                <TotalPrice>${totalPrice}</TotalPrice>
              </TotalPriceWrapper>
            </PayInfoWrapper>
            <ContinueButton value={'결제하기'} />
            <Policy>{policy[0]}</Policy>
          </UserInfoWrapper>
        </CartWrapper>
        <Footer />
      </SmoothScroll>
      {modalOpen && (
        <ModalPortal>
          <Modal hasChoice onClose={HandleModalClose} onOpen={HandleWindowOpen}>
            새로운 객실을 추가 하시겠습니까?
          </Modal>
        </ModalPortal>
      )}
    </>
  );
};

const CartWrapper = styled.div`
  width: 74.1875rem;
  display: flex;
  justify-content: space-between;
  margin: 6.875rem auto 0rem;
`;

const RoomWrapper = styled.section`
  width: 50.9375rem;
  height: auto;
`;

const UserInfoWrapper = styled.section``;

const PayInfoWrapper = styled.div`
  width: 20.75rem;
  height: 41.5625rem;
  background: ${theme.white};
  border: 0.0625rem solid #eeeeee;
  box-shadow: 0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.15);
  border-radius: ${theme.spacingMd};
  padding: 1.6875rem 2.0625rem 1.5rem;
  position: relative;
  margin-bottom: 1.875rem;
`;

const PayTitle = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: ${theme.spacingMd};
  line-height: 1.5rem;
  text-align: center;
  color: ${theme.blue};
`;

const InfoTitle = styled.h4`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: ${theme.textSm};
  line-height: 0.9375rem;
  color: #444444;
  margin-top: 0.875rem;
`;

const AddRequirement = styled.textarea`
  width: 16.5625rem;
  height: 6.5625rem;
  background: ${theme.white};
  border: 0.0625rem solid #cccccc;
  border-radius: ${theme.spacingMd};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: ${theme.textSm};
  line-height: 0.9375rem;
  padding: 0.9375rem ${theme.textMd};
  margin: 0.3125rem 0rem;
  position: relative;
  resize: none;

  &::placeholder {
    position: absolute;
    top: 0.9375rem;
  }
`;

const Line = styled.div`
  width: 16.5625rem;
  height: 0.0625rem;
  background-color: #aaaaaa;
  margin: 0.625rem 0rem 0rem;
`;

const CardImgWrapper = styled.div`
  display: flex;
  margin: 0.9375rem 0rem 0rem 10.0625rem;
  gap: 0.4063rem;
`;

const VisaImg = styled.span`
  width: 3.0313rem;
  height: 1.875rem;
  background: url(${require('./../assets/icons/Visa.png')}) no-repeat center
    center;
`;

const MasterCardImg = styled.span`
  width: 3.0313rem;
  height: 1.875rem;
  background: url(${require('./../assets/icons/MasterCard.png')}) no-repeat
    center center;
`;

const TotalPriceWrapper = styled.div`
  width: 9.9375rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 1.5rem;
  right: 2.0625rem;
`;

const Total = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  text-transform: capitalize;
  color: #444444;
`;

const TotalPrice = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  text-transform: capitalize;
  color: #444444;
`;

const Policy = styled.pre`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: ${theme.textSm};
  line-height: 0.9375rem;
  text-transform: capitalize;
  color: #aaaaaa;
  width: 20.75rem;
  margin: 1.8125rem 0rem 7.8125rem;
  white-space: pre-wrap;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  padding-left: 20.9375rem;
`;

export default Reservation4;
