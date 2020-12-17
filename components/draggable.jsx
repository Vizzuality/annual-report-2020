import React, { useRef, useState } from 'react'
import { useThree } from 'react-three-fiber'
import { useDrag } from 'react-use-gesture'

function DraggableMesh({ setDraggingPiece }) {
  const ref = useRef()
  const [position, setPosition] = useState([0, 0, 0])
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  const bind = useDrag(
    ({ offset: [x, y], first, last }) => {
      const [, , z] = position
      if (first) setDraggingPiece(true)
      if (last) setDraggingPiece(false)
      setPosition([x / aspect, -y / aspect, z])
    },
    { pointerEvents: true }
  )

  return (
    <mesh position={position} {...bind()} ref={ref} scale={[0.3, 0.3, 0.3]}>
      <dodecahedronBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  )
}

export default DraggableMesh
