import React, { Component } from "react";
import {Route,Routers,Routes} from "react-router-dom";
// import Home from './Home'
import List from './List'
class Main extends Component {
  render() {
    return(
      <main>
    <Routes>
          {/* <Route element={<Home/>} path={"/"}/> */}
          <Route element={<List/>} path={"/List"}/>
     </Routes>
      </main>
    )
  }
}

export default Main;
