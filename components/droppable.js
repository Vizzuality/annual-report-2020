import React, { useState, useEffect } from 'react';
import Wireframe from './mesh-with-wireframe';

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
    category.index === draggingPiece.category;

  useEffect(() => {
    if (isPositioned) {
      setColor(category.color);
    } else {
      if (isPieceMatching) {
        setColor(color);
      } else {
        setColor('#222');
      }
    }
  }, [draggingPiece, category]);

  if (!geometry) return null;
  return (
    <Wireframe
      geometry={geometry}
      color={isPositioned ? 'white' : color}
      renderOrder={1}
      position={position}
      outline
      linewidth={3}
      mesh={
        <mesh
          attach="mesh"
          geometry={geometry}
          position = {
            position
          }
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
          <meshMatcapMaterial attach="material" color={updatedColor} />
        </mesh>
      }
    />
  );
}

export default Droppable;