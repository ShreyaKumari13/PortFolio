import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Computer } from './Computer';
import { Terminal } from './Terminal';
import backgroundImage from '../assets/background-image.jpg';

const Hero = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText('shreyakumari2713@gmail.com');
        setTooltipOpen(true);
        setTimeout(() => setTooltipOpen(false), 2000);
    };

    return (
        <div id='hero' className='relative min-h-screen'>
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    opacity: 0.8,
                    zIndex: 1
                }}
            ></div>

            {/* 3D Computer Scene */}
            <div className="pt-[100px] absolute inset-y-0 left-0 w-1/2" style={{ zIndex: 2 }}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Suspense fallback={null}>
                        <Computer />
                    </Suspense>
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>

            {/* Right Content Section */}
            <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center p-8" style={{ zIndex: 2 }}>
                <div className="bg-black/50 p-6 rounded-lg backdrop-blur-sm w-full max-w-lg">
                    <Terminal />
                </div>
            </div>
        </div>
        
    );
};

export default Hero;
