import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Scene from '../components/scene';

const ThreeCanvas = ({ positionedPieces, setPositionedPieces, setSelectedPiece, report }) => (
  <Canvas orthographic camera={{ zoom: 150, position: [0, 0, 100] }}>
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

export default ThreeCanvas;