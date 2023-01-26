import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['300', '500', '700'],
  display: 'swap',
  subsets: ['latin']
})

export default function ContactForm() {

  const [invalid, setInvalid] = useState(false);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleChange(e) {
    let val = e.target.value;
    setEmail(val);
    setInvalid(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (email == '') {
      setInvalid(true);
    } else {
        const data = {
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          title: e.target.title.value,
          email: e.target.email.value,
          message: e.target.message.value
        };
        console.log(JSON.stringify(data))
        const response = await fetch('http://localhost:8080/api/contactForm', {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data),
        });

      setFirst('');
      setLast('');
      setTitle('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <form id={'contactForm'} onSubmit={handleSubmit}>
      <div className={styles.inputContainer} id={'contactForm'}>
        <input
          className={`${styles.first} ${poppins.className}`}
          placeholder='First Name'
          name='first_name'
          type='text'
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          className={`${styles.last} ${poppins.className}`}
          placeholder='Last Name'
          name='last_name'
          type='text'
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <input
          className={`${styles.title} ${poppins.className}`}
          placeholder='Title'
          name='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={`${styles.email} ${poppins.className} ${invalid ? styles.emailInvalid : ''}`}
          placeholder='Email'
          name='email'
          type='text'
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className={`${styles.message} ${poppins.className}`}
          placeholder='Message'
          name='message'
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        className={styles.button}
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