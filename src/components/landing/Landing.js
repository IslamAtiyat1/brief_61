import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import EmployeePage from './EmployeePage';
import YouTubeVideos from './Youtube';
import { Fragment } from 'react';
import PopularClasses from './contract';

function Landing() {
  return (
   
      <Fragment>
        <Navbar/>
        <Header/>
        {/* {/* <EmployeePage/> */}
        <EmployeePage/>
<PopularClasses/>
        <YouTubeVideos/>
        <Footer />
      </Fragment>
  );
}

export default Landing;
