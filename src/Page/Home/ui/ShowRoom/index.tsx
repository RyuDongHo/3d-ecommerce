import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CameraControls, ContactShadows } from "@react-three/drei";
import useColorChange from "./model/useColorChange";
import useMaterialInit from "./model/useMaterialInit";
const ShowRoom = () => {
  const landRover = useLoader(
    GLTFLoader,
    "/src/Shared/assets/3dModel/range_rover_v2.glb"
  );
  const spotLightRef = useRef<THREE.SpotLight>(null!);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null!);
  const GLTFRef = useRef<THREE.Group>(null!);
  // useHelper(spotLightRef, THREE.SpotLightHelper, "cyan");
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "yellow");
  const cameraControlsRef = useRef<CameraControls>(null!);

  const [carClickHandler] = useColorChange({
    objects: landRover,
    cameraControlsRef: cameraControlsRef,
  });
  useMaterialInit({ GLTFRef });
  console.log(landRover.scene);

  const [isTurning, setIsTurning] = useState<boolean>(true);
  const [angle, setAngle] = useState<number>(0);
  const dis = 4;

  useEffect(() => {
    cameraControlsRef.current.setTarget(0, 0, 0, false);
    window.addEventListener("click", () => {
      setIsTurning(false);
    });

    return () => {
      window.removeEventListener("click", () => {
        setIsTurning(false);
      });
    };
  });
  useFrame(() => {
    if (isTurning) {
      cameraControlsRef.current.setPosition(
        dis * Math.cos(angle),
        3,
        dis * Math.sin(angle),
        true
      );
      setAngle((prev) => prev + 0.003);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <CameraControls
        ref={cameraControlsRef}
        dollyToCursor={true}
        minDistance={3}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
      />
      <directionalLight
        ref={directionalLightRef}
        position={[7, 7, 7]}
        target-position={[0, 0, 0]}
        intensity={1}
      />
      <spotLight
        ref={spotLightRef}
        color={"white"}
        intensity={50}
        position={[-3, 10, 0]}
        distance={30}
        angle={Math.PI / 4}
        penumbra={0.5}
      />
      <primitive
        position={[0, 0, 0.3]}
        ref={GLTFRef}
        object={landRover.scene}
        onClick={carClickHandler}
      />
      <ContactShadows
        resolution={512}
        scale={15}
        position={[0, 0, 0]}
        blur={0.5}
        opacity={0.8}
      />
    </>
  );
};

export default ShowRoom;
