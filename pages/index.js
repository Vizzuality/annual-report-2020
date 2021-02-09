import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CATEGORIES } from 'components/layout/constants';
import ModalComponent from 'components/modal';
import Main from 'components/main';
import Layout from 'components/layout';
import * as gtag from 'utils/gtag';
import breakpoints from 'utils/breakpoints';

const Index = () => {
  const router = useRouter()
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [allowedSound, setAllowedSound] = useState(false);
  const { query: { reportId, categoryId }} = router;
  const handleClose = () => {
    setSelectedPiece(null);
    router.push('/', '/', { shallow: true })
  };
  const isModalOpen = !!reportId && !!categoryId;

  const [isMobile, setLayout] = useState(false);
  useEffect(() => {
    const handleResize = () => setLayout(window.innerWidth < breakpoints.md);
    window.addEventListener("resize", handleResize);
    setLayout(window.innerWidth < breakpoints.md);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    !!selectedPiece && (
      gtag.event({
        action: 'Reveal story',
        category: 'Story',
        label: `Category: ${selectedPiece.category} - index: ${selectedPiece.index}`,
        value: `Category: ${selectedPiece.category} - index: ${selectedPiece.index}`,
      }));
  }, [selectedPiece]);

  return (
    <>
      {!!reportId && <ModalComponent
        title = {
          categoryId && CATEGORIES[categoryId].title
        }
        isOpen={!!reportId && !!categoryId}
        onRequestClose={handleClose}
      >
        {!!reportId && <Layout
          story={selectedPiece}
          onClose={handleClose}
          isMobile={isMobile}
          allowedSound={allowedSound}
          setAllowedSound={setAllowedSound}
        />}
      </ModalComponent>
      }
      <Main
        isModalOpen={isModalOpen}
        isMobile={isMobile}
        selectedPiece={selectedPiece}
        setSelectedPiece={setSelectedPiece}
        allowedSound={allowedSound}
        setAllowedSound={setAllowedSound}
      />
    </>
  )
}

export default Index;