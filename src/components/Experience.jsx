import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Experience = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [isHovered, setIsHovered] = useState(null);

    const experiences = [
        {
            id: 1,
            title: "Software Development Intern",
            company: "Tech Innovators Inc.",
            companyLink: "https://techinnovators.com",
            location: "San Francisco, CA",
            period: "June 2023 - August 2023",
            certificate: {
                name: "React Development Excellence",
                link: "https://cert.example.com/react-dev"
            },
            description: [
                "Developed and maintained web applications using React and Node.js",
                "Implemented responsive designs and improved application performance by 40%",
                "Collaborated with the team to integrate new features and fix bugs",
                "Participated in code reviews and contributed to technical documentation"
            ],
            skills: ["React", "Node.js", "JavaScript"],
            bgColor: "bg-blue-500/20",
            textColor: "text-blue-400"
        },
        {
            id: 2,
            title: "Web Development Intern",
            company: "Digital Solutions Ltd.",
            companyLink: "https://digitalsolutions.com",
            location: "New York, NY",
            period: "January 2023 - May 2023",
            certificate: {
                name: "Web Development Mastery",
                link: "https://cert.example.com/web-dev"
            },
            description: [
                "Built and deployed responsive websites for clients using modern web technologies",
                "Optimized website performance and implemented SEO best practices",
                "Created reusable components and maintained component library",
                "Worked with REST APIs and implemented data visualization features"
            ],
            skills: ["Next.js", "TypeScript", "Tailwind CSS"],
            bgColor: "bg-purple-500/20",
            textColor: "text-purple-400"
        },
        {
            id: 3,
            title: "Research Assistant",
            company: "University Research Lab",
            companyLink: "https://university.edu/lab",
            location: "Boston, MA",
            period: "September 2022 - December 2022",
            certificate: {
                name: "ML Research Excellence",
                link: "https://cert.example.com/ml-research"
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