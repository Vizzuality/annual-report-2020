import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';

function Sphere({ draggingPiece, setWon }) {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [color, setColor] = useState('blue');
  const bind = useDrag(
    ({ offset: [y] }) => {
      const [x, , z] = rotation;
      setRotation([x, y / 10, z]);
    },
    { pointerEvents: true }
  );

  return (
    <group {...(!draggingPiece && bind())} rotation={rotation}>
      <mesh
        attach="mesh"
        onPointerMove={(e) => {
          console.log('sphere', e.distance, e.point.z, e.face.a);
        }}
      >
        <icosahedronBufferGeometry attach="geometry" args={[2, 3, 2]} />
        <meshStandardMaterial attach="material" wireframe />
      </mesh>
      <mesh
        position={[1, 1, 1]}
        scale={[0.3, 0.3, 0.3]}
        onPointerOver={() => {
          // TODO: Create collission with piece position and not cursor
          draggingPiece && setColor('yellow');
          setWon(true);
        }}
        onPointerOut={() => {
          draggingPiece && setColor('blue');
        }}
      >
        <boxBufferGeometry attach="geometry" position={[100, 0, 40]} />
        <meshBasicMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
}

export default Sphere;