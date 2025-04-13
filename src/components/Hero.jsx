import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaAddressCard } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const [isDark, setIsDark] = useState(true);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    const scrollToContact = () => {
        const contactSection = document.getElementById('section-contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className={`min-h-screen pt-16 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-100'} flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8`}>
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                style={{
                    backgroundImage: `radial-gradient(circle at center, ${isDark ? '#4ade80' : '#2563eb'} 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />
            <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 relative z-10 flex flex-col">                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-12">
                    <motion.div 
                        className="w-full md:w-3/5 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ y }}
                    >
                        <motion.h1 
                            className={`text-4xl sm:text-5xl md:text-7xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <TypeAnimation
                                sequence={[
                                    'Hi, I\'m ',
                                    1000,
                                    'Hi, I\'m Shreya Kumari',
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className={`bg-gradient-to-r ${isDark ? 'from-green-400 to-blue-500' : 'from-blue-600 to-purple-600'} text-transparent bg-clip-text`}
                            />
                        </motion.h1>
                        <motion.h2 
                            className={`text-xl sm:text-2xl md:text-4xl ${isDark ? 'text-gray-300' : 'text-gray-700'} font-light`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Full Stack Developer
                        </motion.h2>
                        <motion.p 
                            className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Passionate about creating innovative web solutions with modern technologies.
                            Experienced in both frontend and backend development.
                        </motion.p>
                        <motion.div 
                            className="flex items-center justify-center md:justify-start gap-6 sm:gap-8 md:gap-12 pt-4 sm:pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <motion.a
                                href="https://github.com/ShreyaKumari13"
                                target="_blank"
                                rel="noreferrer"
                                className={`${isDark ? 'text-white hover:text-green-400' : 'text-gray-900 hover:text-blue-600'} transition-all duration-300`}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <FaGithub className="w-8 h-8" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/shreyakumari13/"
                                target="_blank"
                                rel="noreferrer"
                                className={`${isDark ? 'text-white hover:text-green-400' : 'text-gray-900 hover:text-blue-600'} transition-all duration-300`}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <FaLinkedin className="w-8 h-8" />
                            </motion.a>
                            <motion.a
                                href="mailto:shreyakumari2713@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className={`${isDark ? 'text-white hover:text-green-400' : 'text-gray-900 hover:text-blue-600'} transition-all duration-300`}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <FaEnvelope className="w-8 h-8" />
                            </motion.a>
                            <motion.a
                                href="/RESUME_SHREYA.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className={`${isDark ? 'text-white hover:text-green-400' : 'text-gray-900 hover:text-blue-600'} transition-all duration-300 relative group`}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <FaFileAlt className="w-8 h-8" />
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">View Resume</span>
                            </motion.a>
                            <motion.button
                                onClick={scrollToContact}
                                className={`${isDark ? 'text-white hover:text-green-400' : 'text-gray-900 hover:text-blue-600'} transition-all duration-300 relative group`}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <FaAddressCard className="w-8 h-8" />
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Contact Me</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="w-full sm:w-4/5 md:w-2/5 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
                    >
                        <motion.img
                            src="/ramsita.png"
                            alt="Ramsita"
                            className="w-full h-auto max-w-md mx-auto object-contain rounded-2xl shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    </motion.div>
                </div>
                <motion.div 
                    className="w-full overflow-hidden bg-gray-800/40 backdrop-blur-lg py-6 sm:py-12 border-t border-b border-gray-600/40 shadow-[0_0_20px_rgba(74,222,128,0.2)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative flex overflow-x-hidden">
                        <div className="flex items-center whitespace-nowrap animate-scroll">
                            {[
                                "Java",
                                "SpringBoot",
                                "SQL",
                                ".Net",
                                "C#",
                                "React",
                                "Node.js",
                                "MongoDB",
                                "Express",
                                "Firebase",
                                "Python",
                                "Django",
                                "Flask",
                                "HTML5",
                                "CSS3",
                                "JavaScript",
                                "Git",
                                "GitHub",
                            ].concat([
                                "Java",
                                "SpringBoot",
                                "SQL",
                                ".Net",
                                "C#",
                                "React",
                                "Node.js",
                                "MongoDB",
                                "Express",
                                "Firebase",
                                "Python",
                                "Django",
                                "Flask",
                                "HTML5",
                                "CSS3",
                                "JavaScript",
                                "Git",
                                "GitHub",
                            ]).map((tech, index, array) => (
                                <motion.div
                                    key={`${tech}-${index}`}
                                    className="group flex flex-col items-center relative mx-4 sm:mx-8"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <span className="text-gray-200 text-lg sm:text-2xl font-medium group-hover:text-green-400 transition-all duration-300 relative text-shadow-lg">
                                        {tech}
                                        <motion.span 
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 origin-left shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </span>
                                    <span className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 text-green-400/60 text-xl sm:text-3xl">•</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="animate-[marquee_25s_linear_infinite] flex items-center whitespace-nowrap" aria-hidden="true">
                            {[
                                "Java",
                                "SpringBoot",
                                "SQL",
                                ".Net",
                                "C#",
                                "React",
                                "Node.js",
                                "MongoDB",
                                "Express",
                                "Firebase",
                                "Python",
                                "Django",
                                "Flask",
                                "HTML5",
                                "CSS3",
                                "JavaScript",
                                "Git",
                                "GitHub",
                            ].map((tech, index, array) => (
                                <motion.div
                                    key={`${tech}-${index}-duplicate`}
                                    className="group flex flex-col items-center relative mx-4 sm:mx-8"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <span className="text-gray-200 text-lg sm:text-2xl font-medium group-hover:text-green-400 transition-all duration-300 relative text-shadow-lg">
                                        {tech}
                                        <motion.span 
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 origin-left shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </span>
                                    <span className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 text-green-400/60 text-xl sm:text-3xl">•</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
