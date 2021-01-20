import React, { useState } from 'react'
import DraggableMesh from './draggable'
import Sphere from './sphere'
import { CATEGORIES } from '../constants';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';

const Scene = ({ setPositionedPieces, positionedPieces, setSelectedPiece, report, isMobile }) => {
  const [draggingPiece, setDraggingPiece] = useState(false);
  const [sphereRotation, setSphereRotation] = useState([0, 0, 0]);

  const gltf = useLoader(GLTFLoader, '/geometries.glb');
  const {
    nodes: {
      sphere,
      piece01,
      piece02,
      piece03,
      piece11,
      piece12,
      piece13,
      piece21,
      piece22,
      piece23,
      dpiece01,
      dpiece02,
      dpiece03,
      dpiece11,
      dpiece12,
      dpiece13,
      dpiece21,
      dpiece22,
      dpiece23
    }
  } = gltf;

  const draggables = [
    {
      index: 0,
      category: CATEGORIES.buildingKnowledge,
      position: [3.5, 2],
      positionMobile: [2, 2.5],
      rotationCorrection: [Math.PI / 12, Math.PI / 12, - Math.PI / 4],
      geometry: piece01.geometry
    },
    {
      index: 1,
      category: CATEGORIES.buildingKnowledge,
      position: [-3.5, 0],
      positionMobile: [0, -2.75],
      rotationCorrection: [Math.PI / 6, 0, -Math.PI / 3.5],
      geometry: piece02.geometry
    },
    {
      index: 2,
      category: CATEGORIES.buildingKnowledge,
      position: [3.5, -0.5],
      positionMobile: [-2, 2.5],
      rotationCorrection: [Math.PI / 6, 0, - Math.PI / 6],
      geometry: piece03.geometry
    },
    {
      index: 0,
      category: CATEGORIES.future,
      position: [-3.5, 2],
      positionMobile: [-0.5, 2.5],
      rotationCorrection: [-Math.PI / 12, -Math.PI / 12, 0],
      geometry: piece11.geometry
    },
    {
      index: 1,
      category: CATEGORIES.future,
      position: [-3.5, -2],
      positionMobile: [2, -2.5],
      rotationCorrection: [Math.PI / 12, 0, -Math.PI / 12],
      geometry: piece12.geometry
    },
    {
      index: 2,
      category: CATEGORIES.future,
      position: [-4.5, -1],
      positionMobile: [-2,-2.5],
      rotationCorrection: [Math.PI / 12, - Math.PI / 12, -Math.PI / 12],
      geometry: piece13.geometry
    },
    {
      index: 0,
      category: CATEGORIES.whatever,
      position: [4.5, 1],
      positionMobile: [-1, -3.5],
      rotationCorrection: [Math.PI / 12, -Math.PI / 12, Math.PI / 12],
      geometry: piece21.geometry
    },
    {
      index: 1,
      category: CATEGORIES.whatever,
      position: [-4.5, 1],
      positionMobile: [1, -3.5],
      rotationCorrection: [- Math.PI / 12, - Math.PI / 3.5, - Math.PI / 2.5],
      geometry: piece22.geometry
    },
    {
      index: 2,
      category: CATEGORIES.whatever,
      position: [4, -2],
      positionMobile: [1, 2.5],
      rotationCorrection: [0, -Math.PI / 10, -Math.PI / 3],
      geometry: piece23.geometry
    },
  ];

  const droppables = [{
      index: 0,
      category: CATEGORIES.buildingKnowledge,
      geometry: dpiece01.geometry
    },
    {
      index: 1,
      category: CATEGORIES.buildingKnowledge,
      geometry: dpiece02.geometry
    },
    {
      index: 2,
      category: CATEGORIES.buildingKnowledge,
      geometry: dpiece03.geometry
    },
    {
      index: 0,
      category: CATEGORIES.future,
      geometry: dpiece11.geometry
    },
    {
      index: 1,
      category: CATEGORIES.future,
      geometry: dpiece12.geometry
    },
    {
      index: 2,
      category: CATEGORIES.future,
      geometry: dpiece13.geometry
    },
    {
      index: 0,
      category: CATEGORIES.whatever,
      geometry: dpiece21.geometry
    },
    {
      index: 1,
      category: CATEGORIES.whatever,
      geometry: dpiece22.geometry
    },
    {
      index: 2,
      category: CATEGORIES.whatever,
      geometry: dpiece23.geometry
    }
  ];


  return (
    <>
      <group rotation = {
        [Math.PI / 4, 0, Math.PI / 6]
      }>
        {report && (
        <Sphere
          draggingPiece={draggingPiece}
          setPositionedPieces={setPositionedPieces}
          positionedPieces={positionedPieces}
          setSphereRotation={setSphereRotation}
          setSelectedPiece={setSelectedPiece}
          geometry={sphere.geometry}
          droppables={droppables}
        />)}
      </group>
      {draggables.map(d => (
        <DraggableMesh
          setDraggingPiece={setDraggingPiece}
          rotation={sphereRotation}
          position = {
            [...d[isMobile ? 'positionMobile' : 'position'], 10]
          }
          index={d.index}
          category={d.category}
          positionedPieces={positionedPieces}
          geometry={d.geometry}
          rotationCorrection = {
            d.rotationCorrection
          }
        />
      ))}
      <ambientLight intensity={0.2} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
    </>
  );
};

export default Scene;