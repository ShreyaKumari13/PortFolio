import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Computer } from './Computer';
import { Terminal } from './Terminal';
import { ParticleField } from './ParticleField';

const Hero = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText('shreyakumari2713@gmail.com');
        setTooltipOpen(true);
        setTimeout(() => setTooltipOpen(false), 2000);
    };

    return (
        <div id='hero' className='relative min-h-screen bg-[#0a0a0a]'>
            <div className='flex flex-col lg:flex-row min-h-screen'>
                {/* Left Side - 3D Scene */}
                <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-screen bg-[#0a0a0a]">
                    <Canvas
                        camera={{ position: [0, 0, 8], fov: 50 }}
                        dpr={[1, 2]}
                        className="bg-[#0a0a0a]"
                    >
                        <color attach="background" args={['#0a0a0a']} />
                        <fog attach="fog" args={['#0a0a0a', 8, 20]} />
                        <ambientLight intensity={0.7} />
                        <directionalLight
                            position={[5, 5, 5]}
                            intensity={1}
                            castShadow
                            shadow-mapSize={2048}
                        />
                        <spotLight
                            position={[-5, 5, 0]}
                            intensity={0.5}
                            angle={0.3}
                            penumbra={1}
                        />
                        <Suspense fallback={null}>
                            <Computer />
                            <ParticleField />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                minPolarAngle={Math.PI / 2.2}
                                maxPolarAngle={Math.PI / 2.2}
                                rotateSpeed={0.5}
                            />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Right Side - Content Section */}
                <div className='relative w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8 bg-[#0a0a0a] overflow-hidden'>
                    {/* Particle Canvas for right side */}
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

                    <div className='relative z-10 max-w-2xl w-full space-y-8'>
                        {/* Terminal Window */}
                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-700">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-700/80">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="p-6">
                                <Terminal />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <a 
                                href="static/media/SHREYA_RESUME.pdf" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="w-full sm:w-auto px-8 py-3 bg-[#3D4451] text-white rounded-lg hover:bg-[#2D3441] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-700"
                            >
                                GET MY RESUME
                            </a>

                            <div className="dropdown dropdown-hover w-full sm:w-auto">
                                <a 
                                    href="mailto:shreyakumari2713@gmail.com" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="w-full sm:w-auto px-8 py-3 border-2 border-[#3D4451] text-white rounded-lg hover:bg-[#3D4451] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-block"
                                >
                                    shreyakumari2713@gmail.com
                                </a>
                                <ul className="p-2 shadow dropdown-content bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700">
                                    <li>
                                        <a 
                                            className="block px-4 py-2 text-white hover:bg-gray-700 rounded transition-colors duration-200" 
                                            href="mailto:shreyakumari2713@gmail.com" 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            Open in email client
                                        </a>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={copy} 
                                            className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded transition-colors duration-200"
                                        >
                                            <span data-tip="Copied to clipboard!" className={`${tooltipOpen ? 'tooltip tooltip-open tooltip-accent' : ''}`}>
                                                Copy email address
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
