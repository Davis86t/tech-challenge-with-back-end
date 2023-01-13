import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'Tech Challenge';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon-16x16.png" />
        <meta
          name="description"
          content="A benchmark project to test developer skills"
        />
        <meta
          property="og:image"
          content='/images/techchallenge.png'
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <Image
            priority
            src="/images/logo.png"
            className={styles.logo}
            height={73}
            width={350}
            alt=""
          />
          <Link href='/contact' className={styles.navLink}>contact</Link>
        </>
      </header>
      <main>{children}</main>
    </div>
  );
}