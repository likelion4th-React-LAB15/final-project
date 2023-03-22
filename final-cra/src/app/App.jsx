import { Routes, Route } from 'react-router-dom';
import { Home, LogIn, SignUp, About, Notice } from 'pages';
import GlobalStyle from 'components/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </>
  );
};

export default App;
