import React, { useState, lazy, useEffect, Suspense } from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.css';
import Header from 'components/home/header';
import Layout from 'components/layout';
import ProgressBar from 'components/progress-bar';
import ModalComponent from 'components/modal';
import Modal from 'react-modal';
import Intro from 'components/intro';
import Icons from 'components/icons';
import debounce from 'lodash/debounce';
import cx from 'classnames';
import { CATEGORIES } from 'components/layout/constants.js';
import useSound from 'use-sound';
import openAudio from '../sounds/open.mp3'

const Canvas = lazy(() => import('../components/canvas'));

export default function Report() {
  const [hasMounted, setHasMounted] = useState(false);
  const [positionedPieces, setPositionedPieces] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [isModalOpen, setModal] = useState(false);
  const [isReportOpen, setReport] = useState(false);
    const [play] = useSound(openAudio);
  useEffect(() => {
    setHasMounted(true);
    if (!!selectedPiece) {
      debounce(() => play(), 100)();
      setTimeout(() => {
        setModal(true);
      }, 500);
    }
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
    <div className = {cx(styles.container, { '-intro': isReportOpen })}>
      <Head>
        <title>Annual report 2020</title>
      </Head>
      {selectedPiece && (
        <div
          className={styles.circle}
          style={{ backgroundColor: CATEGORIES[selectedPiece.category].color }}>
            <div
              className={styles.innerCircle}
              style={
                { backgroundColor: CATEGORIES[selectedPiece.category].color,
                  opacity: 1
                }}
            />
        </div>
      )}
      <ModalComponent
        title={"selectedPiece.category.index.title"}
        isOpen={isModalOpen}
        onRequestClose={handleClose}>
        <Layout story={selectedPiece} onClose={handleClose}/>
      </ModalComponent>
      <main className={styles.main}>
        {isReportOpen && <ProgressBar positionedPieces={positionedPieces}/>}
        {isReportOpen && (
          <div className={styles.header}>
              <Header />
          </div>
        )}
        <div className={styles.canvasContainer}>
          {hasMounted && (
            <Suspense fallback={null}>
              <Canvas
                positionedPieces={positionedPieces}
                setPositionedPieces={setPositionedPieces}
                setSelectedPiece={setSelectedPiece}
                report={isReportOpen}
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
