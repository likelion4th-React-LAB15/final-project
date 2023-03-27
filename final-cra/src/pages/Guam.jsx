import styled from 'styled-components/macro';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import theme from 'style/theme';

import Topbtn from 'components/TopBtn';
import { DbbList } from 'components/dbb';
import { AboutList } from 'components/about';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { CcpLinkButton, CcpSwiper } from 'components/ccp';
import { SubNav } from 'components/subNav/SubNav';
import { ServiceList } from 'components/service/ServiceList';
import { SectionTitle, SectionDesc } from 'components/titlebox';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import { MarqueeText } from 'components/marqueeText/MarqueeText';
import { BuildingLayout } from 'components/buildingLayout/BuildingLayout';
import { TableContainer, TableTitle, OutlineTable } from 'components/table';
import { DetailPageTitle } from 'components/detailPageTitle/DetailPageTitle';
import { NotificationList, NotificationTitle } from 'components/notification';

import iceIcon from 'assets/icons/icon-service-ice.svg';
import tubeIcon from 'assets/icons/icon-service-tube.svg';
import wifiIcon from 'assets/icons/icon-service-wifi.svg';
import roomIcon from 'assets/icons/icon-service-room.svg';
import transIcon from 'assets/icons/icon-service-trans.svg';
import frontIcon from 'assets/icons/icon-service-front.svg';
import guestIcon from 'assets/icons/icon-service-guest.svg';
import waterIcon from 'assets/icons/icon-service-water.svg';
import showerIcon from 'assets/icons/icon-service-shower.svg';
import washingIcon from 'assets/icons/icon-service-washing.svg';
import strollerIcon from 'assets/icons/icon-service-stroller.svg';
import congratsIcon from 'assets/icons/icon-service-congrats.svg';
import bathchairIcon from 'assets/icons/icon-service-bathchair.svg';
import coinwashingIcon from 'assets/icons/icon-service-coinwashing.svg';

export const Guam = () => {
  const subNavData = [
    {
      id: 1,
      title: 'GUAM',
      link: '/guam',
      subListTitle: [
        { name: 'RESERVATION', link: '/reservation' },
        { name: 'DIF', link: '/about' },
        { name: 'GUAM', link: '/guam' },
        { name: 'SAIPAN', link: '/saipan' },
        { name: 'NOTICE', link: '/notice' },
        { name: 'COMMUNITY', link: '/community' },
      ],
    },
    {
      id: 2,
      title: 'DIF괌',
      subListTitle: [
        { name: 'DIF괌', link: '/' },
        { name: '객실', link: '/' },
        { name: '레스토랑&바', link: '/' },
        { name: '워터팤트&액티비티', link: '/' },
        { name: '슈퍼 아메리칸 서커스', link: '/' },
        { name: '키즈프로그램', link: '/' },
        { name: '부대시설', link: '/' },
        { name: '제휴골프장', link: '/' },
        { name: '일반서비스', link: '/' },
        { name: '공식 홈페이지 예약 특전', link: '/' },
        { name: '예약하기', link: '/' },
      ],
    },
  ];
  const aboutData = [
    {
      id: 1,
      image: 'about-guam-01',
      alt: '워터파크 레저 스포츠',
      headingBold: 'ALL INCLUSIVE',
      headingLine: 'OCEANFRONT RESORT',
      description:
        'DIF괌은 4만여 평 규모의 워터파크 내에서 70여 가지의 각종 레저와 스포츠를 무료로 즐길 수 있는 종합 휴양 리조트로 777개의 객실을 갖춘 괌 최대의 특급호텔입니다.',
      bigFontColor: 'pink',
      bigFontContent: 'DOBBY',
    },
    {
      id: 2,
      image: 'about-guam-02',
      alt: '워터파크 뷰',
      headingBold: 'ENDLESS',
      headingLine: 'DINING POSSIBILITIES',
      description:
        '일본 전통 라면, 미국식 현대 코스요리, 뷔페까지 DIF의 7개 레스토랑에서 전 세계 다양한 음식들을 즐겨보세요.',
      bigFontColor: 'orange',
      bigFontContent: 'ISLANDS',
    },
    {
      id: 3,
      image: 'about-guam-03',
      alt: '클럽 메이트',
      headingBold: 'UNLIMITED',
      headingLine: 'RECREATIONAL ACTIVITIES',
      description:
        '남국의 자연과 멋을 살려 지어진 광대한 DIF의 워터파크에서 지루할 틈 없는 액티비티들을 즐겨보세요. 전 세계 8개뿐인 인공 수족관에서 형형색색의 열대 물고기들과 수영을 해보는 신기한 체험과 하늘을 향해 날아오르는 트램폴린은 강력 추천!',
      bigFontColor: 'blue',
      bigFontContent: 'FREE',
    },
  ];
  const guamTableData01 = [
    {
      id: 1,
      title: '위치',
      description: '투몬만 중심부에 위치, 괌공항에서 4.8km, 차량으로 5분',
    },
    {
      id: 2,
      title: '차량서비스',
      description: '만12세 이상 편도 $15, 왕복 $30 (예약 시 사전신청 필수)',
    },
    {
      id: 3,
      title: '주소',
      description: '210 Pale San Vitores Road, Tumon Bay, Guam 96913',
    },
    {
      id: 4,
      title: '전화',
      description: '1-671-646-9171',
    },
    {
      id: 5,
      title: '객실정보',
      description: '총 객실 777개 / 전 객실 금연(발코니 흡연 가능)',
    },
  ];
  const guamTableData02 = [
    {
      id: 1,
      title: '디럭스',
      description: '2~16층(144실)',
    },
    {
      id: 2,
      title: '패밀리 디럭스',
      description: '3~11층(15실)',
    },
    {
      id: 3,
      title: '로얄클럽 프리미엄',
      description: '3~26층(28실)',
    },
    {
      id: 4,
      title: '로얄클럽 이그제큐티브 스위트',
      description: '25층~26층(2실)',
    },
    {
      id: 5,
      title: '시헤키',
      description: '3~4층(18실)',
    },
    {
      id: 6,
      title: '로얄클럽',
      description: '17~26층(74실)',
    },
    {
      id: 7,
      title: '로얄클럽 스위트',
      description: '23~26층(10실)',
    },
    {
      id: 8,
      title: '스탠다드',
      description: '2~4층(64실)',
    },
    {
      id: 9,
      title: '슈페리어 플러스',
      description: '5~11층(142실)',
    },
    {
      id: 10,
      title: '스탠다드',
      description: '3~9층(60실)',
    },
    {
      id: 11,
      title: '슈페리어 워터파크 뷰',
      description: '25~30층(30실)',
    },
    {
      id: 12,
      title: '슈페리어',
      description: '10~31층(190실)',
    },
  ];
  const dbbData = [
    {
      id: 1,
      alt: '공항 버스',
      title: '호텔→공항 샌딩 서비스',
      desc: '체크아웃 날짜에만 이용가능',
      strong: '항공편명 및 시간 기재 필수',
    },
    {
      id: 2,
      alt: '호텔 레스토랑',
      title: 'F&B $40 쿠폰',
      desc: '호텔 내 모든 레스토랑 / 바에서 사용',
    },
    {
      id: 3,
      alt: '호텔 바',
      title: '무료 음료 쿠폰',
      desc: '호텔 내 모든 바에서 맥주 / 와인 / 탄산음료 중 선택 가능',
    },
    {
      id: 4,
      alt: '골프',
      title: 'CCP장비 무료 대여 쿠폰',
      desc: '골프화 및 클럽 무료 대여',
    },
    {
      id: 5,
      alt: '렌터카',
      title: '렌터카 30% 할인 쿠폰',
      desc: '호텔 내 렌터카 업체',
    },
    {
      id: 6,
      alt: '룸',
      title: '무료 룸 업그레이드',
      desc: '체크인 시 객실 상황에 따라 1단계 업그레이드 (슈페리어 워터파크뷰, 시헤키, 패밀리 디럭스, 스위트 객실 제외)',
    },
    {
      id: 7,
      alt: '무료 음료',
      title: 'DIF 괌 $100 상품권 (7박이상 예약시 $200 상품권증정)',
      desc: 'DIF 괌 한국 홈페이지 예약 한정 프로모션 상품과 중복 적용 불가 (다음 방문 시 적용)',
    },
    {
      id: 8,
      alt: 'T-갤러리아',
      title: '쿠폰 증정 및 뷰티 예약 서비스',
      desc: 'T-갤러리아 방문 시 선물 쿠폰 증정 및 개인 뷰티 예약 진행',
    },
    {
      id: 9,
      alt: '76 주유소',
      title: '주유 할인 쿠폰',
      desc: '76 주유소에서 사용 가능',
    },
    {
      id: 10,
      alt: '아유아람 스파',
      title: '스파 20%할인',
      desc: '아유아람 스파 이용 시',
    },
    {
      id: 11,
      alt: 'Valley of the Latte 공원',
      title: '공원 입장료 20% 할인 쿠폰',
      desc: 'Valley of the Latte 공원 입장료',
    },
    {
      id: 12,
      alt: '스카이다이빙',
      title: 'SKYDIVE GUAM 스페셜 할인',
    },
    {
      id: 13,
      alt: '괌 오션파크',
      title: '괌 오션파크 20% 할인 쿠폰',
      desc: '제트스키, 바나나보트, 카약 렌탈, 패들 보드를 20% 할인된 가격으로 즐기실 수 있습니다.',
    },
  ];
  const notifiData = [
    {
      id: 1,
      title: 'DIF 괌 DBB 프로그램 유의사항',
      list: [
        {
          id: 1,
          listTitle:
            '모든 쿠폰은 체크인 시 객실당 1장 제공되며, 양도/재사용 / 재발급 / 현금화가 불가합니다.',
        },
        { id: 2, listTitle: '본 혜택은 3박 이상 예약 고객에 한해 제공됩니다.' },
        {
          id: 3,
          listTitle:
            '공항 송영서비스 제공을 위해 예약 시 항공편명 및 시간을 적어주시기 바랍니다. (미기재 시 이용불가)',
        },
        {
          id: 4,
          listTitle:
            'F&B $40 쿠폰은 객실당 1장 제공되며 한 장소에서 1회 사용할 수 있으며, 차액은 자동 소멸됩니다.',
        },
        {
          id: 5,
          listTitle: '무료 음료 쿠폰은 (1) 박당 성인수만큼 제공합니다.',
        },
        {
          id: 6,
          listTitle:
            '무료 룸 업그레이드는 체크인 시 확인 가능하며, 객실 상황에 따른 것으로 사전 확인 및 보장이 불가합니다.',
        },
        {
          id: 7,
          listTitle:
            '무료 룸 업그레이드는 시헤키, 패밀리 디럭스 객실에는 적용되지 않으며 디럭스 객실에서 로얄클럽으로 업그레이드되는 경우 라운지서비스는 제공되지 않습니다.',
        },
        {
          id: 8,
          listTitle:
            'DIF 괌 $100 상품권을 제외한 나머지 혜택은 투숙 기간 내에만 사용이 가능합니다.',
        },
        {
          id: 9,
          listTitle:
            'CCP 장비 무료 대여 쿠폰은 게스트 서비스 데스크에서 골프 예약 진행 시 지참하셔야 사용이 가능합니다.',
        },
        {
          id: 10,
          listTitle:
            '모든 쿠폰은 분실 및 도난시 재발급이 불가하오니 유의해 주시기 바랍니다.',
        },
      ],
    },
    {
      id: 2,
      title: 'DIF 괌 $100 상품권',
      list: [
        {
          id: 1,
          listTitle:
            '7박 이상을 예약하시는 경우 DIF괌 $200상품권이 제공됩니다.',
        },
        {
          id: 2,
          listTitle:
            '체크인 시 객실당 1장 제공되며, 양도/재사용/재발급/현금화가 불가합니다.',
        },
        {
          id: 3,
          listTitle:
            '예약자명으로만 발행되며, 예약자이자 투숙객인 본인이 재방문 시 사용 가능합니다.',
        },
        {
          id: 4,
          listTitle:
            '여러 객실 예약 시 각 객실 투숙객의 명의로 발행이 필요한 경우, 각 객실의 실투숙객의 영문명으로 예약해주시기 바랍니다.',
        },
        { id: 5, listTitle: '체크아웃 일자 기준 이후 3년간 유효합니다.' },
        {
          id: 6,
          listTitle: '공식 홈페이지를 통한 예약에 한해 사용이 가능합니다.',
        },
        {
          id: 7,
          listTitle:
            '본 상품권은 투숙일 3일 이상, 예약 건당 1장만 사용할 수 있습니다.',
        },
        {
          id: 8,
          listTitle:
            '본 상품권은 얼리버드, 타임세일 프로모션 등의 할인 상품과 중복적용 되지 않습니다.',
        },
      ],
    },
    {
      id: 3,
      title: 'T 갤러리아 퍼스널 뷰티 예약 서비스',
      list: [
        {
          id: 1,
          listTitle:
            'DBB를 예약하신 후 받으신 예약확정 이메일 하단에 명시되어 있는 T-갤러리아 링크에서 뷰티 예약 시간을 사전에 예약하실 수 있습니다.',
        },
        {
          id: 2,
          listTitle:
            'T-갤러리아내에 있는 화장품 및 향수 관련 문의 및 퍼스널 쇼핑을 도와드립니다.',
        },
      ],
    },
  ];
  const serviceData = [
    {
      id: 1,
      icon: `${frontIcon}`,
      alt: '프론트 데스크',
      title: '프론트 데스크',
      list: [
        { id: 1, listTitle: '운영시간 : 24시간(한국인직원 24시간 상주)' },
        { id: 2, listTitle: '체크인 : 15:00 이후' },
        { id: 3, listTitle: '체크아웃 : 12:00(정오) 이전' },
        {
          id: 4,
          listTitle:
            '지불방식 : 미화(현금, 여행자 수표), 카드 (아멕스, 비자, JCB, 마스터, 다이너스)',
        },
      ],
    },
    {
      id: 2,
      icon: `${guestIcon}`,
      alt: '게스트서비스',
      title: '게스트서비스 카운터',
      list: [
        { id: 1, listTitle: '운영시간 : 09:00~19:00' },
        {
          id: 2,
          listTitle: '서비스 내용 : 기념일 서비스(24시간 전 레스토랑 예약)',
        },
        { id: 3, listTitle: '옵션 투어 상담 및 예약(09:00~17:00)' },
        { id: 4, listTitle: '기타 고객 지원 서비스' },
      ],
    },
    {
      id: 3,
      icon: `${wifiIcon}`,
      alt: '인터넷',
      title: '인터넷 서비스',
      list: [
        { id: 1, listTitle: '전 객실 유/무선인터넷 무료 이용 가능' },
        {
          id: 2,
          listTitle: '무선인터넷 이용 시 객실번호, 투숙객 성(LAST NAME) 입력',
        },
      ],
    },
    {
      id: 4,
      icon: `${congratsIcon}`,
      alt: '축하',
      title: '기념일 축하 서비스',
      list: [
        {
          id: 1,
          listTitle:
            '생일/결혼기념일: 프런트나 게스트서비스 카운터에 최소1일 전 신청필수.',
        },
        {
          id: 2,
          listTitle:
            '레스토랑에서 점심, 저녁식사 시 케이크 제공 (테이크아웃, 객실전달 불가합니다.)',
        },
      ],
    },
    {
      id: 5,
      icon: `${roomIcon}`,
      alt: '커넥팅룸',
      title: '커넥팅룸 신청 서비스',
      list: [
        {
          id: 1,
          listTitle: '두 개의 객실을 내부에서 문으로 연결, 한 객실처럼 이용',
        },
        {
          id: 2,
          listTitle:
            '예약 시 요청하면 당일 객실 상황에 따라 객실 배정- 사전보장서비스 (비수기 예약만 가능) : 예약완료 후 출발 전 5~7일 사이에 예약과 (reservations@DIFguam.com) 혹은 “확정예약 문의게시판”을 통해 가능 여부를 별도로 문의, 가능한 경우 1박당 $30의 추가 비용 발생',
        },
      ],
    },
    {
      id: 6,
      icon: `${iceIcon}`,
      alt: '제빙기',
      title: '제빙기',
      list: [
        { id: 1, listTitle: '오세아나A 11층을 제외한 전층(무료)' },
        { id: 2, listTitle: '오세아나B 홀수층(무료)' },
        { id: 3, listTitle: '로열타워 전층 복도 끝 위치(무료)' },
      ],
    },
    {
      id: 7,
      icon: `${bathchairIcon}`,
      alt: '휠체어',
      title: '휠체어',
      list: [
        {
          id: 1,
          listTitle: '프런트 혹은 게스트서비스카운터에 요청 시 대여(무료)',
        },
      ],
    },
    {
      id: 8,
      icon: `${strollerIcon}`,
      alt: '유모차',
      title: '유모차',
      list: [
        {
          id: 1,
          listTitle: '프런트 데스크에 요청 시 $25보증금 룸 차지후 이용 가능',
        },
      ],
    },
    {
      id: 9,
      icon: `${transIcon}`,
      alt: '변압기',
      title: '변압기',
      list: [
        { id: 1, listTitle: '대여불가' },
        { id: 2, listTitle: '부티키에서 구입 가능(약 $2)' },
      ],
    },
    {
      id: 10,
      icon: `${coinwashingIcon}`,
      alt: '동전세탁기',
      title: '동전세탁기',
      list: [
        { id: 1, listTitle: '운영시간 : 24시간' },
        { id: 2, listTitle: '위치 : 로열타워 2층, 오세아나A 2층' },
        { id: 3, listTitle: '요금 : 세탁기, 건조기 각 $2.25' },
      ],
    },
    {
      id: 11,
      icon: `${washingIcon}`,
      alt: '세탁서비스',
      title: '세탁서비스',
      list: [
        { id: 1, listTitle: '하우스키핑(유료)' },
        { id: 2, listTitle: '신청 : 오전 8시까지 신청' },
        { id: 3, listTitle: '신청방법 : 객실 벽장 안의 전용비닐 주머니 이용' },
      ],
    },
    {
      id: 12,
      icon: `${waterIcon}`,
      alt: '식수대',
      title: '식수대',
      list: [{ id: 1, listTitle: '워터파크 곳곳에 설치되어 있음(무료)' }],
    },
    {
      id: 13,
      icon: `${tubeIcon}`,
      alt: '튜브 에어펌프',
      title: '튜브 에어펌프',
      list: [{ id: 1, listTitle: '키즈풀/라켓센터 위치(무료)' }],
    },
    {
      id: 14,
      icon: `${showerIcon}`,
      alt: '락커룸 및 샤워시설',
      title: '락커룸 및 샤워시설',
      list: [
        { id: 1, listTitle: '운영시간 : 09:00~20:00' },
        { id: 2, listTitle: '위치 : 게임룸 인근' },
        { id: 3, listTitle: '요금 : 투숙객 무료' },
      ],
    },
  ];
  gsap.config({ nullTargetWarn: false });
  useEffect(() => {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.moveItem01 .moveImage', {
        y: -400,
        scrollTrigger: {
          trigger: '.moveItem01',
          start: 'center center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.from('.moveItem01 .moveImage img', {
        scale: 1.5,
        scrollTrigger: {
          trigger: '.moveItem01',
          start: 'center center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.to('.moveItem01 .moveText', {
        y: -100,
        scrollTrigger: {
          trigger: '.moveItem01',
          start: 'center center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.to('.moveItem02 .moveImage', {
        y: -400,
        scrollTrigger: {
          trigger: '.moveItem02',
          start: '-700 center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.from('.moveItem02 .moveImage img', {
        scale: 1.5,
        scrollTrigger: {
          trigger: '.moveItem02',
          start: 'center center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.to('.moveItem02 .moveText', {
        y: -100,
        scrollTrigger: {
          trigger: '.moveItem02',
          start: '-700 center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.to('.moveItem03 .moveImage', {
        y: -400,
        scrollTrigger: {
          trigger: '.moveItem03',
          start: '-700 center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.from('.moveItem03 .moveImage img', {
        scale: 1.5,
        scrollTrigger: {
          trigger: '.moveItem03',
          start: 'center center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.to('.moveItem03 .moveText', {
        y: -100,
        scrollTrigger: {
          trigger: '.moveItem03',
          start: '-700 center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.to('.changeBg', {
        scrollTrigger: {
          trigger: '.changeBg',
          start: '1200 center',
          end: '+=1300 center',
          scrub: true,
          onEnter: () => {
            gsap.to('.changeBg', {
              backgroundColor: `${theme.blue}`,
            });
            gsap.to('.moveText .bold', {
              color: `${theme.pink}`,
            });
            gsap.to('.moveText .line', {
              webkitTextStroke: `0.125rem ${theme.pink}`,
            });
            gsap.to('.moveText p', {
              color: `${theme.white}`,
            });
          },
          onLeaveBack: () => {
            gsap.to('.changeBg', {
              backgroundColor: `${theme.white}`,
            });
            gsap.to('.moveText .bold', {
              color: `${theme.blue}`,
            });
            gsap.to('.moveText .line', {
              webkitTextStroke: `0.125rem ${theme.blue}`,
            });
            gsap.to('.moveText p', {
              color: `${theme.gray}`,
            });
          },
          onLeave: () => {
            gsap.to('.changeBg', {
              backgroundColor: `${theme.white}`,
            });
            gsap.to('.moveText .bold', {
              color: `${theme.blue}`,
            });
            gsap.to('.moveText .line', {
              webkitTextStroke: `0.125rem ${theme.blue}`,
            });
            gsap.to('.moveText p', {
              color: `${theme.gray}`,
            });
          },
          onEnterBack: () => {
            gsap.to('.changeBg', {
              backgroundColor: `${theme.blue}`,
            });
            gsap.to('.moveText .bold', {
              color: `${theme.pink}`,
            });
            gsap.to('.moveText .line', {
              webkitTextStroke: `0.125rem ${theme.pink}`,
            });
            gsap.to('.moveText p', {
              color: `${theme.white}`,
            });
          },
        },
      });
      gsap.to('.marqueeLeft h2', {
        x: -700,
        scrollTrigger: {
          trigger: '.marqueeLeft',
          start: '-1200 center',
          end: '1200 center',
          scrub: true,
        },
      });
      gsap.to('.marqueeRight h2', {
        x: 700,
        scrollTrigger: {
          trigger: '.marqueeRight',
          start: '-1200 center',
          end: '1200 center',
          scrub: true,
        },
      });
    }, 100);
  }, []);

  return (
    <>
      <Header />
      <Topbtn />
      <SubNav subNavData={subNavData} />
      <SmoothScroll>
        <StyledGuam className="changeBg">
          <StyledGuamInner>
            <DetailPageTitle>무한대의 즐거움이 펼쳐지는 곳!</DetailPageTitle>
            <AboutList aboutData={aboutData} />
          </StyledGuamInner>
          <BuildingLayout>
            <img
              src={require('assets/images/map-guam.png')}
              alt="괌 리조트 지도"
            />
          </BuildingLayout>
          <MarqueeText>
            <strong>dobby islands free</strong>
            <em>guam</em>
            <strong>dobby islands free</strong>
            <em>guam</em>
            <strong>dobby islands free</strong>
            <em>guam</em>
          </MarqueeText>
          <TableContainer>
            <TableTitle>개요</TableTitle>
            <OutlineTable>
              <tbody>
                {guamTableData01.map((tableItem) => {
                  return (
                    <tr key={tableItem.id}>
                      <th>{tableItem.title}</th>
                      <td>{tableItem.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </OutlineTable>
            <TableTitle>상세 객실정보</TableTitle>
            <OutlineTable detail>
              <tbody>
                {guamTableData02.map((tableItem) => {
                  return (
                    <tr key={tableItem.id}>
                      <th>{tableItem.title}</th>
                      <td>
                        {tableItem.description}
                        <Link to="/">
                          <span className="a11y-hidden">상세정보</span>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </OutlineTable>
          </TableContainer>
          <StyledDbbContainer>
            <SectionTitle>
              DIF괌 한국 공식 홈페이지 DBB 예약 고객만을 위한 특별혜택
            </SectionTitle>
            <SectionDesc>
              한국 공식 홈페이지 3박 이상 예약 고객만을 위한 특별 혜택 끝판왕!
              DIF괌의 엄선된 혜택들을 한 곳에 모아 선보입니다. <br />
              DBB프로그램으로만 제공되는 혜택 누리시면서 완벽한 여행을 완성해
              보시기 바랍니다. <br />
              ※DBB 혜택은 예약 건마다 적용되며, 최소 3박 이상인 예약에만
              제공되는 점 유의해 주시기 바랍니다.
            </SectionDesc>
            <StyledDbbBox>
              <DbbList dbbData={dbbData} />
            </StyledDbbBox>
          </StyledDbbContainer>
          <MarqueeText marqueeRight>
            <strong>dobby islands free</strong>
            <em>guam</em>
            <strong>dobby islands free</strong>
            <em>guam</em>
            <strong>dobby islands free</strong>
            <em>guam</em>
          </MarqueeText>
          <StyledNotificationContainer>
            {notifiData.map((notifiItem) => {
              return (
                <React.Fragment key={notifiItem.id}>
                  <NotificationTitle>{notifiItem.title}</NotificationTitle>
                  <NotificationList>
                    {notifiItem.list.map((listItem) => {
                      return (
                        <li key={listItem.id}>
                          <span aria-hidden="true">-</span>
                          {listItem.listTitle}
                        </li>
                      );
                    })}
                  </NotificationList>
                </React.Fragment>
              );
            })}
          </StyledNotificationContainer>
          <StyledServiceContainer>
            <SectionTitle>잊지 못할 최상의 서비스를 제공합니다</SectionTitle>
            <SectionDesc>
              24시간 프런트 데스크를 운영하며, 기념일 서비스, 유모차 및 휠체어
              대여 서비스 등이 준비되어 있습니다.
              <br />
              자세한 내용은 FAQ를 참고해 주세요.
            </SectionDesc>
            <ServiceList>
              {serviceData.map((serviceItem) => {
                return (
                  <li key={serviceItem.id}>
                    <div className="icon">
                      <img src={serviceItem.icon} alt={serviceItem.alt} />
                    </div>
                    <div className="text">
                      <h3>{serviceItem.title}</h3>
                      {serviceItem.list.map((listItem) => {
                        return (
                          <p key={listItem.id}>
                            <span aria-hidden>-</span>
                            {listItem.listTitle}
                          </p>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ServiceList>
          </StyledServiceContainer>
          <StyledCCPContainer>
            <SectionTitle>DIF가 추천하는 괌 골프 코스 CCP괌!</SectionTitle>
            <SectionDesc>
              CCP괌은 괌 최남단에 위치한 18홀 챔피언십 골프 코스입니다.
              <br />
              산과 계곡이 적절히 배치되어있는 쉽지 않은 코스로 CCP는 괌
              골퍼들에게 오랫동안 사랑받고 있습니다.
            </SectionDesc>
            <SectionDesc>
              모든 코스들이 남태평양과 조화를 이루고 있어 인생샷을 남기기도
              최고인 이 곳!
              <br />
              CCP괌 공식 홈페이지 혹은 DIF 로비에 위치한 게스트서비스 카운터에서
              예약을 하실 경우
              <br />
              6가지 이상의 특별 혜택을 받으실 수도 있으니
              <br />
              자세한 내용은 여기를 클릭해서 골프 예약을 진행해보세요!
            </SectionDesc>
            <CcpLinkButton>예약하기</CcpLinkButton>
            <CcpSwiper />
          </StyledCCPContainer>
          <Footer />
        </StyledGuam>
      </SmoothScroll>
    </>
  );
};

const StyledGuam = styled.section`
  overflow: hidden;
  margin: 0 auto;
  padding-top: 21.25rem;
`;
const StyledGuamInner = styled.div`
  max-width: 73.75rem;
  margin: 0 auto;
`;
const StyledDbbContainer = styled.div`
  max-width: 73.75rem;
  margin: 11.5rem auto 0 auto;
`;
const StyledDbbBox = styled.div`
  margin: 5.3125rem auto 0 auto;
`;
const StyledNotificationContainer = styled.div`
  width: 100%;
  max-width: 73.75rem;
  padding: 0 5.3125rem;
  padding-bottom: 15rem;
  margin: 0 auto;
`;
const StyledServiceContainer = styled.div`
  width: 100%;
  padding: 10rem 0 10rem 0;
  background-color: rgba(0, 0, 0, 0.05);
`;
const StyledCCPContainer = styled.div`
  width: 100%;
  padding: 10rem 0 10rem 0;
`;
