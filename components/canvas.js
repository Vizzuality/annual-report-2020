import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Scene from '../components/scene';

const ThreeCanvas = ({ positionedPieces, setPositionedPieces }) => (
  <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 100] }}>
    <Suspense fallback={null}>
      <Scene
        setPositionedPieces={setPositionedPieces}
        positionedPieces={positionedPieces}
      />
    </Suspense>
  </Canvas>
);

export default ThreeCanvas;