import Header from 'components/Header';
import Visual from 'components/Visual';
import SectionOne from 'components/SectionOne';
import FilmList from "components/filmList/FilmList";
import Footer from 'components/footer/Footer';
import Siheky from "components/siheky/Siheky";
import SmoothScroll from "components/smoothScroll/SmoothScroll";

export const Home = () => {
  return (
    <>
      <SmoothScroll>
        <Header />
        <Visual />
        <SectionOne />
        <Siheky />
        <FilmList />
        <Footer />
      </SmoothScroll>
    </>
  );
};
