import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import Droppable from './droppable';

function Sphere({
  draggingPiece,
  setPositionedPieces,
  setSelectedPiece,
  positionedPieces,
  setSphereRotation,
  droppables,
  geometry
}) {
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
      <mesh attach="mesh" geometry={geometry}>
        <meshStandardMaterial attach="material" wireframe />
      </mesh>
      <mesh attach="mesh" geometry={geometry}>
        <meshLambertMaterial attach="material" color="#272727" />
      </mesh>
      {droppables &&
        droppables.map((droppable) => {
          const { category, index, position, geometry: pieceGeometry } = droppable;
          return (
            <Droppable
              key={`droppable-${category.index}-${index}`}
              index={index}
              position={position}
              category={category}
              geometry={pieceGeometry}
              setPositionedPieces={setPositionedPieces}
              positionedPieces={positionedPieces}
              draggingPiece={draggingPiece}
              setSelectedPiece={setSelectedPiece}
            />
          );
        })}
    </group>
  );
}

export default Sphere;