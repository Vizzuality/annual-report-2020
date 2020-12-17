import React, { useState } from 'react';

function Droppable({ draggingPiece, setWon, position, index: dropIndex, category }) {
  const { color } = category;
  const [updatedColor, setColor] = useState(color);
  return (
    <mesh
      position={[1, 1, 1]}
      scale={[0.3, 0.3, 0.3]}
      onPointerOver={() => {
        if (
          draggingPiece &&
          category && dropIndex === draggingPiece.index &&
          category.index === draggingPiece.category
        ) {
          setColor('black');
          setWon(true);
        }
      }}
      onPointerOut={() => {
        draggingPiece && setColor(color);
      }}
    >
      <boxBufferGeometry attach="geometry" position={position} args={[1,3,1]}/>
      <meshBasicMaterial attach="material" color={updatedColor} />
    </mesh>
  );
}

export default Droppable;