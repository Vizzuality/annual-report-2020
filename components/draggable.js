import React, { useRef, useState } from 'react';
import { useThree } from 'react-three-fiber';
import { useDrag } from 'react-use-gesture';
import Wireframe from './mesh-with-wireframe';

function DraggableMesh({
  setDraggingPiece,
  position: groupPosition,
  rotation:groupRotation,
  index: pieceIndex,
  category,
  positionedPieces,
  geometry,
  rotationCorrection
}) {
  const isPositioned = positionedPieces && positionedPieces[category.index] && positionedPieces[category.index][pieceIndex];

  const isEnabled =
    ((!positionedPieces || !positionedPieces[category.index]) &&
      pieceIndex === 0) ||
    (positionedPieces &&
      positionedPieces[category.index] &&
      positionedPieces[category.index][pieceIndex -1]);

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
  const [cx, cy, cz] = rotationCorrection || [0, 0, 0];
  const finalRotation = [
    groupRotation[0] + Math.PI / 4 + cx,
    groupRotation[1] + Math.PI / 10 + cy,
    Math.PI / 6 + cz
  ];

  return (
    <group position={groupPosition}>
      {!isPositioned && (
        <Wireframe
          mesh={
            <mesh
              position={position}
              {...(isEnabled && bind())}
              ref={ref}
              rotation={finalRotation}
              geometry={geometry}
            >
              <meshLambertMaterial attach="material" color={isEnabled ? category.color : category.disabledColor} />
            </mesh>
          }
          geometry={geometry}
          rotation={finalRotation}
          position={position}
          color="black"
          renderOrder={1}
        />
      )}
      <Wireframe
        rotation={finalRotation}
        color="#CCC"
        geometry={geometry}
        renderOrder={0}
      />
    </group>
  );
}

export default DraggableMesh
