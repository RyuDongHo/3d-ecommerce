import { Canvas } from "@react-three/fiber";
import ShowRoom from "./ui";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
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
        <ShowRoom />
      </Canvas>
    </div>
  );
};
export default Home;
