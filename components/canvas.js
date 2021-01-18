import { Suspense, useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import Scene from '../components/scene';
// import Effects from '../components/effects';

const ThreeCanvas = ({ positionedPieces, setPositionedPieces, setSelectedPiece, report }) => {
  const [innerWidth, setInnerWidth] = useState(null);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  const zoom = innerWidth / 11;

  return innerWidth && (
    <Canvas orthographic camera={{ zoom, position: [0, 0, zoom] }}>
      <Suspense fallback={null}>
        <Scene
          setPositionedPieces={setPositionedPieces}
          positionedPieces={positionedPieces}
          setSelectedPiece={setSelectedPiece}
          report={report}
        />
      </Suspense>
    </Canvas>
  );
};

export default ThreeCanvas;