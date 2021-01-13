import React, { useRef, useState } from 'react'
import { useThree } from 'react-three-fiber'
import { useDrag } from 'react-use-gesture'

function DraggableMesh({
  setDraggingPiece,
  position: groupPosition,
  rotation:groupRotation,
  index: pieceIndex,
  category,
  positionedPieces,
  geometry
}) {
  const isPositioned = positionedPieces && positionedPieces[category.index] && positionedPieces[category.index][pieceIndex];
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(
    (props) => {
      const {
        offset: [x, y],
        first,
        last
      } = props;
      const [, , z] = position;
      if (first) {
        setDraggingPiece({ index: pieceIndex, category: category.index });
      }
      if (last) {
        setDraggingPiece(null);
      }
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  // TODO: Not final. Just aprox.
  const finalRotation = [
    groupRotation[0] + Math.PI / 4,
    groupRotation[1],
    Math.PI / 6
  ];

  return (
    <group position={groupPosition}>
      {!isPositioned && (
        <mesh
          position={position}
          {...bind()}
          ref={ref}
          rotation={finalRotation}
          geometry={geometry}
        >
          <meshLambertMaterial attach="material" color={category.color} />
        </mesh>
      )}
      <mesh rotation={finalRotation} geometry={geometry}>
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
