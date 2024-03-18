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
    <ScrollBottomToTop>
      <div className="container mx-auto px-4 py-12 md:py-24 mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-4 font-mono">
          My Projects
        </h1>
        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) =>
            selectedProject === project.name ? (
              <motion.div
                key={index * 2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg h-[200px]  md:h-[250px] mt-10 md:mt-20 border-2"
                onMouseEnter={() => handleHoverIn(project.name)}
                onMouseLeave={handleHoverOut}>
                <h2 className="text-3xl font-bold  text-yellow-400 text-center mb-5">
                  {project.name}
                </h2>
                <p className="text-gray-300 mb-4 text-lg">
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-slate-600 rounded-lg shadow-lg h-[200px] md:h-[250px] mt-10 md:mt-20 overflow-hidden border-2"
                onMouseEnter={() => handleHoverIn(project.name)}
                onMouseLeave={handleHoverOut}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                  }}></div>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="absolute inset-0 flex justify-center items-center text-yellow-400">
                  <h2 className="text-2xl md:text-4xl font-bold text-center">
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
