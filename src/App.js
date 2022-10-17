import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Nav from './Component/Nav/Nav';

function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <>
      <Nav></Nav>
      <Wrapper>
        <Routes>
          <Route path='/'></Route>
        </Routes>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}

export default App;
