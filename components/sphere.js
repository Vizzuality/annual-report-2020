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
  setAutoRotate,
  autoRotate,
  sphereRotation,
  sphereGroupRef,
  droppables,
  geometry,
  isVisible
}) {
  const rotationSpeed = 1 / 5000;
  const bind = useDrag(
    (state) => {
      const { movement: [dy]} = state;
      const [x, y, z] = sphereRotation;
      if (autoRotate) {
        setAutoRotate(false);
      }
      setSphereRotation([x, y + (dy * rotationSpeed), z]);
    },
    { pointerEvents: true }
  );
  return (
    <group {...(!draggingPiece && bind())} ref={sphereGroupRef} rotation={sphereRotation} visible={isVisible}>
      <MeshWithWireframe
        mesh={
          <mesh attach="mesh" geometry={geometry} onClick={() => autoRotate && setAutoRotate(false)}>
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