import React, { useState, lazy, useEffect, Suspense } from 'react';
import classnames from 'classnames';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { Canvas } from 'react-three-fiber';
import Layout from 'components/layout';
import ModalComponent from 'components/modal';
import Icons from 'components/icons';

import { CATEGORIES } from 'components/layout/constants.js';

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
    }, 1000);
  }, [selectedPiece]);  

  return (
    <div className={styles.container}>
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
        <h1 className={styles.title}>Annual report 2020</h1>
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
        <Icons />
      </main>
    </div>
  );
}
