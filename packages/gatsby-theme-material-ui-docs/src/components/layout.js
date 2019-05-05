import React from 'react';

import Sidebar from './sidebar';

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
