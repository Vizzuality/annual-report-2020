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
import useKeyPress from 'hooks/useKeyPress';
import * as gtag from "utils/gtag";

import HomeHeaderDesktop from 'components/home/header-desktop';
import HomeHeaderMobile from 'components/home/header-mobile';

const Canvas = lazy(() => import('components/canvas'));

export default function Main({ isModalOpen, selectedPiece, setSelectedPiece, isMobile }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [positionedPieces, setPositionedPieces] = useState(null);
  const tabPress = useKeyPress("Tab");
  const [isFinalModalOpen, setFinalModal] = useState(false);
  const [hasShownFinalModal, setHasShownFinalModal] = useState(false);

  const [isReportOpen, setReport] = useState(false);

  const piecesPositioned = !!positionedPieces &&
    Object.values(positionedPieces).filter(p => Object.keys(p).length === 3)

  useEffect(() => {
    if (tabPress && !isReportOpen) {
      setReport(true);
    }
  }, [tabPress]);

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
        gtag.event({
          action: "Open congratulations modal",
          category: "Navigation",
          label: "Congratulations modal reached",
          value: "Congratulations modal",
        });
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
    <div
      className={cx(styles.container, {
        "overflow-auto": !isReportOpen,
      })}
    >
      <Head>
        <title>
          {`Vizzuality Spotlight 2020 ${categoryTitle ? `| ${categoryTitle}` : ''}`}
        </title>
      </Head>
      <Music isReportOpen={isReportOpen} />
      {selectedPiece && !isModalOpen && (
        <>
          <div
            className={styles.circle}
            style={{
              backgroundColor:
                !!selectedPiece && CATEGORIES[selectedPiece.category].color,
            }}
          ></div>
          <div
            className={styles.innerCircle}
            style={{
              backgroundColor:
                !!selectedPiece && CATEGORIES[selectedPiece.category].color,
              opacity: 1,
            }}
          />
        </>
      )}
      <ModalComponent
        title="Congratulations-modal"
        isOpen={isFinalModalOpen && !isModalOpen && isReportOpen}
        onRequestClose={handleFinalModalClose}
      >
        <FinalModal onClose={handleFinalModalClose} />
      </ModalComponent>
      <main className={styles.main}>
        <div className={styles.noise} />
        {isReportOpen && <ProgressBar positionedPieces={positionedPieces} />}
        {!isModalOpen && !isMobile && (
          <HomeHeaderDesktop
            positionedPieces={positionedPieces}
            setSelectedPiece={setSelectedPiece}
            setPositionedPieces={setPositionedPieces}
            isHidden={!isReportOpen}
          />
        )}
        {!isModalOpen && isMobile && (
          <HomeHeaderMobile
            positionedPieces={positionedPieces}
            setSelectedPiece={setSelectedPiece}
            setPositionedPieces={setPositionedPieces}
            isHidden={!isReportOpen}
          />
        )}
        {isReportOpen && !isModalOpen && (
          <SoundButton
            className={cx("-absolute", {
              '-right': !isMobile,
              '-center': isMobile,
            })}
          />
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
          />
        )}
      </main>
    </div>
  );
}
