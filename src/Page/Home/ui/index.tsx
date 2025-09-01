const ShowRoom = () => {
  return (
    <>
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
    </>
  );
};

export default ShowRoom;
