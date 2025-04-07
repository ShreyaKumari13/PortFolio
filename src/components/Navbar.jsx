import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const Logo = () => (
        <a href="#hero" className="relative group">
            <div className="relative inline-block transition-transform duration-300 group-hover:scale-110">
                {/* Main text */}
                <span className="text-4xl font-black tracking-wider relative z-20">
                    <span className="inline-block transition-transform duration-200 group-hover:transform group-hover:-translate-y-1 text-black">S</span>
                    <span className="inline-block transition-transform duration-200 group-hover:transform group-hover:-translate-y-1 group-hover:delay-75 text-black">K</span>
                </span>
                
                {/* Outer glow effect */}
                <span className="absolute -inset-4 bg-gradient-to-r from-[#3D4451] to-[#2D3441] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-full -z-10"></span>
                
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500 animate-shimmer -z-10"></span>
            </div>
        </a>
    );

    return (
        <>
            {/* Desktop Navbar */}
            <div className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a0a]/90 backdrop-blur-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <nav className="flex justify-between items-center h-14 sm:h-20">
                        {/* Logo */}
                        <a href="#hero" className="text-lg sm:text-2xl lg:text-2xl font-bold text-white relative group truncate max-w-[200px] sm:max-w-none">
                            <div className="relative inline-flex items-center">
                                <span className="transition-opacity duration-200 opacity-0 group-hover:opacity-100 -left-4 text-white/90">&lt; </span>
                                <span className="relative z-10">&nbsp; SHREYA&nbsp;KUMARI &nbsp;</span>
                                <span className="transition-opacity duration-200 opacity-0 group-hover:opacity-100 ml-1">/&gt;</span>
                                <span className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></span>
                            </div>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-4 lg:space-x-8">
                            <a href="#section-projects" className="text-sm lg:text-base text-white/90 hover:text-green-400 transition-colors duration-300 font-medium tracking-wide">PROJECTS</a>
                            <a href="#section-experience" className="text-sm lg:text-base text-white/90 hover:text-green-400 transition-colors duration-300 font-medium tracking-wide">EXPERIENCE</a>
                            <a href="#section-contact" className="text-sm lg:text-base text-white/90 hover:text-green-400 transition-colors duration-300 font-medium tracking-wide">CONTACT</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white p-2.5 hover:bg-white/10 rounded-lg transition-colors duration-300 active:scale-95 transform"
                            onClick={toggleDrawer}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-y-0 right-0 z-[200] w-[85%] max-w-[300px] bg-[#0a0a0a] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-xl overflow-y-auto`}>
                <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-xl font-bold text-white">Menu</span>
                        <button
                            onClick={toggleDrawer}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                            aria-label="Close menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <a href="#section-projects" className="block text-base text-white hover:text-green-500 transition-colors duration-300 hover:bg-white/10 p-4 rounded-lg active:scale-95 transform" onClick={toggleDrawer}>PROJECTS</a>
                    <a href="#section-experience" className="block text-base text-white hover:text-green-500 transition-colors duration-300 hover:bg-white/10 p-4 rounded-lg active:scale-95 transform" onClick={toggleDrawer}>EXPERIENCE</a>
                    <a href="#section-contact" className="block text-base text-white hover:text-green-500 transition-colors duration-300 hover:bg-white/10 p-4 rounded-lg active:scale-95 transform" onClick={toggleDrawer}>CONTACT</a>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[150] bg-black/50 md:hidden"
                    onClick={toggleDrawer}
                ></div>
            )}
        </>
    )
}

export default Navbar