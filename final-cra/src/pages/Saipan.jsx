import styled from 'styled-components/macro';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import theme from 'style/theme';

import { AboutList } from 'components/about';
import Footer from 'components/footer/Footer';
import { SubNav } from 'components/subNav/SubNav';
import { ServiceList } from 'components/service/ServiceList';
import { SectionTitle, SectionDesc } from 'components/titlebox';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import { MarqueeText } from 'components/marqueeText/MarqueeText';
import { BuildingLayout } from 'components/buildingLayout/BuildingLayout';
import { TableContainer, TableTitle, OutlineTable } from 'components/table';
import { DetailPageTitle } from 'components/detailPageTitle/DetailPageTitle';

import iceIcon from 'assets/icons/icon-service-ice.svg';
import tubeIcon from 'assets/icons/icon-service-tube.svg';
import tourIcon from 'assets/icons/icon-service-tour.svg';
import mealIcon from 'assets/icons/icon-service-meal.svg';
import wifiIcon from 'assets/icons/icon-service-wifi.svg';
import roomIcon from 'assets/icons/icon-service-room.svg';
import frontIcon from 'assets/icons/icon-service-front.svg';
import guestIcon from 'assets/icons/icon-service-guest.svg';
import waterIcon from 'assets/icons/icon-service-water.svg';
import showerIcon from 'assets/icons/icon-service-shower.svg';
import strollerIcon from 'assets/icons/icon-service-stroller.svg';
import congratsIcon from 'assets/icons/icon-service-congrats.svg';
import bathchairIcon from 'assets/icons/icon-service-bathchair.svg';
import coinwashingIcon from 'assets/icons/icon-service-coinwashing.svg';

export const Saipan = () => {
  const subNavData = [
    {
      id: 1,
      title: 'SAIPAN',
      link: '/saipan',
      subListTitle: [
        { name: 'RESERVATION', link: '/' },
        { name: 'DIF', link: '/about' },
        { name: 'GUAM', link: '/guam' },
        { name: 'SAIPAN', link: '/saipan' },
        { name: 'NOTICE', link: '/' },
        { name: 'COMMUNITY', link: '/' },
      ],
    },
    {
      id: 2,
      title: 'DIF사이판',
      subListTitle: [
        { name: 'DIF사이판', link: '/' },
        { name: '객실', link: '/' },
        { name: '레스토랑&바', link: '/' },
        { name: '워터팤트&액티비티', link: '/' },
        { name: '키즈프로그램', link: '/' },
        { name: '부대시설', link: '/' },
        { name: '일반서비스', link: '/' },
        { name: '예약하기', link: '/' },
      ],
    },
  ];
  const aboutData = [
    {
      id: 1,
      image: 'about-saipan-01',
      alt: '사이판 리조트',
      headingBold: 'ALL INCLUSIVE',
      headingLine: 'RESORT',
      description:
        'DIF 사이판은 사이판 섬 남단 산안토니오에 위치한 종합 휴양 리조트로 아름다운 전망을 바라볼 수 있는 총 308개의 객실을 구비하고 있습니다.',
      bigFontColor: 'pink',
      bigFontContent: 'DOBBY',
    },
    {
      id: 2,
      image: 'about-saipan-02',
      alt: '워터파크 뷰',
      headingBold: 'DYNAMIC',
      headingLine: 'PLEASURE',
      description:
        '다이나믹한 즐거움이 가득한 워터파크에서는 40여 가지의 액티비티와 각종 레저 활동을 즐길 수 있으며 매 끼니 다른 테마의 음식을 제공하는 마젤란을 포함 5개의 레스토랑에서는 미각의 향연이 펼쳐집니다.',
      bigFontColor: 'orange',
      bigFontContent: 'ISLANDS',
    },
    {
      id: 3,
      image: 'about-saipan-03',
      alt: '해양 스포츠',
      headingBold: 'ESCAPE',
      headingLine: 'THE ORDINARY',
      description:
        '워터파크를 휘감아 도는 유수풀에서는 튜브를 타고한가로운 휴식을! 포인트 브레이크에서는 인공파도를 헤치며 짜릿한 서핑을! 또한 PIC 해변에서는 카약과 스노클링, 윈드서핑 등 다양한 해양 스포츠에 도전할 수 있습니다. 기초부터 차근차근 알려주는 스포츠 강습을 포함 만능 엔터테이너인 클럽메이트가 제공하는 PIC 만의 독특한 서비스는 여행의 즐거움을 두 배로 늘려 드립니다.',
      bigFontColor: 'blue',
      bigFontContent: 'FREE',
    },
  ];
  const saipanTableData01 = [
    {
      id: 1,
      title: '위치',
      description:
        '사이판의 남단 서쪽 해변에 위치, 사이판 국제공항과 10분 거리',
    },
    {
      id: 2,
      title: '차량서비스',
      description:
        '만 2세 이상 편도 $10 /왕복 $15 (인당 금액이며 객실 예약 시, 사전 신청 필수)',
    },
    {
      id: 3,
      title: '주소',
      description:
        '779 Chalan Tun Thomas P. Sablan Road, Saipan, MP 96950 CNMI',
    },
    {
      id: 4,
      title: '전화',
      description: '1-670-234-7976',
    },
    {
      id: 5,
      title: '객실정보',
      description: '총 객실 308개 / 전 객실 금연',
    },
  ];
  const saipanTableData02 = [
    {
      id: 1,
      title: '슈페리어',
      description: '1~6층',
    },
    {
      id: 2,
      title: '디럭스',
      description: '1~6층',
    },
  ];
  const saipanTableData03 = [
    {
      id: 1,
      title: '슈페리어',
      description: '1~5층',
    },
    {
      id: 2,
      title: '디럭스',
      description: '1~5층',
    },
  ];
  const saipanTableData04 = [
    {
      id: 1,
      title: '슈페리어',
      description: '1~5층',
    },
    {
      id: 2,
      title: '디럭스',
      description: '1~5층 / 장애인용 1층',
    },
    {
      id: 3,
      title: '오션프론트',
      description: '2~4층',
    },
    {
      id: 4,
      title: '오션프론트 자쿠지',
      description: '1층',
    },
    {
      id: 5,
      title: '히비스커스 스위트',
      description: '5층',
    },
    {
      id: 6,
      title: '플레임트리 스위트',
      description: '5층',
    },
  ];
  const serviceData = [
    {
      id: 1,
      icon: `${frontIcon}`,
      alt: '프론트 데스크',
      title: '프론트 데스크',
      list: [
        { id: 1, listTitle: '운영시간 : 24시간' },
        { id: 2, listTitle: '체크인 : 15:00 이후' },
        { id: 3, listTitle: '체크아웃 : 12:00(정오) 이전' },
        {
          id: 4,
          listTitle:
            '지불방식 : 미화(현금, 여행자 수표), 카드 (아멕스, 비자, JCB, 마스터, 다이너스, 디스커버)',
        },
      ],
    },
    {
      id: 2,
      icon: `${guestIcon}`,
      alt: '서비스',
      title: '컨시어지 데스크',
      list: [
        { id: 1, listTitle: '운영시간 : 08:00~20:00' },
        {
          id: 2,
          listTitle:
            '서비스 내용: 기념일(생일, 결혼 기념일 등) 서비스, 기타 고객 지원 서비스',
        },
      ],
    },
    {
      id: 3,
      icon: `${tourIcon}`,
      alt: '투어',
      title: '투어 오피스',
      list: [
        { id: 1, listTitle: '장소: 예스 투어, 뉴 엑스포 투어(로비에 위치)' },
        {
          id: 2,
          listTitle: '운영 시간: 10:00~18:00',
        },
        {
          id: 3,
          listTitle: '서비스 내용: 선택 관광 상담 및 예약',
        },
      ],
    },
    {
      id: 4,
      icon: `${wifiIcon}`,
      alt: '인터넷',
      title: '인터넷 서비스',
      list: [
        {
          id: 1,
          listTitle: '무선 인터넷 이용 가능 구역: PIC 전 객실 및 수영장',
        },
      ],
    },
    {
      id: 5,
      icon: `${congratsIcon}`,
      alt: '축하',
      title: '기념일 축하 서비스',
      list: [
        {
          id: 1,
          listTitle:
            '생일/기념일(무료 서비스): 호텔 내 레스토랑에서 식사 시 PIC 직원의 축하와 함께 무료 케이크 제공(컨시어지 데스크에 24시간 전 신청 필수)',
        },
        {
          id: 2,
          listTitle:
            '기타 기념일(유료 서비스): 과일 바구니, 샴페인, 케이크 주문 가능(컨시어지 데스크에 24시간 전 신청 필수)',
        },
      ],
    },
    {
      id: 6,
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
            '사전 보장 서비스: 예약 완료 후 출발 전 예약과 (reservations@picsaipan.com) 혹은 ‘확정 예약 문의 게시판’을 통해 가능 여부를 별도로 문의, 가능한 경우 전체 일정 중 $50의 추가 비용 발생',
        },
      ],
    },
    {
      id: 7,
      icon: `${mealIcon}`,
      alt: '룸서비스',
      title: '룸서비스',
      list: [
        { id: 1, listTitle: '운영 시간: 11:00~17:00' },
        { id: 2, listTitle: '카페 갤리 음식 주문 시 객실로 배달 (내선 5134)' },
        { id: 3, listTitle: '골드/실버 카드 사용 불가 및 봉사료 10% 별도' },
      ],
    },
    {
      id: 8,
      icon: `${bathchairIcon}`,
      alt: '휠체어',
      title: '휠체어',
      list: [
        {
          id: 1,
          listTitle: '게스트 서비스 데스크에 요청 시 무료 대여 (1대 보유)',
        },
        {
          id: 2,
          listTitle: '호텔 내에서만 이용 가능',
        },
      ],
    },
    {
      id: 9,
      icon: `${strollerIcon}`,
      alt: '유모차',
      title: '유모차',
      list: [
        {
          id: 1,
          listTitle: '프런트 데스크에 요청 시 유료 제공',
        },
      ],
    },
    {
      id: 10,
      icon: `${coinwashingIcon}`,
      alt: '동전세탁기',
      title: '코인 세탁실',
      list: [
        { id: 1, listTitle: '로비층에 위치, 24시간 운영' },
        {
          id: 2,
          listTitle:
            '유료로 이용 가능하며, 세탁 세제는 프런트 데스크에서 별도 구매 가능',
        },
      ],
    },
    {
      id: 11,
      icon: `${waterIcon}`,
      alt: '식수대',
      title: '식수대',
      list: [{ id: 1, listTitle: '워터파크 곳곳에 설치되어 있음(무료)' }],
    },
    {
      id: 12,
      icon: `${tubeIcon}`,
      alt: '튜브 에어펌프',
      title: '튜브 에어펌프',
      list: [{ id: 1, listTitle: 'SEA 사무실 앞에 위치(무료)' }],
    },
    {
      id: 13,
      icon: `${showerIcon}`,
      alt: '락커룸 및 샤워시설',
      title: '락커룸 및 샤워시설',
      list: [
        { id: 1, listTitle: '운영 시간: 24시간' },
        { id: 2, listTitle: '위치: 1층 및 리버파크 내' },
        { id: 3, listTitle: '요금: 투숙객 무료, 외부 투숙객 $2 (보증금 $10)' },
      ],
    },
    {
      id: 14,
      icon: `${iceIcon}`,
      alt: '제빙기',
      title: '제빙기',
      list: [{ id: 1, listTitle: '로타윙 복도 끝 위치 (무료)' }],
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
      <SubNav subNavData={subNavData} />
      <SmoothScroll>
        <StyledGuam className="changeBg">
          <StyledGuamInner>
            <DetailPageTitle>
              DIF의 모든 순간, <br />
              잊지 못할 특별한 행복의 순간이 됩니다
            </DetailPageTitle>
            <AboutList aboutData={aboutData} />
          </StyledGuamInner>
          <BuildingLayout>
            <img
              src={require('assets/images/map-saipan.png')}
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
                {saipanTableData01.map((tableItem) => {
                  return (
                    <tr key={tableItem.id}>
                      <th>{tableItem.title}</th>
                      <td>{tableItem.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </OutlineTable>
            <TableTitle>티니안윙</TableTitle>
            <OutlineTable detail>
              <tbody>
                {saipanTableData02.map((tableItem) => {
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
            <TableTitle>로타윙</TableTitle>
            <OutlineTable detail>
              <tbody>
                {saipanTableData03.map((tableItem) => {
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
            <TableTitle>타시윙</TableTitle>
            <OutlineTable detail>
              <tbody>
                {saipanTableData04.map((tableItem) => {
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
          <Footer />
        </StyledGuam>
      </SmoothScroll>
    </>
  );
};

const StyledGuam = styled.div`
  overflow: hidden;
  margin: 0 auto;
  padding-top: 21.25rem;
`;
const StyledGuamInner = styled.section`
  max-width: 73.75rem;
  margin: 0 auto;
`;
const StyledServiceContainer = styled.section`
  width: 100%;
  margin-top: 10rem;
  padding: 10rem 0 10rem 0;
  background-color: rgba(0, 0, 0, 0.05);
`;
