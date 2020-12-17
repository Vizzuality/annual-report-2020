import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import Droppable from './droppable';

function Sphere({
  draggingPiece,
  setPositionedPieces,
  positionedPieces,
  setSphereRotation,
  droppables
}) {
  const [rotation, setRotation] = useState([0, 0, Math.PI / 4]);
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
      >
        <icosahedronBufferGeometry attach="geometry" args={[2, 3, 2]} />
        <meshStandardMaterial attach="material" wireframe />
      </mesh>
      <mesh
        attach="mesh"
      >
        <icosahedronBufferGeometry attach="geometry" args={[2, 3, 2]} />
        <meshLambertMaterial attach="material" color="#272727" />
      </mesh>
      {droppables &&
        droppables.map((droppable) => {
          const { category, index, position } = droppable;
          return (
            <Droppable
              key={`droppable-${category.index}-${index}`}
              index={index}
              position={position}
              category={category}
              setPositionedPieces={setPositionedPieces}
              positionedPieces={positionedPieces}
              draggingPiece={draggingPiece}
            />
          );
        })}
    </group>
  );
}

export default Sphere;