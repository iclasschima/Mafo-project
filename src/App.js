import React from 'react';
import Navbar from './components/Navbar'
import Banner from "./components/Banner"
import HomeLeft from "./components/HomeLeft"
import Prevention from "./components/Prevention"
import HomeRight from "./components/HomeRight"
import CheckStatus from "./components/CheckStatus"
import Error from "./components/Error"
import Footer from "./components/Footer"
import {BrowserRouter, Route, Switch} from "react-router-dom"

export default () => {

  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <div className="container-fluid mt-md-5">
        <div className="row">
          <div className="col-md-9">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomeLeft} exact/>
                    <Route path="/prevention" component={Prevention} exact/>
                    <Route path="/checkstatus" component={CheckStatus} exact />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
          </div>
          <div className="col-md-3" id="homeRight">
            <HomeRight />
          </div>
        </div> 
      </div>
      <Footer />
    </React.Fragment>
  ) 
}