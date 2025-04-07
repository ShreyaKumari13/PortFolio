import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            await emailjs.sendForm(
                'service_adj5u8a',
                'template_gr27qc7',
                form.current,
                'u4XNQ_rzwT7wxmZcj'
            );
            
            setFormData({ name: '', email: '', message: '' });
            setStatus({
                submitting: false,
                submitted: true,
                error: null
            });

            setTimeout(() => {
                setStatus(prev => ({ ...prev, submitted: false }));
            }, 5000);

        } catch (error) {
            console.error('Error:', error);
            setStatus({
                submitting: false,
                submitted: false,
                error: 'Failed to send message. Please try again.'
            });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="section-contact" className="relative min-h-screen bg-[#0a0a0a] py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4 sm:mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.div 
                        className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"
                        whileHover={{ width: "150px" }}
                        transition={{ duration: 0.3 }}
                    />
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                        Ready to discuss your next project or explore opportunities
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <motion.div 
                        className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.p 
                            className="text-gray-300 text-center mb-8 sm:mb-12 text-base sm:text-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            I'm open to exciting opportunities and collaborations. Whether you're looking to hire, 
                            discuss a project, or explore potential partnerships, I'd love to connect with you.
                        </motion.p>

                        <div className="grid grid-cols-1 gap-8">
                            <motion.a
                                href="mailto:shreyakumari2713@gmail.com"
                                className="group flex items-center space-x-4 bg-gray-700/30 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                                whileHover={{ scale: 1.02, x: 10 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 group-hover:rotate-12 transition-transform duration-300" />
                                <div>
                                    <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Email</h3>
                                    <p className="text-gray-400 group-hover:text-green-400 transition-colors text-xs sm:text-sm">shreyakumari2713@gmail.com</p>
                                </div>
                            </motion.a>

                            <motion.div
                                className="group flex items-center space-x-4 bg-gray-700/30 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                                whileHover={{ scale: 1.02, x: 10 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 group-hover:rotate-12 transition-transform duration-300" />
                                <div>
                                    <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Location</h3>
                                    <p className="text-gray-400">Karnataka, India</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div 
                            className="flex justify-center space-x-8 mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.a
                                href="https://github.com/shreya-2490"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-gray-700/30 p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                                whileHover={{ scale: 1.1, y: -5 }}
                            >
                                <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-green-400 transition-colors" />
                            </motion.a>

                            <motion.a
                                href="https://www.linkedin.com/in/shreya-kumari-3b0a3b1b9/"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-gray-700/30 p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                                whileHover={{ scale: 1.1, y: -5 }}
                            >
                                <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-green-400 transition-colors" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <label className="text-gray-300 mb-2 block text-sm sm:text-base">Your name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                                    placeholder="Enter your name"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label className="text-gray-300 mb-2 block text-sm sm:text-base">Your email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                                    placeholder="Enter your email"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <label className="text-gray-300 mb-2 block text-sm sm:text-base">Your message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none"
                                    placeholder="Share your thoughts or project details..."
                                    required
                                ></textarea>
                            </motion.div>

                            {status.submitted && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-green-400 text-sm"
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}

                            {status.error && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-red-400 text-sm"
                                >
                                    {status.error}
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status.submitting}
                            >
                                {status.submitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;