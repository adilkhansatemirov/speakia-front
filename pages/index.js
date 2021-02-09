import Form from '../components/Form';
import Head from 'next/head';
import styles from '../styles/components/Header.module.scss';

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Speakia.kz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
