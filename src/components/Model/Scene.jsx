/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/cDaMZdTTLDSgznQu/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#fff']} />
      <group {...props} dispose={null}>
        <scene name="Scene">
          <pointLight
            name="Point Light"
            castShadow
            intensity={6.1}
            decay={7}
            distance={1487}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            color="#f58787"
            position={[-197.8, -48.78, 0]}
          />
          <mesh
            name="Sphere 2"
            geometry={nodes['Sphere 2'].geometry}
            material={materials['Sphere 2 Material']}
            castShadow
            receiveShadow
            position={[230.09, -54.88, 265.7]}
          />
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials['Sphere Material']}
            castShadow
            receiveShadow
            position={[-257.58, -59.62, 227.38]}
          />
          <group name="л" position={[-109.19, 128.19, -54.91]} scale={[1.02, 0.91, 1.34]}>
            <group name="Group1" position={[99, 0, 10]} scale={[0.98, 1.09, 0.75]}>
              <mesh
                name="Shape 0"
                geometry={nodes['Shape 0'].geometry}
                material={materials['Shape 0 Material']}
                castShadow
                receiveShadow
                position={[-85.44, 27.48, -13.41]}
                scale={[1.02, 0.91, 1.34]}
              />
              <mesh
                name="Shape 1"
                geometry={nodes['Shape 1'].geometry}
                material={materials['Shape 1 Material']}
                castShadow
                receiveShadow
                position={[-83.91, -34.79, -13.4]}
                scale={[1.02, 0.91, 1.34]}
              />
              <mesh
                name="Shape 2"
                geometry={nodes['Shape 2'].geometry}
                material={materials['Shape 2 Material']}
                castShadow
                receiveShadow
                position={[-20.47, -34.79, -13.38]}
                scale={[1.02, 0.91, 1.34]}
              />
              <mesh
                name="Shape 3"
                geometry={nodes['Shape 3'].geometry}
                material={materials['Shape 3 Material']}
                castShadow
                receiveShadow
                position={[45.02, -34.79, -13.37]}
                scale={[1.02, 0.91, 1.34]}
              />
            </group>
          </group>
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
