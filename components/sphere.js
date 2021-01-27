import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import Droppable from './droppable';
import MeshWithWireframe from './mesh-with-wireframe';

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
  const rotationSpeed = 1 / 200;
  const bind = useDrag(
    ({ offset: [y] }) => {
      const [x, , z] = rotation;
      setRotation([x, y * rotationSpeed, z]);
      setSphereRotation([x, y * rotationSpeed, z]);
    },
    { pointerEvents: true }
  );
  return (
    <group {...(!draggingPiece && bind())} rotation={rotation}>
      <MeshWithWireframe
        mesh={
          <mesh attach="mesh" geometry={geometry}>
            <meshMatcapMaterial attach="material" color="#222" />
          </mesh>
        }
        geometry={geometry}
      />
      {droppables &&
        droppables.map((droppable) => {
          const {
            category,
            index,
            position,
            geometry: pieceGeometry
          } = droppable;
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