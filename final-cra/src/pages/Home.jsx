import Header from 'components/Header';
import Visual from 'components/Visual';
import SectionOne from 'components/SectionOne';
import SmoothScroll from 'components/smoothscroll/SmoothScroll';

export const Home = () => {
  return (
    <>
      <SmoothScroll>
        <Header />
        <Visual />
        <SectionOne />
      </SmoothScroll>
    </>
  );
};
