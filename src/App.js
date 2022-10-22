import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Nav from './Component/Nav/Nav';
import Aboutus from './Page/Aboutus/Aboutus';
import Allproduct from './Page/Allproduct/Allproduct';
import Blogdetails from './Page/Blogdetails/Blogdetails';
import Blogs from './Page/Blogs/Blogs';
import Faq from './Page/Faq/Faq';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Postads from './Page/Postads/Postads';
import Productdetails from './Page/Productdetails/Productdetails';
import Profile1 from './Page/Profile1/Profile1';
import Signup from './Page/Signup/Signup';
import Terms from './Page/Terms/Terms';
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
          <Route path='/Terms' element={<Terms></Terms>}></Route>
          <Route path='/Allproduct' element={<Allproduct></Allproduct>}></Route>
          <Route path='/Productdetails' element={<Productdetails></Productdetails>}></Route>
          <Route path='/Profile1' element={<Profile1></Profile1>}></Route>
          <Route path='/Blogs' element={<Blogs></Blogs>} ></Route>
          <Route path='/blogdetails' element={<Blogdetails></Blogdetails>}></Route>
        </Routes>
      </Wrapper >
      <Footer></Footer>
    </>
  );
}

export default App;
