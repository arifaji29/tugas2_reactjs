import React, {Component} from "react";
import Header from "./page/Header";
import Footer from "./page/Footer";

import MenuUtama from "./page/MenuUtama";
import TentangKami from "./page/TentangKami";
import MenuKontak from "./page/MenuKontak";
import MenuMakanan from "./page/MenuMakanan";

class app extends Component{
  render(){
    return(
      <div>
        <Header/>
        <br></br>
        <br></br>
        <MenuUtama/>
        <MenuMakanan/>
        <TentangKami/>
        <MenuKontak/>
        <Footer/>
      </div>
     
    );
  }
}

export default app;