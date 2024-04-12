import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../local/en.json';
import vi from '../local/vi.json';
import sv from '../local/sv.json';

export const languageResources = {
  en: {translation: en},
  vi: {translation: vi},
  sv: {translation: sv},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;