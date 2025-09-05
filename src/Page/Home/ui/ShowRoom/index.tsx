import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";
import useColorChange from "./model/useColorChange";
import useMaterialInit from "./model/useMaterialInit";
const ShowRoom = () => {
  const landRover = useLoader(
    GLTFLoader,
    "/src/Shared/assets/3dModel/Range Rover Sports.glb"
  );
  const spotLightRef = useRef<THREE.SpotLight>(null!);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null!);
  const GLTFRef = useRef<THREE.Group>(null!);
  useHelper(spotLightRef, THREE.SpotLightHelper, "cyan");
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "yellow");

  const [carClickHandler] = useColorChange({ objects: landRover });
  useMaterialInit({ GLTFRef });

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        position={[7, 7, 7]}
        target-position={[0, 0, 0]}
        intensity={10}
        castShadow
      />
      <spotLight
        ref={spotLightRef}
        color={"white"}
        intensity={700}
        position={[-3, 10, 0]}
        distance={100}
        angle={Math.PI / 4}
        penumbra={0.5}
      />
      <gridHelper args={[10, 10]} />
      <primitive
        ref={GLTFRef}
        object={landRover.scene}
        onClick={carClickHandler}
      />
    </>
  );
};

export default ShowRoom;
