import React, { useState, lazy, useEffect, Suspense } from 'react';
import Head from 'next/head';
import styles from '../../styles/home.module.css';
import { useRouter } from 'next/router';
import ProgressBar from 'components/progress-bar';
import SoundButton from 'components/sound-button';
import Music from 'components/music';
import CookieBanner from 'components/cookie-banner';
import ModalComponent from 'components/modal';
import Modal from 'react-modal';
import FinalModal from 'components/final-modal';
import Intro from 'components/intro';
import Icons from 'components/icons';
import cx from 'classnames';
import { CATEGORIES } from 'components/layout/constants.js';

import HomeHeaderDesktop from 'components/home/header-desktop';
import HomeHeaderMobile from 'components/home/header-mobile';

const Canvas = lazy(() => import('components/canvas'));

export default function Main({ isModalOpen, selectedPiece, setSelectedPiece, isMobile, setAllowedSound, allowedSound }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [positionedPieces, setPositionedPieces] = useState(null);

  const [isFinalModalOpen, setFinalModal] = useState(false);
  const [hasShownFinalModal, setHasShownFinalModal] = useState(false);

  const [isReportOpen, setReport] = useState(false);

  const piecesPositioned = !!positionedPieces &&
    Object.values(positionedPieces).filter(p => Object.keys(p).length === 3)

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    let timeout = null;
    if (!!selectedPiece) {
      timeout = setTimeout(() => {
        router.push(`/?categoryId=${selectedPiece.category}&reportId=${selectedPiece.index}`,
        `/report/${selectedPiece.category}/${selectedPiece.index}`, {
          shallow: true
        })
      }, 500);
    }
    return () => (timeout ? clearTimeout(timeout) : undefined);
  }, [selectedPiece]);

  useEffect(() => {
    let timeout = null;
    if (!hasShownFinalModal && piecesPositioned.length === 3 && isReportOpen) {
      timeout = setTimeout(() => {
        setFinalModal(true);
      }, 500);
    }
    return () => (timeout ? clearTimeout(timeout) : undefined);
  }, [piecesPositioned]);

  useEffect(() => {
    Modal.setAppElement(`.${styles.container}`);
  }, []);

  const router = useRouter();

  const handleReport = () => {
    setReport(true);
  };

  const handleFinalModalClose = () => {
    setFinalModal(false);
    setHasShownFinalModal(true);
  };
  const categoryTitle = (!!selectedPiece && CATEGORIES[selectedPiece.category].title) || null;
  return (
    <div className = {
      cx(styles.container, {
        'overflow-auto': !isReportOpen
      })
    }
    >
      <Head>
        <title>Vizzuality Annual report 2020</title>
        <meta name="description" content={`Vizzuality Annual report 2020 ${categoryTitle ? categoryTitle : ''}`} />
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
        title="Congratulations-modal"
        isOpen={isFinalModalOpen && !isModalOpen && isReportOpen}
        onRequestClose={handleFinalModalClose}>
          <FinalModal onClose={handleFinalModalClose} />
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
                isModalOpen={isModalOpen}
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
