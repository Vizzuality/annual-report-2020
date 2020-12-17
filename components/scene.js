import React, { useState } from 'react'
import DraggableMesh from './draggable'
import Sphere from './sphere'

const Scene = ({ setWon }) => {
  const [draggingPiece, setDraggingPiece] = useState(false)
  return (
    <>
      <Sphere draggingPiece={draggingPiece} setWon={setWon} />
      <group position={[3, 1.5, 1]}>
        <DraggableMesh setDraggingPiece={setDraggingPiece} />
      </group>
      <ambientLight intensity={0.2} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
    </>
  )
}

export default Scene;