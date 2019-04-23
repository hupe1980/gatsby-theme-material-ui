# gatsby-theme-material-ui

> A [Gatsby](https://github.com/gatsbyjs/gatsby) theme for
> [Material-UI](https://github.com/mui-org/material-ui)

:warning: This is experimental and subject to breaking changes.

## Install

`npm install --save gatsby-theme-material-ui`

## How to use

Edit `gatsby-config.js`

```javascript
module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        // If you want to use styled components you should change the injection order.
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    }
  ],
  plugins: [
    {
      // If you want to use styled components you should add the plugin here.
      // 'gatsby-plugin-styled-components',
    }
  ]
};
```

## Theming

Create & Edit src/gatsby-theme-material-ui/theme.js

```javascript
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  //   palette: {
  //     type: 'dark',
  //   },
});

export default theme;
```

## Gatsby Link

```javascript
import React from 'react';
import Typography from '@material-ui/core/Typography';
//import { Link } from "gatsby"
import { Link } from 'gatsby-theme-material-ui/components';

const Page = () => (
  <div>
    <Typography>
      Check out my <Link to="/blog">blog</Link>!
    </Typography>
  </div>
);

export default Page;
```

## Customizing

Create & Edit src/gatsby-theme-material-ui/components/top-layout.js

```javascript
import React from 'react';
import { Provider } from 'react-redux';
import ThemeTopLayout from 'gatsby-theme-material-ui/src/components/top-layout';

import createStore from '../../state/createStore';

export default function TopLayout({ children, theme }) {
  const store = createStore();

  return (
    <Provider store={store}>
      <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>
    </Provider>
  );
}
```

## License

[MIT](LICENSE)
