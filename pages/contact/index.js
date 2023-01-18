import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Contact.module.css';
import ContactForm from '../../components/contactForm';

export default function Contact() {

  return (
    <>
      <Head>
        <title>Tech Challenge - Contact</title>
      </Head>
      <section className={styles.mainContainer}>
        <header className={styles.header}>
          <Image
            priority
            src="/images/logo.png"
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
              Heading One
              <div className={styles.accentLine}></div>
              <p className={styles.leftText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.
                <br />
                <br />
                Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.
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