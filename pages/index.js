import React, { useState, lazy, useEffect, Suspense } from 'react';
import classnames from 'classnames';
import Head from 'next/head'
import styles from '../styles/report.module.css'
// import { Canvas } from 'react-three-fiber';
import Layout from 'components/layout';
import ModalComponent from 'components/modal';
import Intro from 'components/intro';

import { CATEGORIES } from 'components/layout/constants.js';
import ProgressBar from 'components/progress-bar';

const Canvas = lazy(() => import('../components/canvas'));

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [positionedPieces, setPositionedPieces] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [isOpen, setTransition] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    !!selectedPiece && setTimeout(() => {
      setTransition(true);
    }, 2000);
  }, [selectedPiece]);  

  return (
    <div>
      <Head>
        <title>Annual report 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {selectedPiece && !isOpen && (
        <div
          className={styles.circle}
          style={{ backgroundColor: CATEGORIES[selectedPiece.category].color}} />
      )}
      <ModalComponent
        title={"selectedPiece.category.index.title"}
        isOpen={isOpen}
        onRequestClose={() => setSelectedPiece(null)}>
          <Layout story={selectedPiece} onClose={setSelectedPiece}/>
      </ModalComponent>

      <main className={styles.main}>
        <ProgressBar positionedPieces={positionedPieces}/>
        {positionedPieces && (
          <div>
            {`Positioned pieces: ${JSON.stringify(positionedPieces)}`}
            {selectedPiece && `Selected piece: ${selectedPiece}`}
          </div>
        )}
        <div className={styles.canvasContainer}>
          {hasMounted && (
            <Suspense fallback={<div>LOADING</div>}>
              <Canvas
                positionedPieces={positionedPieces}
                setPositionedPieces={setPositionedPieces}
                setSelectedPiece={setSelectedPiece}
              />
            </Suspense>
          )}
        </div>
        <Intro />
      </main>
    </div>
  );
}
