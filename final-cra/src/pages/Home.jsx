import Loading from 'components/Loading';
import { lazy, Suspense } from 'react';

const Header = lazy(() => import('components/Header/Header'));
const SubHeader = lazy(() => import('components/Header/SubHeader'));
const Visual = lazy(() => import('components/Visual/Visual'));
const SectionOne = lazy(() => import('components/MainSection/SectionOne'));
const FilmList = lazy(() => import('components/FilmList/FilmList'));
const Siheky = lazy(() => import('components/Siheky/Siheky'));
const SmoothScroll = lazy(() => import('components/smoothScroll/SmoothScroll'));
const Footer = lazy(() => import('components/Footer/Footer'));
const TopBtn = lazy(() => import('components/TopBtn'));

export const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <TopBtn />
      <SmoothScroll>
        <Header type={'active'} />
        <SubHeader />
        <Visual />
        <SectionOne />
        <Siheky />
        <FilmList />
        <Footer />
      </SmoothScroll>
    </Suspense>
  );
};
