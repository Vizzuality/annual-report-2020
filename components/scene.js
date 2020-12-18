import React, { useState, Suspense } from 'react'
import DraggableMesh from './draggable'
import Sphere from './sphere'
import { CATEGORIES } from '../constants';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';

const Scene = ({ setPositionedPieces, positionedPieces }) => {
  const [draggingPiece, setDraggingPiece] = useState(false);
  const [sphereRotation, setSphereRotation] = useState([0, 0, 0]);

  const gltf = useLoader(GLTFLoader, '/ball.glb');
  const {
    nodes: { sphere, piece01, piece02, piece03, dpiece01, dpiece02, dpiece03 }
  } = gltf;

  return (
    <>
      <group rotation={[Math.PI / 4, 0, Math.PI / 6]}>
        <Sphere
          draggingPiece={draggingPiece}
          setPositionedPieces={setPositionedPieces}
          positionedPieces={positionedPieces}
          setSphereRotation={setSphereRotation}
          geometry={sphere.geometry}
          droppables={[
            {
              index: 0,
              category: CATEGORIES.buildingKnowledge,
              geometry: piece01.geometry
            },
            {
              index: 1,
              category: CATEGORIES.buildingKnowledge,
              geometry: piece02.geometry
            },
            {
              index: 2,
              category: CATEGORIES.buildingKnowledge,
              geometry: piece03.geometry
            }
          ]}
        />
      </group>
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        position={[3.5, 2, 10]}
        rotation={sphereRotation}
        index={0}
        category={CATEGORIES.buildingKnowledge}
        positionedPieces={positionedPieces}
        geometry={dpiece01.geometry}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        position={[3.5, 0, 10]}
        rotation={sphereRotation}
        index={1}
        category={CATEGORIES.buildingKnowledge}
        positionedPieces={positionedPieces}
        geometry={dpiece02.geometry}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[3.5, -2, 10]}
        index={2}
        category={CATEGORIES.buildingKnowledge}
        positionedPieces={positionedPieces}
        geometry={dpiece03.geometry}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[-3.5, 2, 10]}
        index={0}
        category={CATEGORIES.future}
        positionedPieces={positionedPieces}
        geometry={dpiece01.geometry}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[-3.5, 0, 10]}
        index={1}
        category={CATEGORIES.future}
        positionedPieces={positionedPieces}
        geometry={dpiece02.geometry}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[-3.5, -2, 10]}
        index={2}
        category={CATEGORIES.future}
        positionedPieces={positionedPieces}
        geometry={dpiece03.geometry}
      />
      <ambientLight intensity={0.2} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
    </>
  );
};

export default Scene;