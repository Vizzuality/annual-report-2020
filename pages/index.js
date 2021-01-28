import React, { useState, lazy, useEffect, Suspense } from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.css';
import HeaderIntro from 'components/home/header';
import Layout from 'components/layout';
import ProgressBar from 'components/progress-bar';
import SoundButton from 'components/sound-button';
import ModalComponent from 'components/modal';
import Modal from 'react-modal';
import Intro from 'components/intro';
import Icons from 'components/icons';
import debounce from 'lodash/debounce';
import cx from 'classnames';
import { CATEGORIES } from 'components/layout/constants.js';
import useSound from 'use-sound';
import openAudio from '../sounds/open.mp3'
import breakpoints from 'utils/breakpoints';

import Download from 'components/download';
import SocialMedia from 'components/social-media';

const Canvas = lazy(() => import('../components/canvas'));

export default function Report() {
  const [hasMounted, setHasMounted] = useState(false);
  const [positionedPieces, setPositionedPieces] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [isModalOpen, setModal] = useState(false);
  const [isReportOpen, setReport] = useState(false);
  const [allowedSound, setAllowedSound] = useState(true);
  const [play] = useSound(openAudio, { soundEnabled: allowedSound });
  const [isMobile, setLayout] = useState(false);

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
    <div className = {
      cx(styles.container, {
        'overflow-auto': !isReportOpen
      })
    }>
      <Head>
        <title>Annual report 2020</title>
      </Head>
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
          allowedSound={allowedSound}
          setAllowedSound={setAllowedSound}
        />
      </ModalComponent>
      <main className={styles.main}>
        <div className={styles.noise} />
        {isReportOpen && <ProgressBar positionedPieces={positionedPieces}/>}
        {isReportOpen && (
          <div className={styles.header}>
            <HeaderIntro isMobile={isMobile} />
            <Download isMobile={isMobile} />
            <SocialMedia isMobile={isMobile}/>
          </div>
        )}
        {isReportOpen && <SoundButton allowedSound={allowedSound} setAllowedSound={setAllowedSound} />}
        <a href="https://www.vizzuality.com/privacy-policy" title="Privacy policy" target="_blank" className={styles.privacyLink}>
          Privacy policy.
        </a>
        <SoundButton allowedSound={allowedSound} setAllowedSound={setAllowedSound}/>
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
