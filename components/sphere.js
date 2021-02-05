import React, { useRef } from 'react';
import { useDrag } from 'react-use-gesture';
import Droppable from './droppable';
import MeshWithWireframe from './mesh-with-wireframe';
import { useFrame } from 'react-three-fiber';

let opacity = 0;

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
  const fadeInMaterialsRefs = useRef(new Set());

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

  useFrame(() => {
    if (isVisible && opacity < 1 && fadeInMaterialsRefs.current) {
      opacity += 0.01;
      fadeInMaterialsRefs.current.forEach(materialRef => {
        if (materialRef) {
          if (!materialRef.transparent) {
            materialRef.transparent = true;
          }
          materialRef.opacity = opacity;
        }
      })
    }
  });

  return (
    <group {...(!draggingPiece && bind())} ref={sphereGroupRef} rotation={sphereRotation} visible={isVisible}>
      <MeshWithWireframe
        mesh={
          <mesh attach="mesh" geometry={geometry} onClick={() => autoRotate && setAutoRotate(false)}>
            <meshMatcapMaterial
              attach="material"
              ref = {reference => fadeInMaterialsRefs.current.add(reference)}
              color="#222"
            />
          </mesh>
        }
        geometry={geometry}
        materialsRef={fadeInMaterialsRefs}
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
              materialsRef={fadeInMaterialsRefs}
            />
          );
        })}
    </group>
  );
}

export default Sphere;