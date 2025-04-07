import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    const projects = [
        {
            title: "Aconews",
            description: "Ackonews is a news aggregation web application that fetches the latest articles using the gnews.io API. The app allows users to search for news based on keywords, country, language, and category.",
            image: "/aconews.png",
            technologies: ["React", "HTML5", "TailwindCSS", "Vite", "Express", "Firebase", "Vercel", "Git&Github" ],
            liveDemo: "https://newsapp-587c0.web.app/",
            github: "https://github.com/ShreyaKumari13/NewsApp"
        },
        {
            title: "Gttc Lms",
            description: "A comprehensive Learning Management System (LMS) developed for GTTC administrators. Features include course creation and management, subject organization, video content management, subscriber analytics with detailed insights on free and paid users, and an interactive revenue dashboard with printable reports. Currently in active development with continuous feature enhancements.\n\nDemo Access:\nEmail: admin@example.com\nPassword: admin123",
            image: "/lms.png",
            technologies: ["HTML","CSS","JavaScript","Python","Django", "Git&Github"],
            liveDemo: "https://lmsgttc.netlify.app/",
            github: "https://github.com/ShreyaKumari13/GTTC_LMS_Admin_Side"
        },
        {
            title: "ProjectX",
            description: "ProjectX is a client management system developed using Python and the Django framework, designed to simplify and enhance the management of client relationships. It offers a secure platform for storing and managing client data, tracking communications, and handling client-related tasks.",
            image: "/X.png",
            technologies: ["HTML","CSS","JavaScript","Python", "Django", "Git&Github"],
            // liveDemo: "https://your-live-demo-link.com",
            github: "https://github.com/ShreyaKumari13/ProjectX_Django"
        },
        {
            title: "Heart-Care",
            description: "This is a web application which uses multiple ML models, Python(Flask and NLTK) in the backend for predicting heart attack percentage of a person, Front-End is designed through HTML/CSS & JS, also integrated a chatbot for seamless user experience which replies with common diseases treatment recommendations.",
            image: "/Picture1.png",
            technologies: ["HTML5", "CSS", "JavaScript", "Python", "Flask", "Git&Github"],
            // liveDemo: "https://your-live-demo-link.com",
            github: "https://github.com/ShreyaKumari13/CardioDetect"
        },
        {
            title: "Movie Booking System",
            description: "Developed a Movie Booking App with React.js and Spring Boot, featuring user authentication, movie browsing, and real-time seat availability for a seamless booking experience.",
            image: "/movie.png",
            technologies: ["HTML5", "CSS", "JavaScript", "Java","MySql", "Git&Github"],
            // liveDemo: "https://your-live-demo-link.com",
            github: "https://github.com/ShreyaKumari13/Movie_Booking_System"
        },
        {
            title: "Money App",
            description: "Developed a secure currency converter using Next.js and PostgreSQL, featuring user/admin roles, real-time exchange rates, authentication, and a dynamic draw system for enhanced functionality.",
            image: "/moneyapp.png",
            technologies: ["Next.js","PostgreSQL", "Git&Github"],
            liveDemo: "https://rabbit-money-app.vercel.app/",
            github: "https://github.com/ShreyaKumari13/MoneyApp"
        }
    ];

    const handleImageLoad = (index) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    };

    return (
        <section id="section-projects" className="relative min-h-screen bg-[#0a0a0a] py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4 sm:mb-6">
                        Projects
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto px-4">
                        Showcasing my creative journey through code and innovation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="relative h-full overflow-hidden rounded-lg sm:rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 flex flex-col">
                                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                                    {!loadedImages[index] && (
                                        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600 animate-spin" viewBox="0 0 24 24">
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
                                </div>

                                <div className="relative z-20 p-4 sm:p-5 md:p-6 -mt-16 sm:-mt-18 md:-mt-20 flex flex-col flex-grow">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <motion.p 
                                        className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 overflow-hidden flex-grow"
                                        initial={{ height: "3em" }}
                                        whileHover={{ height: "auto" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {project.description}
                                    </motion.p>
                                    
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-white bg-gray-700/50 rounded-full backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        {project.liveDemo && (
                                            <a 
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/20 text-green-400 text-sm sm:text-base rounded-lg hover:bg-green-500/30 transition-all duration-300 flex items-center"
                                            >
                                                <span>Live Demo</span>
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                </svg>
                                            </a>
                                        )}
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700/50 text-white text-sm sm:text-base rounded-lg hover:bg-gray-700/70 transition-all duration-300 flex items-center"
                                        >
                                            <span>GitHub</span>
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="currentColor" viewBox="0 0 24 24">
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