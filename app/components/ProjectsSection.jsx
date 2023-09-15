"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nike Landing page",
    description: <p>
        It is the Landing page  
    </p>,
    image: "/images/nike.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Akashkryadav/Nike",
    previewUrl: "https://nike-wine-gamma.vercel.app/",
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
  
//   {
//     id: 3,
//     title: "Food Ordering Application",
//     description: <p>
// Developed a responsive e-commerce website using HTML, CSS, JavaScript, React.js, 
// MongoDB, and Node.js
// Implemented essential features like User Registration, Product Catalog, Shopping Cart, 
// and Payment-Gateway to provide a seamless user experience.
// Demonstrated proficiency in using modern web technologies to build user-friendly 
// interfaces.
//     </p>,
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
  {
    id: 4,
    title: "Sorting Visualizers",
    description: <p>The Sorting Algorithms Visualizer is an educational tool that provides a dynamic visualization of sorting algorithms such as Merge Sort, Quick Sort, Insertion Sort, and Bubble Sort. Witness the step-by-step sorting process, facilitating a better understanding of each algorithm's efficiency and behavior.</p>,
    image: "/images/Sorting-20be1586.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Akashkryadav/SORTING-VISUALIZER",
    previewUrl: "/",
  }
  
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