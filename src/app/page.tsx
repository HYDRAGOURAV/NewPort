"use client";
// import Navbar from "./components/Navbar";

import '../../public/css/Navbar.css';
import logo from "../../public/image/logo.png";
import Image from "next/image";
import developer from "../../public/image/developer.png";
import strange from "../../public/image/1688122016496-removebg-preview.png";
import AOS from 'aos';import Link from 'next/link';
import 'aos/dist/aos.css';
// card image
import card1 from "../../public/image/quick.png";
import card2 from "../../public/image/responsive-design.png";
import card3 from "../../public/image/atom.png";
import card4 from "../../public/image/lightbulb.png";
import developer_2 from "../../public/image/Developer_new.png";
import bgDev from "../../public/image/Screenshot_2024-06-15_162150-removebg-preview.png";
import React, { useState, useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Footer from "./components/Footer";
import Name_art from "../../public/image/Screenshot 2024-06-19 161756.png";
// import skill image
import HTML from "../../public/image/html-5.png";
import CSS from "../../public/image/css-3.png";
import Js from "../../public/image/js.png";
import py from "../../public/image/python.png";
import C from "../../public/image/c-.png";
import React_pic from "../../public/image/science.png";
import Github from "../../public/image/github.png";
import ChatGpt from "../../public/image/artificial-intelligence.png";
import git from "../../public/image/social.png";
import front from "../../public/image/front.png";
import back from "../../public/image/back.png";
import freamwork from "../../public/image/freamwork.png";
import AI from "../../public/image/images__2_-removebg-preview (1).png";
import Next from "../../public/image/images__3_-removebg-preview (3).png";
import Next_one from "../../public/image/Next.jpeg";
import django from "../../public/image/images (4).png";
// contact
import linkdin from "../../public/image/linkedin.png";
import gmail from "../../public/image/new.png";
import sky from "../../public/image/skype.png";
import TextUtils  from "../../public/image/images (3).png";
import Blood  from "../../public/image/Blood.jpeg";
import pepsi  from "../../public/image/Pepsi.jpeg";

export default function Home() {
  const [useTypeeffect] = useTypewriter({
    words: ["Developer..|", "Designer..|","& Learner..|"],
    loop: 1000,
    typeSpeed: 100,
    deleteSpeed: 40,
  });  
 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  AOS.init();
  return (
    <>
  
   <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/"> <Image src={logo} alt="Picture of the author" /></Link>
        </div>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link href="#Card_section">Project</Link>
          </li>
          <li className="nav-item">
            <Link href="#contact_section">Contact</Link>
          </li>
          <li className="nav-item">
            <Link href="#about_section">About</Link>
          </li>
         
        </ul>
      </div>
    </nav>
    <div>
      <br />
      <h1></h1>
       
    </div>
      <section className="First_Page">
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="container_1">
          <div className="first_box" id="first_box">
            <div className="Heading">
              <h1>Hello 👋</h1>
              <h1>
                i am Gourav <br />
                <span>{useTypeeffect}</span>
              </h1>
            </div>
          </div>
          <div className="first_box" id="first_box">
            <div className="blob">
              <Image src={developer} alt="Picture of the author" />
            </div>
          </div>
        </div>
      </section>
      {/* developer strange  */}
      <section className="Second_Page">
        <div className="container_2">
          <div  data-aos="zoom-in-up" className="developer_strange">
            <Image src={strange} alt="none" />
          </div>
          <div className="vertical_first"></div>
          <div className="horizontal_first"></div>
          <div className="vertical_box">
            <div className="vertical_second"></div>
            <div className="vertical_second"></div>
            <div className="vertical_second"></div>
            <div className="vertical_second"></div>
          </div>
          <div className="horizontal_round">
            <div  data-aos="zoom-in"  className="horizontal_round_box">
              {" "}
              <Image src={front} alt="Picture of the author" />
            </div>
            <div  data-aos="zoom-in" className="horizontal_round_box">
              {" "}
              <Image src={back} alt="Picture of the author" />
            </div>
            <div  data-aos="zoom-in" className="horizontal_round_box">
              <Image src={freamwork} alt="Picture of the author" />
            </div>
            <div  data-aos="zoom-in" className="horizontal_round_box">
              <Image src={AI} alt="Picture of the author" />
            </div>
          </div>
          <div className="horizontal_round_1">
            <div className="vertical_second_1"></div>
            <div className="vertical_second_1"></div>
            <div className="vertical_second_1"></div>
            <div className="vertical_second_1"></div>
          </div>

          <div className="horizontal_round_2">
            <div className="vertical_second_2">
              <div className="vertical_33"></div>
              <div className="vertical_33"></div>
              <div className="vertical_33"></div>
            </div>
            <div className="vertical_second_2">
              {" "}
              <div className="vertical_33"></div>
              <div className="vertical_33"></div>
              <div className="vertical_33"></div>
            </div>
            <div className="vertical_second_2">
              {" "}
              <div className="vertical_33"></div>
              <div className="vertical_33"></div>
              <div className="vertical_33"></div>
            </div>
            <div className="vertical_second_2">
              {" "}
              <div className="vertical_33"></div>
              <div className="vertical_33"></div>
              <div className="vertical_33"></div>
            </div>
          </div>

          {/* The Image insert  */}
          <div className="horizontal_round_3">
            <div className="vertical_second_3">
              <div className="image_circle">
                {" "}
                <Image src={HTML} alt="Picture of the author" />
              </div>
              <div className="image_circle">
                <Image src={CSS} alt="Picture of the author" />
              </div>
              <div className="image_circle">
                <Image src={Js} alt="Picture of the author" />
              </div>
            </div>
            <div className="vertical_second_3">
              {" "}
              <div className="image_circle">
                <Image src={Js} alt="Picture of the author" />
              </div>
              <div className="image_circle">
                <Image src={py} alt="Picture of the author" />
              </div>
              <div className="image_circle">
                <Image src={C} alt="Picture of the author" />
              </div>
            </div>
            <div className="vertical_second_3">
              {" "}
              <div className="image_circle">
                <Image src={React_pic} alt="Picture of the author" />
              </div>
              <div className="image_circle">
                <Image src={Next_one} alt="Picture of the author" />
              </div>
              <div className="image_circle">
                <Image src={django} alt="Picture of the author" />
              </div>
            </div>
            <div className="vertical_second_3">
              {" "}
              <div className="image_circle">
                <Image src={Github} alt="Picture of the author" />
              </div>
              <div className="image_circle">
                <Image src={ChatGpt} alt="Picture of the author" />
              </div>
              <div className="image_circle">
                <Image src={git} alt="Picture of the author" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* third section */}

      <section className="third_section">
        <div className="container_third">
          <div className="box_third" id="box_1">
            <div data-aos="flip-left" className="inside_box">
              <Image src={card1} alt="none" />
              <h1>Fast</h1>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </div>
          </div>
          <div className="box_third" id="box_2">
            {" "}
            <div data-aos="flip-right" className="inside_box">
              <Image src={card2} alt="none" />
              <h1>Responsive</h1>
              <p>My layouts will work on any device, big or small.</p>
            </div>
          </div>
          <div className="box_third" id="box_3">
            {" "}
            <div className="inside_box" data-aos="flip-up">
              <Image src={card4} alt="none" />
              <h1>Intuitive</h1>
              <p>
                Creating seamless and user-friendly software solutions that
                simplify complex tasks
              </p>
            </div>
          </div>
          <div className="box_third" id="box_4">
            {" "}
            <div className="inside_box" data-aos="flip-down">
              <Image src={card3} alt="none" />
              <h1>Dynamic</h1>
              <p>
                Websites don't have to be static. I love making pages come to
                life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about_section" id='about_section'>
        <h1 className="About_heading">About Me </h1>
        <div className="container_fourth">
          <div className="about_box" id="about_box1">
            <p>hi 👋</p>
            <h1>i am Gourav</h1>
            <p>
              A web designer and developer from Bharat <span></span>. I create
              bespoke websites to help people go further online. I am a
              passionate and dedicated software developer, recently graduated
              with a degree in Computer Science I bring strong foundational
              skills in programming, problem-solving, and software design. My
              enthusiasm for technology and continuous learning drives me to
              stay updated with the latest industry trends and best practices.
            </p>
           
          </div>

          <div className="about_box" id="about_box122">
            <Image src={bgDev} alt="none" />
          </div>
        </div>
      </section>
      <section className="Five_section" id='contact_section'>
        <h1 className="five_heading"></h1>
        <div className="container_fourth" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="about_box" id="about_box12">
            {" "}
            <Image src={Name_art} alt="none" />
          </div>
          <div className="about_box" id="about_box2">
            <h1 className="contact_heading">Contact</h1>
            <div className="contact">
              <div className="contact_box">
                <a target="_blank" href="https://github.com/HYDRAGOURAV">
                  {" "}
                  <Image src={Github} alt="Picture of the author" />
                </a>
              </div>
              <div className="contact_box">
                <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox/">
                <Image src={gmail} alt="Picture of the author" /></a>
              </div>
              <div className="contact_box">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gourav-pavankar-4b145a29a/"
                >
                <Image src={linkdin} alt="Picture of the author" /></a>
              </div>
              <div className="contact_box">
                <a target="_blank" href="">
                <Image src={sky} alt="Picture of the author" /> </a>
              </div>
              <div className="contact_box">
                <a target="_blank" href=""></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Card_section" id="Card_section">
        <div className="card_container">
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card_box" id="card_box1">
            <div>
              <Image src={Blood} alt="none" />
              <h1>Blood Donation</h1>
              <p>"Donate blood, save lives – become a hero today!"</p>
              <br />
              <a href="https://github.com/HYDRAGOURAV"><button className="button_3" role="button">
              &rarr;
            </button></a>
            </div>
          </div>
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card_box" id="card_box2">
            {" "}
            <div>
              <Image src={TextUtils} alt="none" />
              <h1>TextUtils</h1>
              <p>
              TextUtils is a ReactJs website built primarily to do various operations on regular typed text. 
              </p>
              <a href="https://github.com/HYDRAGOURAV"><button className="button_3" role="button">
              &rarr;
            </button></a>
            </div>
          </div>
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card_box" id="card_box3">
            {" "}
            <div>
              <Image src={pepsi} alt="none" />
              <h1>Pepsi Website</h1>
              <p>
              The  website, developed using Next.js, oﬀers a dynamic and engaging user experience with  navigation and fast load times.
              </p>
             <a href="https://main.d312eayrzyq0va.amplifyapp.com/" target="_blank">  <button className="button_3" role="button">
              &rarr;
            </button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
}
