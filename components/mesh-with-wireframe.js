import React from 'react';
import { useUpdate, extend } from 'react-three-fiber';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';

import * as THREE from 'three';

extend({ LineMaterial, WireframeGeometry2, Wireframe });

function MeshWithWireframe({
  mesh, geometry, rotation, color
}) {
  const lines = useUpdate((geo) => geo.fromEdgesGeometry(new THREE.EdgesGeometry(geometry)), []);
  const resolutionRatio = 1;
  const resolution = 256 * resolutionRatio;
  return (
  <>
    {mesh}
    <wireframe >
      <wireframeGeometry2 attach="geometry" ref={lines} />
      <lineMaterial
        attach="material"
        color={color || "white"}}
        linewidth={resolutionRatio / 5}
        resolution={[resolution, resolution]}
      />
    </wireframe>
  </>
  );
}

export default MeshWithWireframe;