import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['300', '500', '700'],
  display: 'swap'
})

export default function ContactForm() {

  const [invalid, setInvalid] = useState(false);
  const [emailCont, setEmailCont] = useState('');

  function handleChange(e) {
    let val = e.target.value;
    setEmailCont(val);
    setInvalid(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (emailCont == '') {
      setInvalid(true);
    } else {
      setEmailCont('');
    }
  }

  return (
    <form id={'contactForm'}>
      <div className={styles.inputContainer} id={'contactForm'}>
        <input
          className={`${styles.first} ${poppins.className}`}
          placeholder='First Name'
          name='first_name'
        />
        <input
          className={`${styles.last} ${poppins.className}`}
          placeholder='Last Name'
          name='last_name'
        />
        <input
          className={`${styles.title} ${poppins.className}`}
          placeholder='Title'
          name='title'
        />
        <input
          className={`${styles.email} ${poppins.className} ${invalid ? styles.emailInvalid : ''}`}
          placeholder='Email'
          name='email'
          value={emailCont}
          onChange={handleChange}
          required
        />
        <input
          className={`${styles.message} ${poppins.className}`}
          placeholder='Message'
          name='message'
        />
      </div>
      <button
        className={styles.button}
        onClick={handleSubmit}
        type='submit'
        formNoValidate
      >
        Submit
      </button>
      {invalid ? (
        <>
          <p className={styles.invalid}>Required</p>
        </>
      ) : (<></>)
      }
    </form>
  )
}