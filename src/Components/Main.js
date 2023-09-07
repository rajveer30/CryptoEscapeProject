import React from 'react';
import UserNavbar from './UserNavbar'
import '../Css/Navbar.css'
import Intro from './Intro';
import Corosol from './Corosol';
import Services from './Services';
import Footer from './Footer';
const Main = (props) => {
  return (
    <>
      <UserNavbar checkLogin={props.checkLogin}/>
      <Corosol/>
      <Intro/>
      <Services/>
      <Footer checkLogin={props.checkLogin}/>
    </>
  );
}

export default Main;
