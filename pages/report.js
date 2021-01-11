import React, { useState, lazy, useEffect, Suspense } from 'react';
import Head from 'next/head';
import styles from '../styles/report.module.css';
// import { Canvas } from 'react-three-fiber';
import Header from 'components/home/header';
import Layout from 'components/layout';
import ModalComponent from 'components/modal';

const Canvas = lazy(() => import('../components/canvas'));

export default function Report() {
  const [hasMounted, setHasMounted] = useState(false);
  const [positionedPieces, setPositionedPieces] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  useEffect(() => setHasMounted(true), []);  
  return (
    <div className={styles.container}>
      <Head className={styles.header}>
        <title>Annual report 2020</title>
      </Head>
      <ModalComponent 
        title={"selectedPiece.category.index.title"}
        isOpen={!!selectedPiece} 
        onRequestClose={() => setSelectedPiece(null)}>
        
        <Layout story={selectedPiece} onClose={setSelectedPiece}/>
              

      </ModalComponent>
 
      <main className={styles.main}>
        <div className={styles.header}>
          <Header />
        </div>
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
      </main>
    </div>
  );
}
