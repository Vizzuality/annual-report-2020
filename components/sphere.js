import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import Droppable from './droppable';

function Sphere({ draggingPiece, setWon, setSphereRotation, droppables }) {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const bind = useDrag(
    ({ offset: [y] }) => {
      const [x, , z] = rotation;
      setRotation([x, y / 10, z]);
      setSphereRotation([x, y / 10, z]);
    },
    { pointerEvents: true }
  );

  return (
    <group {...(!draggingPiece && bind())} rotation={rotation}>
      <mesh
        attach="mesh"
        onPointerMove={(e) => {
          // console.log('sphere', e.distance, e.point.z, e.face.a);
        }}
      >
        <icosahedronBufferGeometry attach="geometry" args={[2, 3, 2]} />
        <meshStandardMaterial attach="material" wireframe />
      </mesh>
      {droppables && droppables.map(droppable => {
        const { category, index, position } = droppable;
        return (
          <Droppable
            key={`${category}-${index}`}
            index={index}
            position={position}
            category={category}
            setWon={setWon} draggingPiece={draggingPiece} />
        );
      })}
    </group>
  );
}

export default Sphere;