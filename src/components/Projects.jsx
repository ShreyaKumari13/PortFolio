import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';

const Projects = () => {
    return (
        <section id="section-projects" className="relative min-h-screen bg-[#0a0a0a] py-20">
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
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Card 1 */}
                    <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Project Name</h3>
                            <p className="text-gray-300 mb-4">Project description goes here. Brief overview of what the project does and technologies used.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm">JavaScript</span>
                            </div>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-green-500 transition-colors duration-300">View Project</a>
                                <a href="#" className="text-white hover:text-green-500 transition-colors duration-300">GitHub</a>
                            </div>
                        </div>
                    </div>

                    {/* Add more project cards here */}
                </div>
            </div>
        </section>
    )
}

export default Projects 