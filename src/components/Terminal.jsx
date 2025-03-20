// import { useEffect, useRef } from 'react'
// import Typed from 'typed.js'

// export function Terminal() {
//     const el = useRef(null)

//     useEffect(() => {
//         const typed = new Typed(el.current, {
//             strings: [
//                 "initializing...\n" +
//                 "> Hello, I'm Shreya Kumari_\n" +
//                 "> Role: Web Developer\n" +
//                 "> Location: Karnataka, India\n" +
//                 "> Skills: React, Node.js, JavaScript...\n" +
//                 "> Status: Ready for new challenges_"
//             ],
//             typeSpeed: 40,
//             backSpeed: 0,
//             loop: false,
//             cursorChar: '▋',
//             showCursor: true,
//             onStringTyped: (arrayPos, self) => {
//                 // Optional: Add any callback functionality here
//             }
//         })

//         return () => {
//             typed.destroy()
//         }
//     }, [])

//     return (
//         <div className="font-mono text-green-500 text-sm md:text-base whitespace-pre-wrap">
//             <span ref={el} />
//         </div>
//     )
// } 