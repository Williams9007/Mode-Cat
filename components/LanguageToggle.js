// components/LanguageToggle.js
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button onClick={() => setLang(lang === 'en' ? 'de' : 'en')}>
      {lang === 'en' ? 'Deutsch' : 'English'}
    </button>
  );
};

export default LanguageToggle;
