import React, { useState, useEffect } from 'react';
import Wireframe from './mesh-with-wireframe';

import * as gtag from 'utils/gtag';

function Droppable({
  draggingPiece,
  setPositionedPieces,
  setSelectedPiece,
  positionedPieces,
  position,
  index: dropIndex,
  geometry,
  category,
  materialsRef
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
  }, [draggingPiece, category, isPositioned]);

  if (!geometry) return null;
  return (
    <Wireframe
      geometry={geometry}
      color={isPositioned ? 'white' : color}
      renderOrder={1}
      position={position}
      outline
      linewidth={3}
      materialsRef={materialsRef}
      mesh={
        <mesh
          attach="mesh"
          geometry={geometry}
          position = {
            position
          }
          onClick = {
            () => {
              gtag.event({
                action: 'Reveal story',
                category: 'Stories',
                label: `Category - ${category.title}, Story - ${dropIndex + 1}`,
                value: `Category - ${category.title}, Story - ${dropIndex + 1}`
              })
              return (
                isPositioned && setSelectedPiece({
                  category: category.index,
                  index: dropIndex
                })
              )
            }
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
          <meshMatcapMaterial attach = "material"
            color = {updatedColor}
            ref = {(reference) => materialsRef && materialsRef.current.add(reference)}
          />
        </mesh>
      }
    />
  );
}

export default Droppable;