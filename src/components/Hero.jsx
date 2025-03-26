import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background-image.jpg';
import { motion, useDragControls } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const dragControls = useDragControls();

    const copy = () => {
        navigator.clipboard.writeText('shreyakumari2713@gmail.com');
        setTooltipOpen(true);
        setTimeout(() => setTooltipOpen(false), 2000);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHistoryIndex(prev => Math.min(prev + 1, commandHistory.length - 1));
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHistoryIndex(prev => Math.max(prev - 1, -1));
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [commandHistory]);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div id='hero' className='relative min-h-screen'>
            {/* Background Image with Parallax */}
            <motion.div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    opacity: 0.8,
                    zIndex: 1
                }}
            />

            {/* Content Container */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center">
                        <motion.div
                            drag
                            dragControls={dragControls}
                            dragMomentum={false}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="bg-[#0a0a0a]/70 backdrop-blur-sm rounded-xl p-6 border border-gray-600/50 font-mono max-w-2xl w-full shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 cursor-move"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div 
                                className="flex items-center gap-2 mb-4 border-b border-gray-600/50 pb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                onPointerDown={(e) => dragControls.start(e)}
                            >
                                <motion.div 
                                    className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-500/50"
                                    whileHover={{ scale: 1.2 }}
                                />
                                <motion.div 
                                    className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/50"
                                    whileHover={{ scale: 1.2 }}
                                />
                                <motion.div 
                                    className="w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-500/50"
                                    whileHover={{ scale: 1.2 }}
                                />
                                <TypeAnimation
                                    sequence={['shreya@user:~$', 1000]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={0}
                                    className="text-gray-400 text-sm ml-2 font-bold"
                                />
                            </motion.div>
                            
                            <div className="space-y-6">
                                <motion.div variants={itemVariants} className="text-green-400 text-lg">
                                    <span className="text-blue-400 font-bold">$</span> whoami<br/>
                                    <TypeAnimation
                                        sequence={[
                                            'user: Shreya Kumari\r\nrole: Full Stack Developer',
                                            1000
                                        ]}
                                        wrapper="span"
                                        cursor={false}
                                        repeat={0}
                                        className="text-gray-300 ml-4 block whitespace-pre"
                                    />
                                </motion.div>

                                    
                                <motion.div variants={itemVariants} className="text-green-400 text-lg">
                                    <span className="text-blue-400 font-bold">$</span> current_status<br/>
                                    <TypeAnimation
                                        sequence={[
                                            'role: full stack developer\ncompany: HazeDawn Limited\nfocus: enterprise web applications',
                                            1000
                                        ]}
                                        wrapper="span"
                                        cursor={false}
                                        repeat={0}
                                        className="text-gray-300 ml-4 block whitespace-pre"
                                    />
                                    
                                </motion.div>

                                
                                {/* <motion.div variants={itemVariants} className="text-green-400 text-lg">
                                    <span className="text-blue-400 font-bold">$</span> cat about.txt<br/>
                                    <TypeAnimation
                                        sequence={[
                                            '→ currently working as a full stack developer\n→ passionate about building scalable web solutions\n→ experienced in modern web technologies',
                                            1000
                                        ]}
                                        wrapper="span"
                                        cursor={false}
                                        repeat={0}
                                        className="text-gray-300 ml-4 block whitespace-pre-line"
                                    />
                                </motion.div> */}
                            
                                
                                
                                <motion.div variants={itemVariants} className="text-green-400 text-lg">
                                    <span className="text-blue-400 font-bold">$</span> list_skills<br/>
                                    <TypeAnimation
                                        sequence={[
                                            '→ Frontend: React, Vue, TypeScript, Tailwind\n→ Backend: Node.js, Express, Django\n→ Database: MongoDB, PostgreSQL\n→ Tools: Git, Docker, AWS',
                                            1000
                                        ]}
                                        wrapper="span"
                                        cursor={false}
                                        repeat={0}
                                        className="text-gray-300 ml-4 block whitespace-pre-line"
                                    />
                                </motion.div>

                                <motion.div 
                                    variants={itemVariants} 
                                    className="text-green-400 text-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <span className="text-blue-400 font-bold">$</span> view_resume<br/>
                                    <motion.a 
                                        href="/SHREYA_RESUME.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-300 ml-4 hover:text-green-400 transition-colors cursor-pointer inline-block group"
                                        whileHover={{ x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        → Opening resume.pdf... <span className="group-hover:text-yellow-300 inline-block group-hover:rotate-12 transition-transform">📄</span><br/>
                                    </motion.a>
                                </motion.div>

                              
                               
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
