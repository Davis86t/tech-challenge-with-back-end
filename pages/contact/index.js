import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Contact.module.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['300', '500', '700'],
  display: 'swap'
})

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
            <div className={styles.inputContainer}>
              <input className={`${styles.first} ${poppins.className}`} placeholder='First Name' />
              <input className={`${styles.last} ${poppins.className}`} placeholder='Last Name' />
              <input className={`${styles.title} ${poppins.className}`} placeholder='Title' />
              <input className={`${styles.email} ${poppins.className}`} placeholder='Email' />
              <input className={`${styles.message} ${poppins.className}`} placeholder='Message' />
            </div>
            <div className={styles.button}>
              Submit
            </div>
          </div>
        </section>
      </section>
    </>
  )
}