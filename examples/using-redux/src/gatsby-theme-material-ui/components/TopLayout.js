import React from 'react';
import { Provider } from 'react-redux';
import ThemeTopLayout from 'gatsby-theme-material-ui/src/components/TopLayout';

import createStore from '../../state/createStore';

export default function TopLayout({ children, theme }) {
  const store = createStore();

  return (
    <Provider store={store}>
      <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>
    </Provider>
  );
}
