import { Routes, Route } from 'react-router-dom';
import { Home, LogIn, SignUp, About } from 'pages';
import GlobalStyle from 'components/GlobalStyle';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';


const App = () => {

  return (
    <>
      <GlobalStyle />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </SmoothScroll>
    </>
  )

}

export default App;