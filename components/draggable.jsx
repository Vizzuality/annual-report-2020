import React, { useRef, useState } from 'react'
import { useThree } from 'react-three-fiber'
import { useDrag } from 'react-use-gesture'

function DraggableMesh({
  setDraggingPiece,
  position: groupPosition,
  rotation:groupRotation,
  index: pieceIndex,
  category,
}) {
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const bind = useDrag(
    ({ offset: [x, y], first, last }) => {
      const [, , z] = position;
      if (first)
        setDraggingPiece({ index: pieceIndex, category: category.index });
      if (last) setDraggingPiece(null);
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  const scale = [0.2, 0.2, 0.2];
  return (
    <group position={groupPosition}>
      <mesh
        position={position}
        {...bind()}
        ref={ref}
        scale={scale}
        rotation={groupRotation}
      >
        <boxBufferGeometry attach="geometry" args={[1, 3, 1]} />
        <meshLambertMaterial attach="material" color={category.color} />
      </mesh>
      <mesh scale={scale} rotation={groupRotation}>
        <boxBufferGeometry attach="geometry" args={[1, 3, 1]} />
        <meshLambertMaterial
          attach="material"
          color={category.color}
          wireframe
        />
      </mesh>
    </group>
  );
}

export default DraggableMesh
