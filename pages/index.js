import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Canvas } from 'react-three-fiber';
import Scene from '../components/scene';

export default function Home() {
  const [won, setWon] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Annual report 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Annual report 2020
          {won && 'You won!!!'}
        </h1>
        <div className={styles.canvasContainer}>
          <Canvas>
            <Scene setWon={setWon} />
          </Canvas>
        </div>
      </main>
    </div>
  );
}
