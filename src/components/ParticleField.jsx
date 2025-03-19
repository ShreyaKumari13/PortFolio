import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleField() {
    const particles = useRef()
    
    const [positions, speeds] = useMemo(() => {
        const count = 500
        const positions = new Float32Array(count * 3)
        const speeds = new Float32Array(count)

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
            speeds[i] = Math.random() * 0.01 + 0.005
        }

        return [positions, speeds]
    }, [])

    useFrame(() => {
        if (particles.current) {
            const positions = particles.current.geometry.attributes.position.array
            for (let i = 0; i < positions.length / 3; i++) {
                positions[i * 3 + 1] -= speeds[i]
                if (positions[i * 3 + 1] < -5) {
                    positions[i * 3 + 1] = 5
                }
            }
            particles.current.geometry.attributes.position.needsUpdate = true
        }
    })

    return (
        <points ref={particles}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#ffffff"
                transparent
                opacity={0.3}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
} 