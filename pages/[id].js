// pages/model/[id].js
import { useRouter } from 'next/router';
import { useLanguage } from '../../Context/LanguageContext';



const modelData = [
  {
    id: 1,
    name: 'Jane Doe',
    gender: 'Female',
    city: 'Munich',
    price: 150,
    tags: ['Fashion', 'Commercial'],
    media: [
      'https://www.youtube.com/embed/fTDtVGmJ_Jc',
      'https://www.youtube.com/embed/5U5F1CAm7cw',
      'https://www.youtube.com/embed/_zUFO4kt6Ag',
    ],
  },
  {
    id: 2,
    name: 'Alex Smith',
    gender: 'Male',
    city: 'Berlin',
    price: 120,
    tags: ['Influencer', 'Runway'],
    media: [
      'https://www.youtube.com/embed/oHg5SJYRHA0',
      'https://www.youtube.com/embed/lY2yjAdbvdQ',
    ],
  },
  {
    id: 3,
    name: 'Lena Gold',
    gender: 'Female',
    city: 'Hamburg',
    price: 170,
    tags: ['Fitness', 'Commercial'],
    media: [
      'https://www.youtube.com/embed/5U5F1CAm7cw',
      'https://www.youtube.com/embed/_zUFO4kt6Ag',
    ],
  },
  {
    id: 4,
    name: 'Chris Kojo',
    gender: 'Male',
    city: 'Munich',
    price: 200,
    tags: ['Editorial', 'Fashion'],
    media: [
      'https://www.youtube.com/embed/lY2yjAdbvdQ',
      'https://www.youtube.com/embed/fTDtVGmJ_Jc',
    ],
  },
];

export default function ModelProfile() {
  const { lang } = useLanguage();
  const router = useRouter();
  const { id } = router.query;

  const model = modelData.find((m) => m.id === parseInt(id));

  const translations = {
    en: {
      gender: 'Gender',
      city: 'City',
      price: 'Price',
      tags: 'Tags',
      request: 'Request Booking',
      loading: 'Loading...',
    },
    de: {
      gender: 'Geschlecht',
      city: 'Stadt',
      price: 'Preis',
      tags: 'Stichworte',
      request: 'Buchung anfragen',
      loading: 'Wird geladen...',
    },
  };

  const t = translations[lang];

  if (!model) return <p style={styles.loading}>{t.loading}</p>;

  return (
    <div style={styles.container}>
      <h1>{model.name}</h1>
      <p><strong>{t.gender}:</strong> {model.gender}</p>
      <p><strong>{t.city}:</strong> {model.city}</p>
      <p><strong>{t.price}:</strong> €{model.price}/hour</p>
      <p><strong>{t.tags}:</strong> {model.tags.join(', ')}</p>

      <div style={styles.mediaSection}>
        {model.media.map((url, index) => (
          <iframe
            key={index}
            width="100%"
            height="220"
            src={url}
            title={`Media ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={styles.iframe}
          ></iframe>
        ))}
      </div>

      <button style={styles.button}>{t.request}</button>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '700px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
  },
  loading: {
    textAlign: 'center',
    padding: '3rem',
  },
  mediaSection: {
    display: 'grid',
    gap: '1rem',
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
  },
  iframe: {
    borderRadius: '8px',
  },
  button: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
