import React from 'react';
import { useUpdate, extend } from 'react-three-fiber';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import * as THREE from 'three';

extend({ LineMaterial, WireframeGeometry2, Wireframe });

function MeshWithWireframe({
  mesh, geometry, position, rotation, color, renderOrder, linewidth
}) {
  const lines = useUpdate((geo) => geo.fromEdgesGeometry(new THREE.EdgesGeometry(geometry)), []);
  const resolutionRatio = 1;
  const lineWidthRatio = 0.6;
  const resolution = 256 * resolutionRatio;
  const otherProps = { position, rotation, renderOrder };
  return (
    <>
      {mesh}
      <wireframe {...otherProps}>
        <wireframeGeometry2 attach="geometry" ref={lines}/>
        <lineMaterial
          attach="material"
          color={color || "white"}
          linewidth={lineWidthRatio * (resolutionRatio / 5 * (linewidth || 1))}
          resolution={[resolution, resolution]}
        />
      </wireframe>
    </>
  );
};

export default MeshWithWireframe;