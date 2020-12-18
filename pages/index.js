import React, { useState, lazy, useEffect, Suspense } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Canvas = lazy(() => import('../components/canvas'));

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  const [positionedPieces, setPositionedPieces] = useState(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>Annual report 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Annual report 2020</h1>
        {positionedPieces && (
          <div>{`Positioned pieces: ${JSON.stringify(positionedPieces)}`}</div>
        )}
        <div className={styles.canvasContainer}>
          {hasMounted && (
            <Suspense fallback={<div>LOADING</div>}>
              <Canvas
                positionedPieces={positionedPieces}
                setPositionedPieces={setPositionedPieces}
              />
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
}
