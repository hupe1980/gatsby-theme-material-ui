import React from 'react';

import TopLayout from './components/TopLayout';
import theme from './theme';

export default function wrapWithProvider({ element }) {
  return <TopLayout theme={theme}>{element}</TopLayout>;
}
