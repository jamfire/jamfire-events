// import libs
import { ReactNode } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

// import components
import { I18nextProvider } from 'react-i18next';

// theme provider props
export interface LocalesProviderProps {
  children: ReactNode
  defaultLocale: string
}

export const LocalesProvider = ({
  children,
  defaultLocale,
  pageContext
}: LocalesProviderProps) => {

  !i18n.isInitialized &&
    i18n
      .use(LanguageDetector)
      .use(
        resourcesToBackend((language, namespace, callback) => {
          import(`../../locales/${language}.json`)
            .then((resources) => {
              callback(null, resources);
            })
            .catch((error) => {
              callback(error, null);
            });
        })
      )
      .use(initReactI18next)
      .init({
        initImmediate: false,
        lng: pageContext.locale,
        fallbackLng: defaultLocale,
        debug: true, //debug ? true : false,
        defaultNS: 'translation',
        interpolation: {
          escapeValue: false,
        },
        react: {
          useSuspense: false,
        },
      });

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
};

export default LocalesProvider