import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Canvas } from 'react-three-fiber';
import Scene from '../components/scene';

export default function Home() {
  const [positionedPieces, setPositionedPieces] = useState(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>Annual report 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Annual report 2020
        </h1>
          {positionedPieces &&
            <div>
              {`Positioned pieces: ${JSON.stringify(positionedPieces)}`}
            </div>
          }
        <div className={styles.canvasContainer}>
          <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 100] }}>
            <Scene
              setPositionedPieces={setPositionedPieces}
              positionedPieces={positionedPieces}
            />
          </Canvas>
        </div>
      </main>
    </div>
  );
}
