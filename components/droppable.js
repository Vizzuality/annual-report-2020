import React, { useState, useEffect } from 'react';

function Droppable({
  draggingPiece,
  setPositionedPieces,
  positionedPieces,
  position,
  index: dropIndex,
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
        setColor('red');
      } else {
        setColor(color);
      }
    }
  }, [draggingPiece, category]);

  return (
    <group position={position}>
      <mesh
        position={[1, 1.5, 1]}
        scale={[0.3, 0.3, 0.3]}
        onPointerOver={() => {
          if (
            draggingPiece &&
            category &&
            dropIndex === draggingPiece.index &&
            category.index === draggingPiece.category
          ) {
            setColor('black');
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
        <boxBufferGeometry attach="geometry" args={[1, 3, 1]} />
        <meshLambertMaterial attach="material" color={updatedColor} />
      </mesh>
    </group>
  );
}

export default Droppable;