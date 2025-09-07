import { Canvas } from "@react-three/fiber";
import ShowRoom from "./ui/ShowRoom";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ fov: 90, position: [5, 5, 5], near: 0.1, far: 1000 }}
      >
        <color attach="background" args={["green"]} />
        <ShowRoom />
      </Canvas>
    </div>
  );
};
export default Home;
