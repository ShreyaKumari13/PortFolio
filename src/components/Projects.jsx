import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    const projects = [
        {
            title: "Portfolio Website",
            description: "A modern portfolio website built with React and Three.js, featuring 3D animations and interactive elements.",
            image: "/aconews.png",
            technologies: ["React", "Three.js", "TailwindCSS"],
            liveDemo: "https://your-live-demo-link.com",
            github: "https://github.com/your-username/project1"
        },
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with user authentication, payment processing, and order management.",
            image: "/project2.jpg",
            technologies: ["Node.js", "MongoDB", "Express"],
            liveDemo: "https://your-live-demo-link.com",
            github: "https://github.com/your-username/project2"
        },
        {
            title: "AI Chat Application",
            description: "Real-time chat application with AI-powered responses, user authentication, and message history.",
            image: "/project3.jpg",
            technologies: ["Python", "Flask", "Socket.io"],
            liveDemo: "https://your-live-demo-link.com",
            github: "https://github.com/your-username/project3"
        }
    ];

    const handleImageLoad = (index) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    };

    return (
        <section id="section-projects" className="relative min-h-screen bg-[#0a0a0a] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Showcasing my creative journey through code and innovation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                                <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                                    {!loadedImages[index] && (
                                        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                                            <svg className="w-10 h-10 text-gray-600 animate-spin" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                            </svg>
                                        </div>
                                    )}
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10 group-hover:opacity-75 transition-opacity duration-300"/>
                                    
                                    <motion.img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                        onLoad={() => handleImageLoad(index)}
                                        style={{
                                            opacity: loadedImages[index] ? 1 : 0,
                                            transition: 'opacity 0.3s ease-in-out'
                                        }}
                                    />

                                    <motion.div 
                                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                            </svg>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                <div className="relative z-20 p-6 -mt-20">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-3 py-1 text-sm text-white bg-gray-700/50 rounded-full backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <a 
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 flex items-center"
                                        >
                                            <span>Live Demo</span>
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-gray-700/70 transition-all duration-300 flex items-center"
                                        >
                                            <span>GitHub</span>
                                            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img 
                            src={selectedImage}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;