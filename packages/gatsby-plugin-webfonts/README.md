# gatsby-plugin-webfonts

> A [Gatsby](https://github.com/gatsbyjs/gatsby) plugin to handle webfonts:

- Creates minified @font-face CSS rules
- Supports font-display property (Default: 'swap')
- Handles preconnect and preload optimizations

## Install

`npm install --save gatsby-plugin-webfonts`

## How to use

Edit `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300', '400', '500']
              //subsets: ['latin']
              //text: 'Hello'
            }
          ]
        }
        //formats: ['woff2', 'woff'],
        //useMinify: true,
      }
    }
  ]
};
```

## Google Fonts

Using [Google's Font API](https://code.google.com/apis/webfonts/docs/getting_started.html), name the font families you'd like to load.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300', '400', '500']
            },
            {
              family: 'Open Sans Condensed',
              variants: ['300', '700']
            }
          ]
        }
      }
    }
  ]
};
```

You can also supply the text parameter to perform character subsetting:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300', '400', '500'],
              text: 'Hello'
            }
          ]
        }
      }
    }
  ]
};
```

The text subsetting functionality is only available for Google fonts.
