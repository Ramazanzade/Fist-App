import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import style from './stayle';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguageCode, setSelectedLanguageCode] = useState(i18n.language);
  const language = [
    { code: 'en', label: 'English' },
    { code: 'rus', label: 'Pусский' },
    { code: 'az', label: 'Azərbaycanca' }
  ];

  const setSelectedLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setSelectedLanguageCode(code);
  };

  return (
    <View style={style.container}>
      <Text>{t('common:hey')}</Text>
      <Text>{t('common:langaugageSelector')}</Text>
      {language.map((language) => {
        const setSelectedLanguageCodeDisabledValue = language.code === selectedLanguageCode;
        return (
          <TouchableOpacity
            key={language.code}
            disabled={setSelectedLanguageCodeDisabledValue}
            onPress={() => setSelectedLanguage(language.code)}
            style={style.touc}
          >
            <Text style={{ color: setSelectedLanguageCodeDisabledValue ? '#CCCCCC' : '#FFFFFF' }}>{language.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Language;
