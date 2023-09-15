"use client"
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";


const HeroSection = () => {
  return (
    <section className=" lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              {" "}
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation sequence={[
              'Akash kumar yadav',
              2000,
              'Web Developer',
              2000,
              'Front-End Developer',
              2000,
              'Full-Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={10}
            style={{ display:'inline-block'}}
            repeat={Infinity}
            />
          </h1>
          <p className="text-[#5d89a9] text-base sm:text-lg mb-6 lg:text-xl ">
            I'm a software engineer with a passion for building beautiful and
            intuitive web applications. I love to learn new technologies and I'm
            always looking for new opportunities.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white text-black bg-gradient-to-br from-blue-600 to-pink-600 "
            onClick={()=>{
              window.location= 'mailto:akashkumar0678@gmail.com' 
              
            }}
            >
              contact me
            </button>
            <Link href="download/resume.pdf">
            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3" >
        
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Download CV{""}
              </span>
            </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5">
          <img
            src="/Untitled design (1).gif"
            alt="avatar"
            width={200}
            height={200}
            className=" rounded-full w-50"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
