import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollBottomToTop from "../animation/ScrollBottomToTop";
import { projects } from "../../Data/data";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleHoverIn = (name) => {
    setSelectedProject(name);
  };
  const handleHoverOut = () => {
    setSelectedProject(null);
  };

  return (
    <ScrollBottomToTop duration={2}>
      <div className="container mx-auto px-4 py-12 md:py-24 mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-4 font-mono">
          My Projects
        </h1>
        <div className="grid gap-4 md:gap-14 grid-cols-1 md:grid-cols-2 justify-center items-center w-full">
          {projects.map((project, index) =>
            selectedProject === project.name ? (
              <motion.div
                key={project.name + "hover"}
                className="bg-gray-800 p-6 rounded-lg shadow-lg h-[300px] md:h-[320px]  mt-10 corner"
                onMouseEnter={() => handleHoverIn(project.name)}
                onMouseLeave={() => setSelectedProject(null)}>
                <h2 className="text-3xl font-bold  text-yellow-400 text-center mb-5">
                  {project.name}
                </h2>
                <p className="text-gray-300 mb-4 md:text-lg text-sm ">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    className="text-yellow-300 hover:text-yellow-600 transition duration-300 ease-in-out text-xl">
                    GitHub {" >"}
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={project.name}
                className="relative bg-slate-600 rounded-lg shadow-lg h-[300px] md:h-[320px]  overflow-hidden  mt-10 border-2 p-2"
                onMouseEnter={() => handleHoverIn(project.name)}
                onMouseLeave={() => setSelectedProject(null)}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                  }}></div>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: [0.8, 1.2, 1] }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, stiffness: 30 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="absolute inset-0 flex justify-center items-center text-yellow-400">
                  <h2 className="text-2xl md:text-6xl font-bold text-center">
                    {project.name}
                  </h2>
                </motion.div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </ScrollBottomToTop>
  );
};

export default Projects;
