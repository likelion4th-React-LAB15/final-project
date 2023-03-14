<<<<<<< HEAD
import FilmList from "components/FilmList/FilmList";
import GlobalStyle from "components/GlobalStyls";
import Footer from 'components/Footer/Footer';
import Siheky from "components/Siheky/Siheky";

function App() {
  return <>
    <FilmList />
    <Footer />
  </>
=======
import { Routes, Route } from 'react-router-dom';
import { Home, LogIn, SignUp } from 'pages';
import GlobalStyle from 'components/GlobalStyle';

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes> 
    </>
  )
>>>>>>> 8f359f840b3eb2bcc215dd54ce93244196417fff
}

export default App;