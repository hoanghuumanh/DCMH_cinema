import React from 'react';
import './Nhap.css'

import Thongtinchitiet from './Thongtinchitiet.js'
import Select_rap from './Select_rap.js'
import Banggia from './Banggia.js'
import Banggia2 from './Banggia2.js'
import Com_phim from './Com_phim.js'
import SlideShow from './SlideShow.js'
import Footer from '../Footer/Footer.js';
class Nhap extends React.Component{
    constructor(props){
      super(props)
      this.state = {isToggleOn: true};
    }
    handleClick=()=>{
        document.getElementById("btn").src="./img/banggia.jpg"
        document.getElementById("2d").style.backgroundColor="#F26B38";
      document.getElementById("3d").style.backgroundColor="#FFFFFF";
      document.getElementById("2d").style.backgroundRepeat = "no-repeat";
    }
    handleClick2=()=>{
      document.getElementById("btn").src="./img/3d.jpg";
      document.getElementById("3d").style.backgroundColor="#F26B38";
      document.getElementById("2d").style.backgroundColor="#FFFFFF";
      document.getElementById("3d").style.backgroundRepeat = "no-repeat";

  }
    render(){
      return(
        <div className ="rap">
            <div classname="top">
                <SlideShow/>
            </div>
            <div className="content_1">
               <div className="content_left">
                 <h3>Phim Đang Chiếu</h3>
                <div className="hanhdong_rap">
                <input  id ="de_left_cho vui"type="date" name="bday"></input> 
                
                
                </div> 
                <div className="hanhdong_rap_2"> <Select_rap/></div>
                <div className="clear-float"> </div>
                 <Com_phim/>
               </div> 
               <div className ="content_right">
                 <h3>Gia ve</h3>
                 <input style={{ backgroundColor: '#F26B38' }}
                 className="button_2d" type="button"  onClick={this.handleClick} value ="2d" id="2d" name="2d"/>
                 <input style={{ backgroundColor: '#FFFFFF' }} className="button_3d"type="button" onClick={this.handleClick2} value ="3d" id ="3d" name="3d"/>
                 {/* <div id="btn">
                 <Banggia/>
                 </div> */}
                 <img src="./img/banggia.jpg" style={{marginTop:'2%', border:'1px solid red' }} id="btn" alt=""/>
                 <div>
                 <h3>THÔNG TIN CHI TIẾT</h3>
                 <Thongtinchitiet/>
               </div>
               </div>
               
              
            </div>
            <Footer/>
        </div>
      );
    };
  }

export default  Nhap;