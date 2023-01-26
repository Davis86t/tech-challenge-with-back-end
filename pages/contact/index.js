import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Contact.module.css';
import ContactForm from '../../components/contactForm';

// Fetch data for title and lorem section from local database //
export async function getStaticProps() {
  const res = await fetch('http://localhost:8080/api/contactContents');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Contact({ data }) {

  const title = data[0].title
  const content = data[0].content
  const dataArr = content.split('.');

  return (
    <>
      <Head>
        <title>Tech Challenge - Contact</title>
      </Head>
      <section className={styles.mainContainer}>
        <header className={styles.header}>
          <Image
            priority
            src="/images/Logo.png"
            className={styles.logo}
            height={73}
            width={350}
            alt=""
          />
          <p>
            <Link href='/' className={styles.navLink}>home</Link>
          </p>
        </header>
        <section className={styles.body}>
          <div className={styles.leftContainer}>
            <div className={styles.headingOne}>
              {`${title}`}
              <div className={styles.accentLine}></div>
              <p className={styles.leftText}>
                {`${dataArr[0]}${'.'}`}
                <br />
                <br />
                {`${dataArr[1]}${'. '}${dataArr[2]}${'.'}`}
              </p>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h2 className={styles.headingTwo}>
              Heading Two
            </h2>
            <ContactForm />
          </div>
        </section>
      </section>
    </>
  )
}