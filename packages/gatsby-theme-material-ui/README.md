# gatsby-theme-material-ui

> A [Gatsby](https://github.com/gatsbyjs/gatsby) theme for
> [Material-UI](https://github.com/mui-org/material-ui): The fastest way to build server-side rendered Material-UI websites

## Install

```sh
// with npm
npm install gatsby-theme-material-ui @mui/material @emotion/react @emotion/styled

// with yarn
yarn add gatsby-theme-material-ui @mui/material @emotion/react @emotion/styled
```

## Theme vs. Plugin
- `gatsby-plugin-material-ui` solves FOUC, auto prefixing and minification.
- `gatsby-theme-material-ui` uses the plugin under the hood, adds web fonts, meta-viewport, CSS baseline and mui theme support and has material ui styled gatsby link components

## How to use

Edit `gatsby-config.js`

```javascript
module.exports = {
  plugins: [`gatsby-theme-material-ui`],
};
```

## Testing your installation

Replace the contents in your `pages/index.js` with the following
```javascript
import React from "react";
import { Button, Box } from "@mui/material";

const IndexPage = () => {
  return (
    <Box p={4}>
      <Button variant="contained">Hello gatsby-theme-material-ui</Button>
    </Box>
  );
};

export default IndexPage;
```

You should be greeted with a MUI button when you navigate to the root of your site.

### top-layout

You'll see several references below to the ["top-layout" theme](https://github.com/hupe1980/gatsby-theme-material-ui/tree/master/packages/gatsby-theme-material-ui-top-layout). Its role is to [prevent the Flash Of Unstyle Content](https://github.com/hupe1980/gatsby-theme-material-ui/pull/8).

## WebFonts

Material-UI was designed with the [Roboto](https://fonts.google.com/specimen/Roboto) font in mind. The Roboto font will be automatically loaded by gatsby-theme-material-ui. You can override this behavior as follows:

Edit `theme.js`

```javascript
// src/gatsby-theme-material-ui-top-layout/theme.js

import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
        'Montserrat',
        'sans-serif'
      ].join(','),
    },
    ...
  });

export default theme;

```

Edit `gatsby-config.js`

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
  ],
};
```

For more options, have a look at the plugin [readme](https://github.com/hupe1980/gatsby-plugin-webfonts/blob/master/gatsby-plugin-webfonts/README.md).

> Note: If the changes you made in `src/gatsby-theme-material-ui-top-layout/theme.js` are not showing up, you might want to run `gatsby clean` to clean up the .cache folder and try again. This is required for newly shadowed files.

## Theming

Create & Edit src/gatsby-theme-material-ui-top-layout/theme.js

```javascript
import { createTheme } from "@mui/material";

const theme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //   },
});

export default theme;
```

## Gatsby Link

```javascript
import React from "react";
import { Typography } from "@mui/material";
//import { Link } from "gatsby"
import { Link } from "gatsby-theme-material-ui";

const Page = () => (
  <div>
    <Typography>
      Check out my <Link to="/blog">blog</Link>!
    </Typography>
  </div>
);

export default Page;
```

The following components have also been adapted for use with Gatsby:

```javascript
import {
  BottomNavigationAction,
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";
```

For `<Button>`s with [`href` URLs](https://material-ui.com/api/button/#props), use the `to` attribute instead of `href`, to enable [Gatsby link features](https://www.gatsbyjs.org/docs/gatsby-link/).

## Customizing

Create & Edit src/gatsby-theme-material-ui-top-layout/components/top-layout.js

```javascript
import React from "react";
import { Provider } from "react-redux";
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";

import createStore from "../../state/createStore";

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
