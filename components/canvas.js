import { Suspense, useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import Scene from '../components/scene';

const ThreeCanvas = ({ positionedPieces, setPositionedPieces, setSelectedPiece, report, isMobile, isModalOpen }) => {
  const [innerWidth, setInnerWidth] = useState(null);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  const zoom = innerWidth / (isMobile ? 6 : 11);
  return innerWidth && (
    <Canvas orthographic resize={{ polyfill: ResizeObserver }}camera={{ zoom, position: [0, 0, zoom] }}>
      <Suspense fallback={null}>
        <Scene
          setPositionedPieces={setPositionedPieces}
          positionedPieces={positionedPieces}
          setSelectedPiece={setSelectedPiece}
          report={report}
          isMobile={isMobile}
          isModalOpen={isModalOpen}
        />
      </Suspense>
    </Canvas>
  );
};

export default ThreeCanvas;