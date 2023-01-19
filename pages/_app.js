import '../styles/global.css';
import { Poppins } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  weight: ['300', '500', '700'],
  display: 'swap'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />;
      <Analytics />;
    </main>
  )
}