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
  );
};

export default App;
