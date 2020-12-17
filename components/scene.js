import React, { useState } from 'react'
import DraggableMesh from './draggable'
import Sphere from './sphere'
import { CATEGORIES } from '../constants';
const Scene = ({ setWon }) => {
  const [draggingPiece, setDraggingPiece] = useState(false)
  const [sphereRotation, setSphereRotation] = useState([0, 0, 0])
  return (
    <>
      <Sphere
        draggingPiece={draggingPiece}
        setWon={setWon}
        setSphereRotation={setSphereRotation}
        droppables={[
          {
            position: [100, 0, 40],
            index: 1,
            category: CATEGORIES.buildingKnowledge
          }
        ]}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        position={[3.5, 2, 10]}
        rotation={sphereRotation}
        index={0}
        category={CATEGORIES.buildingKnowledge}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        position={[3.5, 0, 10]}
        rotation={sphereRotation}
        index={1}
        category={CATEGORIES.buildingKnowledge}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[3.5, -2, 10]}
        index={2}
        category={CATEGORIES.buildingKnowledge}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[-3.5, 2, 10]}
        index={0}
        category={CATEGORIES.future}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[-3.5, 0, 10]}
        index={1}
        category={CATEGORIES.future}
      />
      <DraggableMesh
        setDraggingPiece={setDraggingPiece}
        rotation={sphereRotation}
        position={[-3.5, -2, 10]}
        index={2}
        category={CATEGORIES.future}
      />
      <ambientLight intensity={0.2} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
    </>
  );
}

export default Scene;