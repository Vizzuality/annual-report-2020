import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Scene from '../components/scene';
// import Effects from '../components/effects';

const ThreeCanvas = ({
  positionedPieces,
  setPositionedPieces,
  setSelectedPiece
}) => (
  <Canvas
    orthographic
    camera={{ zoom: 100, position: [0, 0, 100] }}
  >
    <Suspense fallback={null}>
      <Scene
        setPositionedPieces={setPositionedPieces}
        positionedPieces={positionedPieces}
        setSelectedPiece={setSelectedPiece}
      />
    </Suspense>
    {/* <Effects /> */}
  </Canvas>
);

export default ThreeCanvas;