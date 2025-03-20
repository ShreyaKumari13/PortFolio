// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'

// export function Computer() {
//     const computer = useRef()
    
//     // Faster floating animation
//     useFrame((state) => {
//         if (computer.current) {
//             const t = state.clock.getElapsedTime()
//             computer.current.rotation.y = Math.sin(t / 2) / 6  // Faster rotation
//             computer.current.position.y = Math.sin(t / 1) / 8  // Faster floating
//         }
//     })

//     return (
//         <group ref={computer} position={[0, 0, 0]} rotation={[0.2, 0, 0]} scale={1.2}>
//             {/* Base/Bottom part */}
//             <mesh position={[0, -0.1, 0]} castShadow>
//                 <boxGeometry args={[2, 0.1, 1.2]} />
//                 <meshStandardMaterial color="#CCCCCC" metalness={0.6} roughness={0.3} />
//             </mesh>

//             {/* Screen part */}
//             <group position={[0, 0.6, 0]} rotation={[0.3, 0, 0]}>
//                 <mesh castShadow>
//                     <boxGeometry args={[2, 1.2, 0.1]} />
//                     <meshStandardMaterial color="#CCCCCC" metalness={0.6} roughness={0.3} />
//                 </mesh>
//                 {/* Screen display */}
//                 <mesh position={[0, 0, 0.06]}>
//                     <planeGeometry args={[1.9, 1.1]} />
//                     <meshBasicMaterial color="#1a1a1a" />
//                 </mesh>
//             </group>

//             {/* Keyboard area */}
//             <mesh position={[0, 0, 0.3]} rotation={[0.1, 0, 0]} receiveShadow>
//                 <boxGeometry args={[2, 0.1, 1]} />
//                 <meshStandardMaterial color="#DDDDDD" metalness={0.6} roughness={0.3} />
//             </mesh>
//         </group>
//     )
// }