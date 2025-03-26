import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Experience = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [isHovered, setIsHovered] = useState(null);

    const experiences = [
        {
            id: 1,
            title: "Java FullStack Intern",
            company: "Government Tool Room & Training Center",
            companyLink: "https://gttc.karnataka.gov.in/en",
            location: "Hubli, Karnataka",
            period: "Jun 2024 - Aug 2024",
            certificate: {
                name: "Java Full Stack Web Development",
                link: ""
            },
            description: [
                "Built a full-stack web app using Java, Spring Boot, and React.js.",
                "Developed REST APIs and managed databases.",
                "Implemented user authentication with Spring Security.",
                "Improved code efficiency through debugging and optimization."
            ],
            skills: ["Core java", "SpringBoot", "React.js"],
            bgColor: "bg-blue-500/20",
            textColor: "text-red-400"
            
           
        },
        {
            id: 2,
            title: " Full Stack Web Development Intern",
            company: "AiROBOSOFT Products and Services",
            companyLink: "https://www.linkedin.com/company/airobosoft-products-and-services/?originalSubdomain=in",
            location: "Hebbal, Bengaluru",
            period: "Aug 2023 - Sep 2023",
            certificate: {
                name: "Full Stack Web Development",
                link: "https://drive.google.com/file/d/1d3WQFYJKh4rXIoQNZMMMTgqetIGS_WQU/view"
            },
            description: [
                "Developed and maintained full-stack web applications using React.js, JavaScript, and Firebase.",
                "Designed and implemented responsive UI with optimized performance.",
                "Integrated new features, resolved bugs, and enhanced user experience.",
                "Contributed to code reviews and technical documentation for improved maintainability."
            ],
            skills: ["React.js", "HTML/CSS", "JavaScript","Firebase"],
            bgColor: "bg-blue-500/20",
            textColor: "text-blue-400"
            
           
        },
        {
            id: 3,
            title: "Machine Learning with Python Student Intern",
            company: "COMPSOFT TECHNOLOGIES",
            companyLink: "https://www.compstechnologies.com/",
            location: "Rajajinagar, Bengaluru",
            period: "May 2023 - Jun 2023",
            certificate: {
                name: "ML Research Excellence",
                link: "https://drive.google.com/file/d/1LZi65L-GmHS85fi624_dl2VquLDB5JX6/view"
            },
            description: [
                "Conducted research on machine learning algorithms for computer vision",
                "Implemented and evaluated various deep learning models",
                "Published research findings in academic conferences",
                "Mentored junior students in programming and research methodology"
            ],
            skills: ["Python", "TensorFlow", "OpenCV"],
            bgColor: "bg-green-500/20",
            textColor: "text-green-400"
            
        },
        {
            id: 4,
            title: " Java FullStack Developer Intern",
            company: "TECHNOLOGICS GLOBAL PVT LTD",
            companyLink: "https://technologics.in/",
            location: "JP nagar, Bengaluru",
            period: "Jan 2023 - May 2023",
            certificate: {
                name: "Java FullStack",
                link: "https://drive.google.com/file/d/1BwVOpTkaKUCEWiz-mM20DeICvUT7ihYC/view"
            },
            description: [
                "Developed and maintained full-stack web applications using Core Java, JDBC, Hibernate, Spring MVC, JSP, and Servlets.",
                "Built and optimized backend services for efficient data processing and performance.",
                "Designed and integrated dynamic web pages to enhance user interaction.",
                "Collaborated with the team to implement new features, debug issues, and improve system functionality."
            ],
            skills: ["Core Java"," Jdbc", "Hibernate", "Spring MVC", "Jsp", "Servlets"],
            bgColor: "bg-purple-500/20",
            textColor: "text-purple-400"
            
            
        }
    ];

    return (
        <section id="section-experience" className="relative min-h-screen bg-[#0a0a0a] py-20">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2 
                        className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Experience
                    </motion.h2>
                    <motion.div 
                        className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"
                        whileHover={{ width: "150px" }}
                        transition={{ duration: 0.3 }}
                    />
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        My professional journey and achievements
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            layoutId={`container-${exp.id}`}
                            onClick={() => setSelectedId(selectedId === exp.id ? null : exp.id)}
                            onHoverStart={() => setIsHovered(exp.id)}
                            onHoverEnd={() => setIsHovered(null)}
                            className={`bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 backdrop-blur-sm cursor-pointer ${
                                isHovered === exp.id ? 'shadow-lg shadow-blue-500/20' : ''
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div className="flex flex-col md:flex-row justify-between mb-4">
                                <div className="space-y-2">
                                    <motion.h3 
                                        className="text-2xl font-bold text-white transition-colors"
                                        style={{
                                            color: isHovered === exp.id ? '#4ADE80' : '#FFFFFF'
                                        }}
                                    >
                                        {exp.title}
                                    </motion.h3>
                                    
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <motion.a
                                            href={exp.companyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {exp.company}
                                        </motion.a>

                                        <motion.div 
                                            className="flex items-center text-gray-400 gap-1"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <FaMapMarkerAlt className="w-4 h-4" />
                                            {exp.location}
                                        </motion.div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col items-end gap-2">
                                    <motion.span 
                                        className="text-green-400 font-semibold"
                                        animate={{
                                            opacity: isHovered === exp.id ? 1 : 0.8
                                        }}
                                    >
                                        {exp.period}
                                    </motion.span>
                                    <motion.a
                                        href={exp.certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <FaAward className="w-3.5 h-3.5 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
                                        View Certificate
                                    </motion.a>
                                </div>
                            </motion.div>
                            
                            <AnimatePresence>
                                {selectedId === exp.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-4"
                                    >
                                        <motion.ul className="list-disc list-inside text-gray-400 space-y-3 mb-6">
                                            {exp.description.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.div 
                                className="flex flex-wrap gap-3 mt-4"
                                animate={{
                                    y: selectedId === exp.id ? 10 : 0
                                }}
                            >
                                {exp.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        className={`px-4 py-2 ${exp.bgColor} ${exp.textColor} rounded-full text-sm font-medium`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;