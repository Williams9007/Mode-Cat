// pages/index.js
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang, setLang, t } = useLanguage();

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'de' : 'en');
  };

  return (
    <main style={styles.container}>
      <div style={styles.toggle}>
        <button onClick={toggleLanguage}>
          {lang === 'en' ? 'DE' : 'EN'}
        </button>
      </div>

      <h1 style={styles.title}>{t('title')}</h1>

      <a href="/gallery">
        <button style={styles.button}>{t('viewModels')}</button>
      </a>
    </main>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  toggle: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
};
