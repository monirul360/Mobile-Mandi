import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Nav from './Component/Nav/Nav';
import Aboutus from './Page/Aboutus/Aboutus';
import Faq from './Page/Faq/Faq';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Postads from './Page/Postads/Postads';
import Signup from './Page/Signup/Signup';
import Verify from './Page/Verify/Verify';

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
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/verify' element={<Verify></Verify>}></Route>
          <Route path='/postads' element={<Postads></Postads>}></Route>
          <Route path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
          <Route path='/Faq' element={<Faq></Faq>}></Route>
        </Routes>
      </Wrapper >
      <Footer></Footer>
    </>
  );
}

export default App;
