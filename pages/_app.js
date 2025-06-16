// pages/_app.js
import '../styles/globals.css';
import { LanguageProvider } from '../context/LanguageContext'; // ✅ CORRECT PATH
import LanguageToggle from '../components/LanguageToggle';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <div style={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
        <LanguageToggle />
      </div>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;

const styles = {
  navbar: {
    padding: '1rem',
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
  },
};
