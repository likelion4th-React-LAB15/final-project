import Header from 'components/Header/Header';
import SubHeader from 'components/Header/SubHeader';
import Visual from 'components/Visual/Visual';
import SectionOne from 'components/MainSection/SectionOne';
import FilmList from 'components/FilmList/FilmList';
import Siheky from 'components/Siheky/Siheky';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import Footer from 'components/Footer/Footer';
import TopBtn from 'components/TopBtn';

export const Home = () => {
  return (
    <>
      <TopBtn onClick={() => {}} />
      <SmoothScroll>
        <Header type={'active'} />
        <SubHeader />
        <Visual />
        <SectionOne />
        <Siheky />
        <FilmList />
      </SmoothScroll>
    </>
  );
};
