import React,{useState} from "react";
import logo from '../assets/logo.png';
import tm from '../assets/TM.png';
import star from '../assets/Star.png';
import "./Navbar.css"


const Navbar = () => {

    const[nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    

    return(
        <div>
            <div className="Nav">

                <img className ="logo" src={logo} alt="logo" />
                <h1 className="Name">uifry</h1>
                <img className ="ml-[-10rem]" src={tm} alt="tm" />

                <ul className="hidden md:flex">
                    <a href="#"><li className="Nav_li text-orange-600">Home</li></a>
                    <a href="#"><li className="Nav_li">Company</li></a>
                    <a href="#"><li className="Nav_li">Resources</li></a>
                    <a href="#"><li className="Nav_li">About</li></a>
                    <a href="#"><li className="Nav_li">Contact</li></a>
                </ul>
                <button className="download">Download</button>
                <img className ="hidden md:inline-block ml-[-5rem] mt-[3rem]" src={star} alt="star" />
            </div>

            
            <img className="hidden md:inline-block ml-[3rem] mt-[1rem] transform rotate-45 h-14" src={star} alt="star" />

            <div className = "Nav">
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <i class="ml-[32rem] fa fa-times text-2xl"></i> : <i class="ml-[32rem] fa fa-bars text-2xl"></i>}
                </div>
                <div className={!nav ? "Nav_resp" : "fixed left-[-100%]"}>
                    <h1 className="uppercase font-bold text-3xl text-white mb-4">uifry</h1>
                    <ul>
                        <li className="resp_li text-orange-600">Home</li>
                        <li className="resp_li">Company</li>
                        <li className="resp_li">Resources</li>
                        <li className="resp_li">About</li>
                        <li className="resp_li">Contact</li>
                    </ul>
                </div>

            </div>
        </div>
    )

}

export default Navbar;