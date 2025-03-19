import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';

const Experience = () => {
    return (
        <section id="section-experience" className="relative min-h-screen bg-[#0a0a0a] py-20">
            {/* Particle Canvas */}
            <div className="absolute inset-0 pointer-events-none">
                <Canvas
                    camera={{ position: [0, 0, 8], fov: 50 }}
                    dpr={[1, 2]}
                >
                    <color attach="background" args={['#0a0a0a']} />
                    <Suspense fallback={null}>
                        <ParticleField />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
                <div className="max-w-3xl mx-auto space-y-8">
                    {/* Software Development Intern */}
                    <div className="bg-gray-800/50 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">Software Development Intern</h3>
                            <span className="text-green-500">June 2023 - August 2023</span>
                        </div>
                        <h4 className="text-lg text-gray-300 mb-2">Tech Innovators Inc.</h4>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Developed and maintained web applications using React and Node.js</li>
                            <li>Implemented responsive designs and improved application performance by 40%</li>
                            <li>Collaborated with the team to integrate new features and fix bugs</li>
                            <li>Participated in code reviews and contributed to technical documentation</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm">React</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm">JavaScript</span>
                        </div>
                    </div>

                    {/* Web Development Intern */}
                    <div className="bg-gray-800/50 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">Web Development Intern</h3>
                            <span className="text-green-500">January 2023 - May 2023</span>
                        </div>
                        <h4 className="text-lg text-gray-300 mb-2">Digital Solutions Ltd.</h4>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Built and deployed responsive websites for clients using modern web technologies</li>
                            <li>Optimized website performance and implemented SEO best practices</li>
                            <li>Created reusable components and maintained component library</li>
                            <li>Worked with REST APIs and implemented data visualization features</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm">Next.js</span>
                            <span className="px-3 py-1 bg-pink-500/20 text-pink-500 rounded-full text-sm">TypeScript</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm">Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Research Assistant */}
                    <div className="bg-gray-800/50 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">Research Assistant</h3>
                            <span className="text-green-500">September 2022 - December 2022</span>
                        </div>
                        <h4 className="text-lg text-gray-300 mb-2">University Research Lab</h4>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Conducted research on machine learning algorithms for computer vision</li>
                            <li>Implemented and evaluated various deep learning models</li>
                            <li>Published research findings in academic conferences</li>
                            <li>Mentored junior students in programming and research methodology</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm">Python</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">TensorFlow</span>
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm">OpenCV</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience 