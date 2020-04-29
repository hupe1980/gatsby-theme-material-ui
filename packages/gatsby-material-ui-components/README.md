# gatsby-material-ui-components

> [Material-UI](https://github.com/mui-org/material-ui) components for [Gatsby](https://github.com/gatsbyjs/gatsby)

The components are part of the [gatsby-theme-material-ui](https://github.com/hupe1980/gatsby-theme-material-ui)

## Install

```sh
// with npm
npm install gatsby-material-ui-components @material-ui/core

// with yarn
yarn add gatsby-material-ui-components @material-ui/core
```

## How to use

```javascript
import React from "react";
import { Typography } from "@material-ui/core";
//import { Link } from "gatsby"
import { Link } from "gatsby-material-ui-components";

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
} from "gatsby-material-ui-components";
```

## License

[MIT](LICENSE)

