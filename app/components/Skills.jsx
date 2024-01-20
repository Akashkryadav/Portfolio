import React from "react";
import Image from "next/image";



const Skills = () => {
  return (
    <section id="skill" className="main-container">
  <div className="main">
    <div className="big-circle">
      <div className="icon-block">
        <img style={{borderRadius:'50%'}} src="images/html.svg" alt="" />
      </div>
      <div className="icon-block">
        <img style={{borderRadius:'50%'}} src="images/css.svg" alt="" />
      </div>
      <div className="icon-block">
        <img src="images/reactjs.svg" alt="" />
      </div>
      <div className="icon-block">
        <img style={{borderRadius:'50%'}} src="images/js.svg" alt="" />
      </div>
    </div>
    <div className="circle">
      <div className="icon-block">
        <img src="images/express.svg" alt="" />
      </div>
      <div className="icon-block">
        <img src="images/nodejs-icon.svg" alt="" />
      </div>
      <div className="icon-block">
        <img src="images/download.svg" alt="" />
      </div>
      <div className="icon-block">
        <img src="images/mongodb.svg" alt="" />
      </div>
      
    </div>
    <div className="center-text bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-cyan-500 text-2xl font-medium italic  font-serif  hover:not-italic  ">
      <h1>SKILLS</h1>
    </div>
  </div>
</section>
  );
};

export default Skills;
