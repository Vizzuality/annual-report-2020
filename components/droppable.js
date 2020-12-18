import React, { useState, useEffect } from 'react';

function Droppable({
  draggingPiece,
  setPositionedPieces,
  positionedPieces,
  position,
  index: dropIndex,
  geometry,
  category
}) {
  const { color } = category;
  const [updatedColor, setColor] = useState(color);
  const isPositioned =
    positionedPieces &&
    positionedPieces[category.index] &&
    positionedPieces[category.index][dropIndex];

  useEffect(() => {
    if (isPositioned) {
      setColor('white')
    } else {
      if (
        draggingPiece &&
        category &&
        dropIndex === draggingPiece.index &&
        category.index === draggingPiece.category
      ) {
        setColor(color);
      } else {
        setColor('black');
      }
    }
  }, [draggingPiece, category]);

  if(!geometry) return null;
  return (
    <group position={position}>
      <mesh
        attach="mesh"
        geometry={geometry}
        onPointerOver={() => {
          if (
            draggingPiece &&
            category &&
            dropIndex === draggingPiece.index &&
            category.index === draggingPiece.category
          ) {
            setPositionedPieces({
              ...positionedPieces,
              [draggingPiece.category]: {
                ...(positionedPieces || {})[draggingPiece.category],
                [draggingPiece.index]: true
              }
            });
          }
        }}
        onPointerOut={() => {
          draggingPiece && setColor(color);
        }}
      >
        <meshLambertMaterial attach="material" color={updatedColor} />
      </mesh>
    </group>
  );
}

export default Droppable;