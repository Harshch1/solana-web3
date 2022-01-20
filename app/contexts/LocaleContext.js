import i18n from '../i18n';
import React from 'react';

const LocaleContext = React.createContext({
  BASE_ROUTE_LOCALE: "/:locale(en)?",
  LOCALE: i18n.language === 'en' ? '' : '/' + i18n.language
});

export default LocaleContext;