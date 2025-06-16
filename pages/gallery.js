import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const demoModels = [
  {
    id: 1,
    name: 'Sophia',
    gender: 'female',
    city: 'Munich',
    price: '€50/hour',
    tags: ['fashion', 'influencer'],
    embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    name: 'Liam',
    gender: 'male',
    city: 'Berlin',
    price: '€45/hour',
    tags: ['commercial'],
    embed: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
  },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{t('modelGallery')}</h2>
      <div style={styles.grid}>
        {demoModels.map((model) => (
          <div key={model.id} style={styles.card}>
            <h3>{model.name}</h3>
            <p>{t(model.gender)} – {model.city}</p>
            <p>{model.price}</p>
            <div>
              {model.tags.map((tag) => (
                <span key={tag} style={styles.tag}>{t(tag)}</span>
              ))}
            </div>
            <div style={styles.video}>
              <iframe
                width="100%"
                height="200"
                src={model.embed}
                title="Demo Media"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <Link href={`/model/${model.id}`}>
              <button style={styles.button}>{t('viewProfile')}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '2rem' },
  title: { textAlign: 'center', marginBottom: '2rem' },
  grid: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  },
  card: {
    background: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  tag: {
    backgroundColor: '#eee',
    borderRadius: '4px',
    padding: '0.3rem 0.6rem',
    margin: '0.2rem',
    fontSize: '0.8rem',
    display: 'inline-block',
  },
  video: {
    marginTop: '1rem',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
