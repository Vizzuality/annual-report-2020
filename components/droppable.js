import React, { useState, useEffect } from 'react';

function Droppable({
  draggingPiece,
  setPositionedPieces,
  setSelectedPiece,
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
  const isPieceMatching = draggingPiece &&
    category &&
    dropIndex === draggingPiece.index &&
    category.index === draggingPiece.category
  useEffect(() => {
    if (isPositioned) {
      setColor(category.color);
    } else {
      if (isPieceMatching) {
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
        onClick = {
          () => isPositioned && setSelectedPiece({
            category: category.index,
            index: dropIndex
          })
        }
        onPointerOver={() => {
          if (isPieceMatching) {
            setSelectedPiece({ category: draggingPiece.category, index: draggingPiece.index })
            setPositionedPieces({
              ...positionedPieces,
              [draggingPiece.category]: {
                ...(positionedPieces || {})[draggingPiece.category],
                [draggingPiece.index]: true
              }
            });
          }
        }}
      >
        <meshLambertMaterial attach="material" color={updatedColor} />
      </mesh>
    </group>
  );
}

export default Droppable;