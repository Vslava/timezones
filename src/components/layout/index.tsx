import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode,
}

function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <div id="layout">
      {children}
    </div>
  );
}

export default Layout;
