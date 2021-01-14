import React, { useState, lazy, useEffect, Suspense } from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.css';
// import { Canvas } from 'react-three-fiber';
import Header from 'components/home/header';
import Layout from 'components/layout';
import ProgressBar from 'components/progress-bar';
import ModalComponent from 'components/modal';
import Modal from 'react-modal';
import Intro from 'components/intro';
import Icons from 'components/icons';

import { CATEGORIES } from 'components/layout/constants.js';


const Canvas = lazy(() => import('../components/canvas'));

export default function Report() {
  const [hasMounted, setHasMounted] = useState(false);
  const [positionedPieces, setPositionedPieces] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [isModalOpen, setModal] = useState(false);
  const [isReportOpen, setReport] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    !!selectedPiece && setTimeout(() => {
      setModal(true);
    }, 1000);
  }, [selectedPiece]);  

  useEffect(() => {
    Modal.setAppElement(`.${styles.container}`);
  }, []);
  const handleReport = () => {
    setReport(true);
  };

  const handleClose = () => {
    setSelectedPiece(null);
    setModal(false);
  };

  return (
    <div className={styles.container}>
      <Head className={styles.header}>
        <title>Annual report 2020</title>
      </Head>
      {selectedPiece && (
        <div
          className={styles.circle}
          style={{ backgroundColor: CATEGORIES[selectedPiece.category].color}} />
      )}
      <ModalComponent
        title={"selectedPiece.category.index.title"}
        isOpen={isModalOpen} 
        onRequestClose={handleClose}>     
        <Layout story={selectedPiece} onClose={handleClose}/>
      </ModalComponent>
 
      <main className={styles.main}>
      {/* <ProgressBar positionedPieces={positionedPieces}/> */}
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
        <Icons />
        {!isReportOpen && <Intro handleReport={handleReport} />}
      </main>
    </div>
  );
}
