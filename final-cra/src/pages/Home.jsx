import FilmList from "components/filmList/FilmList";
import Footer from 'components/footer/Footer';
import Siheky from "components/siheky/Siheky";
import SmoothScroll from "components/smoothScroll/SmoothScroll";

export const Home = () => {
  return (
    <SmoothScroll>
      <Siheky />
      <FilmList />
      <Footer />
    </SmoothScroll>
  )
}
