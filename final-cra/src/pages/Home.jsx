import Header from "components/Header";
import Visual from "components/Visual";
import SectionOne from "components/SectionOne";
import FilmList from "components/FilmList/FilmList";
import Footer from "components/Footer/Footer";
import Siheky from "components/Siheky/Siheky";
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
