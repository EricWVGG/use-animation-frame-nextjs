import Head from 'next/head'
import { useState } from 'react'
import useAnimationFrame from 'use-animation-frame'
// import useAnimationFrame from 'use-animation-frame-pr'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [time, setTime] = useState(0);
  useAnimationFrame(e => setTime(e.time), []);

  return (
    <div className={styles.container}>
      <Head>
        <title>use-animation-frame test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          use-animation-frame test
        </h1>

        <div>Running for:<br/>{time.toFixed(1)}s</div>

      </main>

    </div>
  )
}
