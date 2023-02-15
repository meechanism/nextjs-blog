import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Homepage.module.css';

import { GlobalContext } from '../../pages';

import LightBox from '../Lightbox';

export default () => {
  const { name } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Hello!</h1>

        <LightBox buttonCopy="Clickme" title="You did it">
          <img src="https://via.placeholder.com/150" />
        </LightBox>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Learn more about {name}</p>
          </a>

          <a href="/projects/jokes" className={styles.card}>
            <h3>Jokes &rarr;</h3>
            <p>Come laugh!</p>
          </a>

          <Link href="/posts/first-post" className={styles.card}>
            <h3>Blog &rarr;</h3>
          </Link>

          <Link href="/playground" className={styles.card}>
            <h3>Playground &rarr;</h3>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
