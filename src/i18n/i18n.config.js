import 'intl-pluralrules';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, kr, vi } from "./translation";

const resources = {
    en: {
        translation: en
    },
    vi: {
        translation: vi
    },
    kr: {
        translation: kr
    }
}

i18next.use(initReactI18next).init({
    debug: true,
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
})

export default i18next