/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import home from "../assets/illust.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    
    <div className="home">
      <div className="container">
        <div className="content">
          {/* <p className="sub-title">Avyakt 2.0</p> */}
          <h1 className="title">AVYAKT 2.0<Typewriter
            
  onInit={(typewriter)=> {
    
  typewriter
   .start()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .start()
  }}
  /></h1>
          <p className="description">
            Don't miss out on the release of our new Techno-Cultural Fest. Sign up below to
            recieve updates when we go live.
          </p>
          <button><Link to="/login" style={{textDecoration:"none", color: "white"}}>Sign Up</Link></button>
          
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" loading="lazy" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
