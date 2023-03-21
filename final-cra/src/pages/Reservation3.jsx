import ReservationTitle from 'components/ReservationTitle.js';
import StepNavigation from 'components/StepNavigation.js';
import ContinueButton from 'components/ContinueButton.js';
import BackButton from 'components/BackButton.js';
import RoomInfoCard from 'components/RoomInfoCard.js';
import styled from 'styled-components';

const rooms = [
  {
    id: 1,
    name: '수페리어 (테니스코트 뷰)',
    description: 'T-WAY 야간 항공 전용 프로모션(1일 3식)',
    notice:
      '객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다.',
    site: '객실 정보와 추가 사항 보기',
    price: 129.99,
  },
  {
    id: 2,
    name: '수페리어 (테니스코트 뷰)',
    description: 'T-WAY 야간 항공 전용 프로모션(1일 3식)',
    notice:
      '객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다. 객실 관련 안내 텍스트 입니다.',
    site: '객실 정보와 추가 사항 보기',
    price: 129.99,
  },
];

const Container = styled.div`
  margin: 137.89px auto 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.313rem;
  margin: 5.625rem 0 15.168rem;
`;

export const Reservation3 = () => {
  return (
    <ReservationTitle value={'객실'}>
      <StepNavigation
        page={'reservation3'}
        labelArray={['투숙객 선택', '날짜 선택', '객실 선택']}
      ></StepNavigation>
      <Container>
        {rooms.map((room, index) => (
          <RoomInfoCard
            key={room.id}
            name={room.name}
            description={room.description}
            notice={room.notice}
            addInfoSite={room.site}
            price={room.price}
            imageUrl={`/`}
            isLast={index === rooms.length - 1}
          />
        ))}
      </Container>
      <ButtonWrapper>
        <BackButton id={'reservation2'} value={'뒤로'} />
        <ContinueButton id={'reservation4'} value={'장바구니 및 결제'} />
      </ButtonWrapper>
    </ReservationTitle>
  );
};

export default Reservation3;
