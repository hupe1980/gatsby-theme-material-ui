import React from 'react';

import AppBar from './app-bar';
import LeftLinks from './left-links';
import RightLinks from './right-links';

export default function Header() {
  return <AppBar leftLinks={<LeftLinks />} rightLinks={<RightLinks />} />;
}
