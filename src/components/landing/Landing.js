import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar';
import Header from './Header';
import EmployeePage from './EmployeePage';
import TeamSection from './TeamSection';
import { Fragment } from 'react';

function Landing() {
  return (
    <Fragment>
    <Navbar/>
    <Header/>
  <EmployeePage/>
    {/* <TeamSection/> */}
    <Footer/>
    </Fragment>
  )
}

export default Landing;