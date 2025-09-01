import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ShowRoom = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ fov: 90, position: [5, 5, 5], near: 0.1, far: 1000 }}
      >
        <color attach="background" args={["white"]} />
        <OrbitControls
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1}
        />
        <mesh>
          <directionalLight
            position={[5, 5, 5]}
            target-position={[0, 0, 0]}
            intensity={7}
            castShadow
          />
          <ambientLight intensity={0.5} />
          <gridHelper args={[10, 10]} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ShowRoom;
