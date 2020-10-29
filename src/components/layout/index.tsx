import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface ILayoutProps {
  children: ReactNode,
}

function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <div id="layout">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </div>
  );
}

export default Layout;
