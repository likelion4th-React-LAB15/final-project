import Header from 'components/Header/Header';
import SubHeader from 'components/Header/SubHeader';
import Visual from 'components/Visual/Visual';
import SectionOne from 'components/MainSection/SectionOne';
import FilmList from 'components/FilmList/FilmList';
import Siheky from 'components/Siheky/Siheky';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import Footer from 'components/Footer/Footer';

export const Home = () => {
  return (
    <>
      <SmoothScroll>
        <Header />
        <SubHeader />
        <Visual />
        <SectionOne />
        <Siheky />
        <FilmList />
        <Footer />
      </SmoothScroll>
    </>
  );
};
