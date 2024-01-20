"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Google-meet-clone",
    description: <p>
Implemented real-time video and audio communication using WebRTC technology.
 Introduced features like allowing participants to easily turn their audio or camera
on/off during meetings.
 Introduced user-friendly controls for toggling audio and camera functionalities,
providing users with greater control over their meeting experience.
    </p>,
    image: "/images/google-meet-clone.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Akashkryadav/google-meet-clone",
    previewUrl: "https://google-meet-clone-eight.vercel.app/",
    
  },
  {
    id: 2,
    title: "PasswordGenerator website",
    description: <p>
     Developed a password generator application using a tech stack that includes HTML, 
    CSS, JavaScript, and React.js.
    Implemented key features to enhance user experience and password customization, 
    including the ability to copy generated passwords, adjust password length, and include 
    special symbols.
    </p>,
    image: "/images/passwardGenerator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akashkryadav/passwordGenerator",
    previewUrl: "https://password-generator-two-orpin.vercel.app/",
  },
  
  
  {
    id: 3,
    title: "Sorting Visualizers",
    description: <p>The Sorting Algorithms Visualizer is an educational tool that provides a dynamic visualization of sorting algorithms such as Merge Sort, Quick Sort, Insertion Sort, and Bubble Sort. Witness the step-by-step sorting process, facilitating a better understanding of each algorithm's efficiency and behavior.</p>,
    image: "/images/Sorting-20be1586.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Akashkryadav/SORTING-VISUALIZER",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Netflix-clone",
    description: <p>
 Created a clone of the Netflix home page using HTML, CSS, and 
JavaScript.
 Utilized Bootstrap framework with flexbox and grid system classes to 
ensure compatibility with various screen resolutions.
 Demonstrated strong front-end skills to replicate the original design of 
Netflix's home page.
    </p>,
    image: "/images/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akashkryadav/Netflix-Clone",
    previewUrl: "https://akashkryadav.github.io/Netflix-Clone/",
  },
  {
    id: 5,
    title: "Nike Landing page",
    description: <p>
       Experience the epitome of style and innovation with our Nike Landing Page – a sleek, responsive design featuring interactive elements, product showcases, and effortless navigation for a seamless and secure shopping experience
    </p>,
    image: "/images/nike.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akashkryadav/Nike",
    previewUrl: "https://nike-wine-gamma.vercel.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;