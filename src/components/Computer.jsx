import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function Computer() {
    const computer = useRef()
    
    // Subtle floating animation
    useFrame((state) => {
        if (computer.current) {
            const t = state.clock.getElapsedTime()
            computer.current.rotation.y = Math.sin(t / 4) / 8
            computer.current.position.y = Math.sin(t / 1.5) / 10
        }
    })

    return (
        <group ref={computer} position={[0, 0, -2]} rotation={[0.2, 0, 0]} scale={1.8}>
            {/* Base/Bottom part */}
            <mesh position={[0, -0.1, 0]} castShadow>
                <boxGeometry args={[2, 0.1, 1.2]} />
                <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Screen part */}
            <group position={[0, 0.6, 0]} rotation={[0.3, 0, 0]}>
                <mesh castShadow>
                    <boxGeometry args={[2, 1.2, 0.1]} />
                    <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
                </mesh>
                {/* Screen display */}
                <mesh position={[0, 0, 0.06]}>
                    <planeGeometry args={[1.9, 1.1]} />
                    <meshBasicMaterial color="#000000" />
                </mesh>
            </group>

            {/* Keyboard area */}
            <mesh position={[0, 0, 0.3]} rotation={[0.1, 0, 0]} receiveShadow>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshStandardMaterial color="#999999" metalness={0.8} roughness={0.2} />
            </mesh>
        </group>
    )
} 