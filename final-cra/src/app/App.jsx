import { Routes, Route } from 'react-router-dom';
import { Home, LogIn, SignUp, About } from 'pages';
import GlobalStyle from 'components/GlobalStyle';
import { Reservation1 } from './../pages/Reservation1';
import { Reservation2 } from './../pages/Reservation2';
import { Reservation3 } from './../pages/Reservation3';
import { Reservation4 } from './../pages/Reservation4';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation1" element={<Reservation1 />} />
        <Route path="/reservation2" element={<Reservation2 />} />
        <Route path="/reservation3" element={<Reservation3 />} />
        <Route path="/reservation4" element={<Reservation4 />} />
      </Routes>
    </>
  );
};

export default App;
