import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt-br.json';
import es from './locales/es-ar.json';

i18n.use(initReactI18next).init({
  lng: 'pt',
  fallbackLng: ['pt', 'es'],
  resources: {
    pt,
    es,
  },
});

export default i18n;
