import React, { useContext } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import CodeBlock from './CodeBlock';

const components = {
  p: (props) => <Typography paragraph {...props} />,
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => <Typography variant="h2" {...props} />,
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  h5: (props) => <Typography variant="h5" {...props} />,
  h6: (props) => <Typography variant="h6" {...props} />,
  a: Link,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

const rootContext = {
  theme: createMuiTheme(),
  components,
};

export const Context = React.createContext(rootContext);

export function ComponentProvider({ theme, components, children }) {
  const outer = useContext(Context);
  const context = {
    theme: {
      ...outer.theme,
      ...theme,
    },
    components: {
      ...outer.components,
      ...components,
    },
  };

  return (
    <ThemeProvider theme={context.theme}>
      <MDXProvider components={context.components}>
        <Context.Provider value={context}>{children}</Context.Provider>
      </MDXProvider>
    </ThemeProvider>
  );
}
