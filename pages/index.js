import React, { useState, lazy, useEffect, Suspense } from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.css';
import Layout from 'components/layout';
import ProgressBar from 'components/progress-bar';
import SoundButton from 'components/sound-button';
import Music from 'components/music';
import CookieBanner from 'components/cookie-banner';
import ModalComponent from 'components/modal';
import Modal from 'react-modal';
import RestartModal from 'components/restart-modal';
import Intro from 'components/intro';
import Icons from 'components/icons';
import cx from 'classnames';
import { CATEGORIES } from 'components/layout/constants.js';

import breakpoints from 'utils/breakpoints';

import HomeHeaderDesktop from 'components/home/header-desktop';
import HomeHeaderMobile from 'components/home/header-mobile';

import * as gtag from 'utils/gtag';

const Canvas = lazy(() => import('../components/canvas'));

export default function Report() {
  const [hasMounted, setHasMounted] = useState(false);
  const [positionedPieces, setPositionedPieces] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const [isModalOpen, setModal] = useState(false);
  const [isRestartModalOpen, setRestartModal] = useState(false);

  const [isReportOpen, setReport] = useState(false);
  const [allowedSound, setAllowedSound] = useState(true);

  const [isMobile, setLayout] = useState(false);
  const piecesPositioned = !!positionedPieces && 
    Object.values(positionedPieces).filter(p => Object.keys(p).length === 3)

  useEffect(() => {
    !!selectedPiece && (
      gtag.event({
      action: 'Reveal story',
      category: 'Story',
      label: `Category: ${selectedPiece.category} - index: ${selectedPiece.index}`,
      value: `Category: ${selectedPiece.category} - index: ${selectedPiece.index}`,
    }));

    const handleResize = () => setLayout(window.innerWidth < breakpoints.sm);
    window.addEventListener("resize", handleResize);
    setLayout(window.innerWidth < breakpoints.sm);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedPiece]);

  useEffect(() => {
    setHasMounted(true);
    !!selectedPiece && setTimeout(() => {
      setModal(true);
    }, 500);
  }, [selectedPiece]);

  useEffect(() => {
    setHasMounted(true);
    piecesPositioned.length === 3 && !isReportOpen && setTimeout(() => {
      setRestartModal(true);
    }, 500);
  }, [piecesPositioned]);

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

  const restartApp = () => {
    setPositionedPieces(null);
    setRestartModal(false);
  };

  const handleFinalModalClose = () => {
    setRestartModal(false);
  };

  return (
    <div className = {
      cx(styles.container, {
        'overflow-auto': !isReportOpen
      })
    }
    >
      <Head>
        <title>Annual report 2020</title>
      </Head>
      <Music allowedSound={allowedSound} isReportOpen={isReportOpen} />
      {selectedPiece && !isModalOpen && (
        <>
          <div
            className={styles.circle}
            style={{ backgroundColor: !!selectedPiece && CATEGORIES[selectedPiece.category].color }}>

          </div>
          <div
          className={styles.innerCircle}
          style={
            { backgroundColor: !!selectedPiece && CATEGORIES[selectedPiece.category].color,
              opacity: 1
            }}
          />
        </>
      )}
      <ModalComponent
        title={"selectedPiece.category.index.title"}
        isOpen={isModalOpen}
        onRequestClose={handleClose}>
        <Layout
          story={selectedPiece}
          onClose={handleClose}
          isMobile={isMobile}
          allowedS ound={allowedSound}
          setAllowedSound={setAllowedSound}
        />
      </ModalComponent>
      <ModalComponent
        title="Congratulatiions-modal"
        isOpen={isRestartModalOpen && !isModalOpen && isReportOpen
        }
        onRequestClose={handleFinalModalClose}>
          <RestartModal onClose={handleFinalModalClose} onRestartApp={restartApp} />
      </ModalComponent>
      <main className={styles.main}>
        <div className={styles.noise} />
        {isReportOpen && <ProgressBar positionedPieces={positionedPieces}/>}
        {isReportOpen && !isMobile && <HomeHeaderDesktop />}
        {isReportOpen && !isModalOpen && isMobile && <HomeHeaderMobile />}
        {isReportOpen && !isModalOpen && (
          <SoundButton
            className="-absolute"
            allowedSound={allowedSound}
            setAllowedSound={setAllowedSound}
          />
        )}
        {isReportOpen && !isModalOpen && (
            <a href = "https://www.vizzuality.com/privacy-policy"
            title = "Privacy policy"
            target = "_blank"
            className = {
              styles.privacyLink
            } >
            Privacy policy.
          </a>
        )}
        <CookieBanner />
        <div className={styles.canvasContainer}>
          {hasMounted && (
            <Suspense fallback={null}>
              <Canvas
                positionedPieces={positionedPieces}
                setPositionedPieces={setPositionedPieces}
                setSelectedPiece={setSelectedPiece}
                report={isReportOpen}
                isMobile={isMobile}
              />
            </Suspense>
          )}
        </div>
        <Icons />
        {!isReportOpen && (
          <Intro
            handleReport={handleReport}
            allowedSound={allowedSound}
            setAllowedSound={setAllowedSound}
          />
        )}
      </main>
    </div>
  );
}
