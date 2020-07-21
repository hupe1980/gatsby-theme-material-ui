import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: `flex`,
    border: `0`,
    borderRadius: `3px`,
    padding: `0.625rem 0`,
    transition: `all 150ms ease 0s`,
    alignItems: `center`,
    flexFlow: `row nowrap`,
    justifyContent: `flex-start`,
    position: `relative`,
    zIndex: `unset`,
  },
  absolute: {
    position: `absolute`,
    zIndex: theme.zIndex.appBar,
  },
  fixed: {
    position: `fixed`,
    zIndex: theme.zIndex.appBar,
  },
  container: {
    minHeight: `50px`,
    flex: `1`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    flexWrap: `nowrap`,
  },
  appResponsive: {
    margin: `20px 10px`,
  },
}));

export default function AppBar({
  changeColorOnScroll,
  color,
  rightLinks,
  leftLinks,
  title,
  fixed,
  absolute,
}) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (changeColorOnScroll) {
      function headerColorChange() {
        const windowsScrollTop = window.pageYOffset;

        if (windowsScrollTop > changeColorOnScroll.height) {
          document.body
            .getElementsByTagName(`header`)[0]
            .classList.remove(classes[color]);
          document.body
            .getElementsByTagName(`header`)[0]
            .classList.add(classes[changeColorOnScroll.color]);
        } else {
          document.body
            .getElementsByTagName(`header`)[0]
            .classList.add(classes[color]);
          document.body
            .getElementsByTagName(`header`)[0]
            .classList.remove(classes[changeColorOnScroll.color]);
        }
      }

      window.addEventListener(`scroll`, headerColorChange);

      return function cleanup() {
        window.removeEventListener(`scroll`, headerColorChange);
      };
    }
  }, [changeColorOnScroll, classes, color]);

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  return (
    <MuiAppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? title : null}
        <Box flex="1">
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            title
          )}
        </Box>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={`right`}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={() => setMobileOpen(!mobileOpen)}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </MuiAppBar>
  );
}
