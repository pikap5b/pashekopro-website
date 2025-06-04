import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng).then(() => {
      console.log('Language changed to:', i18n.language);
    }).catch((err) => {
      console.error('Error changing language:', err);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'ru' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        RU
      </button>
    </div>
  );
}; 