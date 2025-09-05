import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { GLTF } from "three/examples/jsm/Addons.js";

type UseColorChangeProps = {
  objects: GLTF; // GLTF는 scene 프로퍼티를 가지고 있음
}
const useColorChange = (props: UseColorChangeProps) => {
  const { objects } = props;
  const { raycaster, pointer, camera } = useThree();
  const colorChangeClickHandler = () => {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(objects.scene.children, true);

    if (intersects.length > 0) {
      const obj = intersects[0].object as THREE.Mesh;
      const material = obj.material as THREE.MeshPhysicalMaterial;
      const clonedMaterial = material.clone();
      clonedMaterial.color = new THREE.Color(
        Math.random(),
        Math.random(),
        Math.random()
      );
      obj.material = clonedMaterial;
    }
  };

  return [colorChangeClickHandler];
};

export default useColorChange;
