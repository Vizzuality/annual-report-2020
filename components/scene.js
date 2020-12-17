import React, { useState } from 'react'
import DraggableMesh from './draggable'
import Sphere from './sphere'
import { CATEGORIES } from '../constants';
const Scene = ({ setPositionedPieces, positionedPieces }) => {
  const [draggingPiece, setDraggingPiece] = useState(false);
  const [sphereRotation, setSphereRotation] = useState([0, 0, 0]);
  return (
    <>
      <group rotation={[Math.PI / 4, Math.PI / 8, Math.PI / 8]}>
        <Sphere
          draggingPiece={draggingPiece}
          setPositionedPieces={setPositionedPieces}
          positionedPieces={positionedPieces}
          setSphereRotation={setSphereRotation}
          droppables={[
            {
              position: [0, 0, 0],
              index: 0,
              category: CATEGORIES.buildingKnowledge
            },
            {
              position: [0, 0, -1],
              index: 0,
              category: CATEGORIES.future
            },
            {
              position: [1, 0, 0],
              index: 1,
              category: CATEGORIES.buildingKnowledge
            },
            {
              position: [1, 0, -1],
              index: 1,
              category: CATEGORIES.future
            },
            {
              position: [0.5, 0, 0],
              index: 2,
              category: CATEGORIES.buildingKnowledge
            },
            {
              position: [0.5, 0, -1],
              index: 2,
              category: CATEGORIES.future
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
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        position={[3.5, 0, 10]}
        rotation={sphereRotation}
        index={1}
        category={CATEGORIES.buildingKnowledge}
        positionedPieces={positionedPieces}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[3.5, -2, 10]}
        index={2}
        category={CATEGORIES.buildingKnowledge}
        positionedPieces={positionedPieces}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[-3.5, 2, 10]}
        index={0}
        category={CATEGORIES.future}
        positionedPieces={positionedPieces}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[-3.5, 0, 10]}
        index={1}
        category={CATEGORIES.future}
        positionedPieces={positionedPieces}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[-3.5, -2, 10]}
        index={2}
        category={CATEGORIES.future}
        positionedPieces={positionedPieces}
      />
      <ambientLight intensity={0.2} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
    </>
  );
};

export default Scene;