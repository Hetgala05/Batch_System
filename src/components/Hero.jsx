import React from 'react';
import './Hero.css';

import vector from "../assets/Vector.png";
import play from "../assets/play.png";
import iphone from "../assets/iPhone-13-Pro-Front.png";
import iPhone_2 from "../assets/iPhone_2.png";
import iPhone_3 from "../assets/iPhone_3.png";
import iPhone_str from "../assets/iPhone_straight.png";
import iPhone_str_2 from "../assets/iPhone_str_2.png";
import iPhone_str_3 from "../assets/iPhone_str_3.png";
import banner from "../assets/banner.png";
import cred_card from "../assets/cred_card.png";
import ellipse from "../assets/Ellipse.png";
import star from "../assets/Star.png";
import circle from "../assets/cube.png";
import cube from "../assets/circle.png";
import pntStar from "../assets/pnt_star.png";
import orange_point from "../assets/orange_point.png";
import bell from "../assets/bell.png";
import face_1 from "../assets/face_1.png"
import face_2 from "../assets/face_2.png"
import face_3 from "../assets/face_3.png"
import face_4 from "../assets/face_4.png"
import face_main from "../assets/face_main.png"
import colon from "../assets/colon.png"
import pic_1 from "../assets/pic_1.png"
import pic_2 from "../assets/pic_2.png"
import pic_3 from "../assets/pic_3.png"
import pic_4 from "../assets/pic_4.png"
import pic_5 from "../assets/pic_5.png"

const Hero = () => {
    return(
        <div >
            <div className = "hero">
                <h1 className="headline">
                    Make The Best Financial Decisions
                </h1>
                <p className="text">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>

                <div className="button">
                    <button className="start">Get Started <img className="start_img"src={vector}></img></button>
                    <button className ="play">Watch Video <img className="play_img"src={play}></img></button>
                </div>
            </div>

            <div className="iphones">
                    <img className="ol" src={ellipse}></img>
                    <img className="ol_1" src={ellipse}></img>
                    <img className="ol_2" src={ellipse}></img>
                    <img className="iphone_3" src={iPhone_3}></img>
                    <img className="iphone_2" src={iPhone_2}></img>
                    <img className="iphone_1" src={iphone}></img>
                    <img className="hidden md:inline-block ml-[50rem] mt-[-10rem] transform rotate-45 h-14" src={star} alt="star" />
            </div>
            <img className="hidden md:inline-block ml-[18rem] mt-[-24rem] transform rotate-45 h-10" src={star} alt="star" />
            <img className="hidden md:inline-block ml-[-18rem] mt-[-4rem] transform rotate-45 h-10" src={star} alt="star" />
            <div className="circles">
                <img className="overl" src={ellipse}></img>
                <img className="overl_1" src={ellipse}></img>
                <img className="overl_2" src={ellipse}></img>
                
                <img className="straight" src={iPhone_str}></img>
            </div>
            <div className="information">
                <h3 className="uppercase text-orange-600 font-mono text-[1.2rem]">features</h3>
                <h1 className="font-bold text-5xl">Uifry Premium</h1>
                <div className="points">
                    <img src={pntStar}></img>
                    <p className="text-1xl font-bold ml-2"> 
                        Budgeting Intervals 
                    </p> 
                </div>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor</p>
                <div className="points">
                    <img src={circle}></img>
                    <p className="text-1xl font-bold ml-2"> 
                        Budgeting Intervals 
                    </p> 
                </div>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor</p>
                <div className="points">
                    <img src={cube}></img>
                    <p className="text-1xl font-bold ml-2"> 
                        Budgeting Intervals 
                    </p> 
                </div>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor</p>
            </div>

            <div className="advantages">
                <h3 className="uppercase text-orange-600 font-mono text-[1.2rem]">Advantages</h3>
                <h1 className="font-bold text-5xl">Why Choose Uifry?</h1>
                <div className="points">
                    <img src={bell} className="h-10"></img>
                    <p className="text-2xl font-semibold ml-2"> 
                        Clever Notifications
                    </p> 
                </div>
                <p className="w-[535px] font-thin">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                <div className="circles_r">
                    <img className="overl" src={ellipse}></img>
                    <img className="overl_1" src={ellipse}></img>
                    <img className="overl_2" src={ellipse}></img>

                    <img className="straight" src={iPhone_str_2}></img>
                    <img className="banner" src={banner}></img>
                </div>
            </div>

            <img className="hidden md:inline-block ml-[30rem] my-[9rem] transform rotate-45 h-10" src={star} alt="star" />

           
            <div className="circles">
                <img className="overl" src={ellipse}></img>
                <img className="overl_1" src={ellipse}></img>
                <img className="overl_2" src={ellipse}></img>
                <img className="straight" src={iPhone_str_3}></img>
                <img className="cred_card" src={cred_card}></img>
            </div>
            <div className="custom">
                <div className="points">
                    <img src={orange_point}></img>
                    <h3 className="font-bold text-3xl ml-2 mt-1">Fully Customizable</h3>
                </div>
                <p className="w-[26rem] font-thin">
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis     tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac  dolor neque lorem sapien, suspendisse aliquam.
                </p>
                
            </div>

            <img className="hidden md:inline-block ml-[70rem] mt-[10rem] mb-[-10rem] h-12" src={star} alt="star" />

            <div className="testimonial">
                <div className="test">
                    <h3 className="uppercase font-mono text-[1.2rem] ">Testimonial</h3>
                    <h1 className="font-extrabold font-sans text-5xl">What Our Users Say About Us?</h1>
                </div>

                <div className="circles_x">
                    <img className="overl" src={ellipse}></img>
                    <img className="overl_1" src={ellipse}></img>
                    <img className="overl_2" src={ellipse}></img>
                </div>
              
                <img className="ml-[14rem] mt-[-34rem]" src={face_1} alt='face_1'/>
                <img className="ml-[32rem] mt-[-19rem]" src={face_2} alt='face_2'/>
                <div class="relative">
  <                 img class="ml-[22rem] mt-[-13rem] h-[26rem]" src={face_main} alt='center_face'/>
                    <img className="absolute top-[8rem] left-[35rem] rounded-full bg-[#FF5555] p-4" src={colon} alt='colon'/>
                </div>
                <img className="ml-[12rem] mt-[-16rem]" src={face_3} alt='face_3'/>
                <img className="ml-[32.7rem] mt-[-17.6rem]"  src={face_4} alt='face_4'/>

                <div className="test_txt">
                    <h1>The Best Financial Accounting App Ever!</h1>
                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                    <div className="pics">
                        <img src={pic_1}/>
                        <img className="dull" src={pic_2}/>
                        <img className="dull" src={pic_3}/>
                        <img className="dull" src={pic_4}/>
                        <img className="dull" src={pic_5}/>
                    </div>
                    <h3>
                        Nick Jonas
                    </h3>
                </div>

            </div>
            <img className="hidden md:inline-block ml-[50rem] mb-[-7rem] mt-[22rem] h-12" src={star} alt="star" />
            
            <div className="FAQ">
                <div className="tag">
                    <h3 className="uppercase text-orange-600 font-mono text-[1.2rem] ">FAQ</h3>
                    <h1 className="font-extrabold font-sans text-5xl">Frequently Asked Questions</h1>
                </div>
                <img className="hidden md:inline-block ml-[35rem] mt-[-4rem] h-12" src={star} alt="star" />
                <div className="left">
                
                    <div className="orange">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>

                    <div className="white">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                        
                    <div className="orange">
                    <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>

                </div>
                <div className="right">
                    
                    <div className="white">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                               
                    <div className="orange">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    
                    <div className="white">
                        <h2>The Best Financial Accounting App Ever!</h2>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                        
                </div>
            </div>

        </div>

    )

}

export default Hero;