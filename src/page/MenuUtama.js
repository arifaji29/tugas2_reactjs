import React, {Component} from 'react';
import ListMenuUtama from '../list data/ListMenuUtama';

class MenuUtama extends Component{
    render(){
      return(
        <div>
       <ListMenuUtama gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/>
        </div>
       
      );
    }
  }
  
  export default MenuUtama;