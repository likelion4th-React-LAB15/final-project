import React from 'react';
import ReservationTitle from 'components/Reservation/ReservationTitle.js';
import InputUserInfo from 'components/Reservation/InputUserInfo.js';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import ContinueButton from 'components/ContinueButton.js';
import Accordion from 'components/Reservation/Accordion.js';
import { useState, useEffect } from 'react';
import BackButton from 'components/BackButton.js';

const CartWrapper = styled.div`
  width: 1187px;
  display: flex;
  justify-content: space-between;
  margin: 110px auto 0px;
`;

const RoomWrapper = styled.section`
  width: 815px;
  height: auto;
`;

const UserInfoWrapper = styled.section``;

const PayInfoWrapper = styled.div`
  width: 332px;
  height: 665px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 27px 33px 24px;
  position: relative;
  margin-bottom: 30px;
`;

const PayTitle = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #212c92;
`;

const InfoTitle = styled.h4`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #444444;
  margin-top: 14px;
`;

const AddRequirement = styled.textarea`
  width: 265px;
  height: 105px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  padding: 15px 22px;
  margin: 5px 0px;
  position: relative;
  resize: none;

  &::placeholder {
    position: absolute;
    top: 15px;
  }
`;

const Line = styled.div`
  width: 265px;
  height: 1px;
  background-color: #aaaaaa;
  margin: 10px 0px 0px;
`;

const CardImgWrapper = styled.div`
  display: flex;
  margin: 15px 0px 0px 161px;
  gap: 6.5px;
`;

const VisaImg = styled.span`
  width: 48.5px;
  height: 30px;
  background: url(${require('./../assets/icons/Visa.png')}) no-repeat center
    center;
`;

const MasterCardImg = styled.span`
  width: 48.5px;
  height: 30px;
  background: url(${require('./../assets/icons/MasterCard.png')}) no-repeat
    center center;
`;

const TotalPriceWrapper = styled.div`
  width: 159px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 24px;
  right: 33px;
`;

const Total = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  color: #444444;
`;

const TotalPrice = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  color: #444444;
`;

const Policy = styled.pre`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #aaaaaa;
  width: 332px;
  margin: 29px 0px 125px;
  white-space: pre-wrap;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  padding-left: 14.8125rem;
`;

export const Reservation4 = () => {
  const policy = {
    0: `보증 정책 \nDIF 괌은 체크인시 현장 결제로 진행됩니다. 반드시 이용 가능한 신용카드를 지참해 주시기 바랍니다. 일부 프로모션 요금의 경우 예약 시 전액 사전 결제가 요구될 수 있습니다. 
    \n취소 정책 \n예약 취소는 체크인 시간 기준 72시간 전에 진행되지 않으면 취소 수수료인 1박의 수수료가 부과됩니다.`,
  };

  const [checkedRooms, setCheckedRooms] = useState([]);
  const [state, setState] = useState({
    accordionContents: [],
  });

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

  const totalPrice = checkedRooms.reduce((acc, room) => acc + room.price, 0);

  return (
    <>
      <Header />
      <SmoothScroll>
        <ReservationTitle value={'장바구니 및 결제'}></ReservationTitle>
        <CartWrapper>
          <RoomWrapper>
            <Accordion list={state.accordionContents} />
            <ButtonWrapper>
              <BackButton value={'+ 객실 추가'} />
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
    </>
  );
};

export default Reservation4;
