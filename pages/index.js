import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import getUniqueArr from '../components/jsPuzzle';
import Link from 'next/link';

export default function Home() {

  //-----JS PUZZLE-----//
  const [clicked, setClicked] = useState(false);
  const [puzzArray, setPuzzArray] = useState([]);

  const array1 = ['Matt Johnson', 'Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm']
  const array2 = ['Matt Johnson', 'Bart Paden', 'Jordan Heigle', 'Jordan Heigle', 'Tyler Viles']
  const uniqueArray = getUniqueArr(array1, array2);

  function clickHandler() {
    setClicked(true);
    setPuzzArray(uniqueArray);
    if (clicked) {
      alert("Link has already been clicked! \nPlease see answer below.")
    }
  }
  //AUTO SCROLL TO SHOW PUZZLE ANSWER ON CLICK
  const bottomRef = useRef();
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [clicked])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.cardContainer}>
        <div className={styles.centerCards}>
          <Image
            priority
            src='/images/talkie.png'
            className={styles.talkie}
            height={106}
            width={51}
            alt=''
          />
          <p className={styles.cardTitle}>Heading Two</p>
          <p className={styles.cardText}>Integer accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus.</p>
          <Link href='/contact' className={styles.button}>
            <p>Learn More</p>
          </Link>
        </div>
        <div className={styles.centerCards}>
          <Image
            priority
            src='/images/rabbit.png'
            className={styles.rabbit}
            height={62}
            width={103}
            alt=''
          />
          <p className={styles.cardTitle}>Heading Two</p>
          <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          <Link href='/contact' className={styles.button}>
            <p>Learn More</p>
          </Link>
        </div>
        <div className={styles.centerCards}>
          <Image
            priority
            src='/images/shield.png'
            className={styles.shield}
            height={98}
            width={98}
            alt=''
          />
          <p className={styles.cardTitle}>Heading Two</p>
          <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          <Link href='/contact' className={styles.button}>
            <p>Learn More</p>
          </Link>
        </div>
      </section>
      <section className={styles.jsPuzzle}>
        <div className={styles.headingOne}>
          <div>Heading One</div>
          <div className={styles.accentLine}></div>
        </div>
        <div className={styles.puzzleContainer}>
          <article className={styles.puzzleText}>Remove the duplicates in 2 Javascript arrays (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when
            <p onClick={clickHandler} className={styles.puzzleLink}>
              &nbsp; this link &nbsp;
            </p>
            is clicked. If the operation has been completed already, notify the user that this has already been done.
          </article>
          {clicked ? (
            <>
              <ul className={styles.puzzleText}>
                {puzzArray.map((name) => {
                  return (
                    <li key={name} ref={bottomRef}>{name}</li>
                  )
                })}
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </Layout>
  );
}