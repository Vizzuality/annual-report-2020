import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ModalComponent from 'components/modal';
import Layout from 'components/layout';
import { CATEGORIES } from 'components/layout/constants';
import Icons from 'components/icons';
import breakpoints from 'utils/breakpoints';

// This route is a fallback for SEO for the modal pages as the normal render won't render the modals on reload.
// It doesn't contain the sound button and it will redirect to the start when closed

const ReportPage = ({ reportId, categoryId }) => {
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleClose = () => router.push('/');
  const selectedPiece = { category: categoryId, index: reportId };

  useEffect(() => {
    !!categoryId && !!reportId && (
      gtag && gtag.event && gtag.event({
        action: 'Reveal individual story',
        category: 'Story',
        label: `Category: ${categoryId} - index: ${reportId}`,
        value: `Category: ${categoryId} - index: ${reportId}`,
      }));
  }, [categoryId]);

  const [isMobile, setLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => setLayout(window.innerWidth < breakpoints.sm);
    window.addEventListener("resize", handleResize);
    setLayout(window.innerWidth < breakpoints.sm);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Vizzuality Annual report 2020 - {CATEGORIES[categoryId].title}</title>
        <meta name="description" content={`Vizzuality Annual report 2020 - ${CATEGORIES[categoryId].title}`} />
      </Head>
      <ModalComponent
        title={CATEGORIES[categoryId].title}
        isOpen={true}
        onRequestClose={handleClose}
      >
        <Layout
          story={selectedPiece}
          onClose={handleClose}
          isMobile={isMobile}
        />
      </ModalComponent>
      <Icons />
    </>
  )
}



export default ReportPage

export function getStaticProps({ params: { reportId, categoryId } }) {
  return { props: { reportId, categoryId } }
}

export function getStaticPaths() {
  return {
    paths: [0,1,2].map((reportId) => (
      [0,1,2].map(categoryId => ({
        params: {
          reportId: reportId.toString(),
          categoryId: categoryId.toString()
        }
      }))
    )).flat(),
    fallback: false
  };
}