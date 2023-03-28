// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import theme from 'style/theme';
import Arrow from 'assets/icons/btn-arrow-next.svg';

const noticeData = [
  {
    key: 1,
    title: 'PIC 홈페이지 리뉴얼 기념 이벤트 당첨자 발표',
    content: '',
    date: '2023-02-27',
  },
  {
    key: 2,
    title: '2023/03/01 이후 예약 건 DBB 혜택 변경 공지사항',
    content:
      " 2023년 3월 1일(수) 이후의 예약 건부터, 기존 DBB혜택 중  ‘레이트 체크아웃' 및  '픽업 서비스(공항 → 호텔 간 무료 차량 서비스)' 제공이 중단됩니다. *샌딩 서비스(호텔 → 공항 간 무료 차량 서비스)는 기존과 동일하게 이용 가능 2월 28일 이전에 예약된 건기존 DBB 혜택(송영 서비스 및 레이트 체크아웃 포함) 적용3월 1일 이후에 예약된 건변경된 DBB  혜택 적용 ※ 위 변경 사항은 3월 1일(수) 00:00 (자정) 이후의 예약 건부터 적용될 예정이며(예약시점 기준), 보다 나은 서비스 제공을 위해 결정된 사항이오니 부디 너른 양해 부탁드립니다.  ※ 본 페이지는 공지사항으로 문의 사항이 있으신 경우 '일반 문의 게시판'을 통해 문의해 주시기 바랍니다. 본 페이지에서는 답변 드리기 어려운 점 너른 양해 부탁드립니다.",
    date: '2023-02-15',
  },
  {
    key: 3,
    title:
      '[PIC 괌] 로얄클럽 라운지/레스토랑/워터파크 관련 최신 정보 안내(2023.3.16~)',
    content:
      '로얄 클럽 라운지 운영 현황 (23.3.16~)운영 시간오전 7시 - 오후 8시(매일)드링크 바오전 7시 - 오후 8시(매일)해피아워오후 5시 - 오후 7시(매일)라운지 컨티넨탈 조식오전 7시 - 오전 10시*골드/실버카드 이용 시 스카이라이트 및 컨티넨탈 조식 모두 이용 가능 레스토랑 운영 안내 (23.3.16~)레스토랑조/중/석운영 요일운영 시간스카이라이트 (뷔페)조식매일오전 7시 - 오전 10시중식오후 12시 - 오후 2시석식오후 6시 - 오후 9시비스트로석식매일오후 6시 - 오후 9시선데이 브런치일요일오전 10시 30분 - 오후 2시*예약 필수 / 추가요금 부과라면하우스 홋카이도중식/석식매일오전 11시 - 오후 8시시헤키 스낵쉑중식월 - 목요일오전 11시 - 오후 5시금 - 일요일오전 10시 - 오후 6시선셋 바비큐석식매일오후 6시 - 오후 9시*하루 전 예약 필수 /추가요금 부과하나기석식매일오후 6시 - 오후 9시슈퍼 아메리칸 서커스-월,화,목,금,토,일(수요일 제외)오후 7시 30분 카페 에스프레스-매일오전 7시 - 오후 5시(CCP) Par 6 조식매일오전 6시 - 오전 10시(CCP) 도그 하우스중식매일오전 10시 - 오후 4시 ※ Par 6와 도그 하우스는 CCP(골프장)에 위치한 식당으로, 골드카드 투숙 시 골프장에서 조식/중식 이용 가능합니다. ※ 비스트로 선데이 브런치(뷔페) 및 선셋 바비큐(바비큐 플래터) 이용 시 골드카드로 투숙 하시더라도 추가 요금이 부과됩니다.    (요금은 해당 식음료 업장 페이지를 확인해 주시기 바랍니다.) ※ 슈퍼 아메리칸 서커서는 골드카드 이용 시 무료로 이용 관람 가능하며, 게스트 서비스 카운에서 예약해 주시기 바랍니다.     실버/브론즈카드 이용 시 추가 금액은 PIC 괌 카페 에스프레스 옆 서커스 박스 오피스에서 요금 확인 및 예약 가능합니다. ※ 레스토랑 별 메뉴 및 금액은 아래 버튼을 클릭하여 확인해 주시기 바랍니다.<레스토랑 메뉴 및 금액 확인> 워터파크 운영 안내 (23.3.16~) 운영 시설운영 시간메인풀 / 슬라이드 풀 / 게임풀오전 9시 - 오후 8시라군 카약오전 9시 - 오후 6시랩풀오전 9시 - 오후 6시퍼터골프오전 9시 - 오후 8시게임룸 / 테니스장 / 농구장오전 9시 - 오후 8시테니스 기초 강습오전 10시 30분 / 오후 4시 (예약 필수)인공 수족관월 - 목요일: 오전 9시 - 오후 12시 / 오후 1시 - 오후 5시금 - 일요일: 오전 9시 - 오후 5시(마지막 예약: 오후 4시 30분)시헤키 스플래시풀월 - 목요일: 오전 9시 - 오후 12시 / 오후 1시 - 오후 6시금 - 일요일: 오전 9시 - 오후 6시키즈풀오전 9시 - 오후 6시양궁장오전 9시 - 오후 5시(마지막 예약: 오후 4시 30분)비치센터오전 9시 - 오후 5시비치카약/스노클링/윈드 서핑 보드 렌탈오전 9시 - 오후 5시윈드서핑 강습오전 10시 / 오전 11시 / 오후 2시 / 오후 3시*강습시간: 약 30분 소요비치 스노클링 강습 오전 10시 30분 / 오후 2시 30분트램폴린오전 9시 30분  - 오후 5시피트니스 센터오전 6시 - 오후 9시 30분키즈클럽(3/27~3/31 연회장 대체 운영)*<키즈클럽 유지보수  안내> 공지사항 참조종일반: 오전 9시 - 오후 4시 45분오전반점심 미포함: 오전 9시 - 오후 12시점심 포함: 오전 9시 - 오후 12시 30분오후반: 오후 1시 - 오후 4시 45분리틀 키즈클럽오전 9시 - 오후 5시요가*예약 불가, 당일 10분 전 입장매트요가: 오전 8시 - 오전 9시 (화요일&목요일)플라잉 요가: 오전 8시 - 오전 9시(일요일)  ※ 인공 수족관은 수질 관리로 인해 예약 인원이 한정되어 있는 점 너른 양해 부탁드립니다.※ 키즈클럽 종일반 또는 오전반(점심 포함) 이용 시 골드카드 소지 어린이는 점심 식사 무료 이용 가능하며,  실버/브론즈 소지 어린이는    $15의 추가 비용이 발생합니다. ※ 리틀 키즈클럽은 1일 1회, 최대 4시간까지 이용 가능하며, 이용 하루 전 예약 하셔야 합니다.※ 위 운영 시간은 현지 리조트 상황에 따라 언제든 변경될 수 있습니다. ',
    date: '2022-11-29',
  },
  {
    key: 4,
    title: '[PIC 괌] 안전 인증 마크 & WTTC 안전 여행 스탬프 획득',
    content:
      'PIC GUAM │ 괌 안전 인증 마크 및 WTTC 안전 여행 스탬프 획득PIC 괌이 괌 안전 인증 마크(Guam Safe Certification)와 세계여행관광협회(WTTC)가 운영하는 안전 여행 스탬프(Safe Travels Stamp)를 획득하였습니다. ──​─​​───​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​​​​──​─​​──​─​──​─​──​─​​​​​인증 마크 설명■ 괌 안전 인증 마크 : 괌 정부의 방역 및 안전 지침을 준수한 기업에 부여된 공식 마크■ WTTC 안전 여행 스탬프 : 국제 기준의 안전, 보건 위생 규범을 충족한 기업에 부여된 인증 마크 ──​─​​───​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​​​​──​─​​──​─​──​─​──​─​​​​​추후 고객님들께 보다 안전하고 편안한 휴식을 드릴 수 있도록 준비하고 있겠습니다.감사합니다.',
    date: '2022-08-09',
  },
  {
    key: 1,
    title: 'PIC 홈페이지 리뉴얼 기념 이벤트 당첨자 발표',
    content: '',
    date: '2023-02-27',
  },
  {
    key: 2,
    title: '2023/03/01 이후 예약 건 DBB 혜택 변경 공지사항',
    content:
      " 2023년 3월 1일(수) 이후의 예약 건부터, 기존 DBB혜택 중  ‘레이트 체크아웃' 및  '픽업 서비스(공항 → 호텔 간 무료 차량 서비스)' 제공이 중단됩니다. *샌딩 서비스(호텔 → 공항 간 무료 차량 서비스)는 기존과 동일하게 이용 가능 2월 28일 이전에 예약된 건기존 DBB 혜택(송영 서비스 및 레이트 체크아웃 포함) 적용3월 1일 이후에 예약된 건변경된 DBB  혜택 적용 ※ 위 변경 사항은 3월 1일(수) 00:00 (자정) 이후의 예약 건부터 적용될 예정이며(예약시점 기준), 보다 나은 서비스 제공을 위해 결정된 사항이오니 부디 너른 양해 부탁드립니다.  ※ 본 페이지는 공지사항으로 문의 사항이 있으신 경우 '일반 문의 게시판'을 통해 문의해 주시기 바랍니다. 본 페이지에서는 답변 드리기 어려운 점 너른 양해 부탁드립니다.",
    date: '2023-02-15',
  },
  {
    key: 3,
    title:
      '[PIC 괌] 로얄클럽 라운지/레스토랑/워터파크 관련 최신 정보 안내(2023.3.16~)',
    content:
      '로얄 클럽 라운지 운영 현황 (23.3.16~)운영 시간오전 7시 - 오후 8시(매일)드링크 바오전 7시 - 오후 8시(매일)해피아워오후 5시 - 오후 7시(매일)라운지 컨티넨탈 조식오전 7시 - 오전 10시*골드/실버카드 이용 시 스카이라이트 및 컨티넨탈 조식 모두 이용 가능 레스토랑 운영 안내 (23.3.16~)레스토랑조/중/석운영 요일운영 시간스카이라이트 (뷔페)조식매일오전 7시 - 오전 10시중식오후 12시 - 오후 2시석식오후 6시 - 오후 9시비스트로석식매일오후 6시 - 오후 9시선데이 브런치일요일오전 10시 30분 - 오후 2시*예약 필수 / 추가요금 부과라면하우스 홋카이도중식/석식매일오전 11시 - 오후 8시시헤키 스낵쉑중식월 - 목요일오전 11시 - 오후 5시금 - 일요일오전 10시 - 오후 6시선셋 바비큐석식매일오후 6시 - 오후 9시*하루 전 예약 필수 /추가요금 부과하나기석식매일오후 6시 - 오후 9시슈퍼 아메리칸 서커스-월,화,목,금,토,일(수요일 제외)오후 7시 30분 카페 에스프레스-매일오전 7시 - 오후 5시(CCP) Par 6 조식매일오전 6시 - 오전 10시(CCP) 도그 하우스중식매일오전 10시 - 오후 4시 ※ Par 6와 도그 하우스는 CCP(골프장)에 위치한 식당으로, 골드카드 투숙 시 골프장에서 조식/중식 이용 가능합니다. ※ 비스트로 선데이 브런치(뷔페) 및 선셋 바비큐(바비큐 플래터) 이용 시 골드카드로 투숙 하시더라도 추가 요금이 부과됩니다.    (요금은 해당 식음료 업장 페이지를 확인해 주시기 바랍니다.) ※ 슈퍼 아메리칸 서커서는 골드카드 이용 시 무료로 이용 관람 가능하며, 게스트 서비스 카운에서 예약해 주시기 바랍니다.     실버/브론즈카드 이용 시 추가 금액은 PIC 괌 카페 에스프레스 옆 서커스 박스 오피스에서 요금 확인 및 예약 가능합니다. ※ 레스토랑 별 메뉴 및 금액은 아래 버튼을 클릭하여 확인해 주시기 바랍니다.<레스토랑 메뉴 및 금액 확인> 워터파크 운영 안내 (23.3.16~) 운영 시설운영 시간메인풀 / 슬라이드 풀 / 게임풀오전 9시 - 오후 8시라군 카약오전 9시 - 오후 6시랩풀오전 9시 - 오후 6시퍼터골프오전 9시 - 오후 8시게임룸 / 테니스장 / 농구장오전 9시 - 오후 8시테니스 기초 강습오전 10시 30분 / 오후 4시 (예약 필수)인공 수족관월 - 목요일: 오전 9시 - 오후 12시 / 오후 1시 - 오후 5시금 - 일요일: 오전 9시 - 오후 5시(마지막 예약: 오후 4시 30분)시헤키 스플래시풀월 - 목요일: 오전 9시 - 오후 12시 / 오후 1시 - 오후 6시금 - 일요일: 오전 9시 - 오후 6시키즈풀오전 9시 - 오후 6시양궁장오전 9시 - 오후 5시(마지막 예약: 오후 4시 30분)비치센터오전 9시 - 오후 5시비치카약/스노클링/윈드 서핑 보드 렌탈오전 9시 - 오후 5시윈드서핑 강습오전 10시 / 오전 11시 / 오후 2시 / 오후 3시*강습시간: 약 30분 소요비치 스노클링 강습 오전 10시 30분 / 오후 2시 30분트램폴린오전 9시 30분  - 오후 5시피트니스 센터오전 6시 - 오후 9시 30분키즈클럽(3/27~3/31 연회장 대체 운영)*<키즈클럽 유지보수  안내> 공지사항 참조종일반: 오전 9시 - 오후 4시 45분오전반점심 미포함: 오전 9시 - 오후 12시점심 포함: 오전 9시 - 오후 12시 30분오후반: 오후 1시 - 오후 4시 45분리틀 키즈클럽오전 9시 - 오후 5시요가*예약 불가, 당일 10분 전 입장매트요가: 오전 8시 - 오전 9시 (화요일&목요일)플라잉 요가: 오전 8시 - 오전 9시(일요일)  ※ 인공 수족관은 수질 관리로 인해 예약 인원이 한정되어 있는 점 너른 양해 부탁드립니다.※ 키즈클럽 종일반 또는 오전반(점심 포함) 이용 시 골드카드 소지 어린이는 점심 식사 무료 이용 가능하며,  실버/브론즈 소지 어린이는    $15의 추가 비용이 발생합니다. ※ 리틀 키즈클럽은 1일 1회, 최대 4시간까지 이용 가능하며, 이용 하루 전 예약 하셔야 합니다.※ 위 운영 시간은 현지 리조트 상황에 따라 언제든 변경될 수 있습니다. ',
    date: '2022-11-29',
  },
  {
    key: 4,
    title: '[PIC 괌] 안전 인증 마크 & WTTC 안전 여행 스탬프 획득',
    content:
      'PIC GUAM │ 괌 안전 인증 마크 및 WTTC 안전 여행 스탬프 획득PIC 괌이 괌 안전 인증 마크(Guam Safe Certification)와 세계여행관광협회(WTTC)가 운영하는 안전 여행 스탬프(Safe Travels Stamp)를 획득하였습니다. ──​─​​───​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​​​​──​─​​──​─​──​─​──​─​​​​​인증 마크 설명■ 괌 안전 인증 마크 : 괌 정부의 방역 및 안전 지침을 준수한 기업에 부여된 공식 마크■ WTTC 안전 여행 스탬프 : 국제 기준의 안전, 보건 위생 규범을 충족한 기업에 부여된 인증 마크 ──​─​​───​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​─​​​──​─​​​​​──​─​​──​─​──​─​──​─​​​​​추후 고객님들께 보다 안전하고 편안한 휴식을 드릴 수 있도록 준비하고 있겠습니다.감사합니다.',
    date: '2022-08-09',
  },
];

const eventData = [
  {
    key: 1,
    title: 'PIC 홈페이지 리뉴얼 이벤트 당첨자 발표',
    content: '',
    date: '2023-02-27',
  },
];

const btnActive = () => {
  const swiper = document.querySelector('.swiper-wrapper');

  if (swiper.firstElementChild?.classList.contains('swiper-slide-active')) {
    document.querySelector('#previousButton').style.opacity = '0.4';
  } else {
    document.querySelector('#previousButton').style.opacity = '1';
  }

  if (
    swiper.children[swiper.children.length - 3]?.classList.contains(
      'swiper-slide-active'
    )
  ) {
    document.querySelector('#nextButton').style.opacity = '0.4';
  } else {
    document.querySelector('#nextButton').style.opacity = '1';
  }
};

export const Slide = ({ typeState }) => {
  const strLen = 40;
  const swiperRef = useRef(null);

  useEffect(() => {
    btnActive();
  }, [typeState]);

  return (
    <SwiperWrapper>
      <button
        type="button"
        id="previousButton"
        onClick={() => {
          swiperRef.current.swiper.slidePrev();
          btnActive();
        }}
      />
      <button
        type="button"
        id="nextButton"
        onClick={() => {
          swiperRef.current.swiper.slideNext();
          btnActive();
        }}
      />
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        scrollbar={{ draggable: false }}
        touchRatio={0}
        className="mySwiper"
        ref={swiperRef}
        speed={1000}
      >
        {typeState
          ? noticeData.map(({ title, content, date, key }) => {
              return (
                <SwiperSlide
                  // key={key}
                  style={{
                    height: '17.5rem',
                    padding: '50px 40px',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  }}
                >
                  <h3>{title}</h3>
                  <p>
                    {content.length >= strLen &&
                      content.substring(0, strLen) + '...'}
                  </p>
                  <span>{date}</span>
                </SwiperSlide>
              );
            })
          : eventData.map(({ title, content, date, key }, idx) => {
              return (
                <SwiperSlide
                  // key={key}
                  style={{
                    height: '17.5rem',
                    padding: '50px 40px',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  }}
                >
                  <h3>{title}</h3>
                  <p>
                    {content.length >= strLen &&
                      content.substring(0, strLen) + '...'}
                  </p>
                  <span>{date}</span>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </SwiperWrapper>
  );
};

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

  .swiper-slide img {
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
