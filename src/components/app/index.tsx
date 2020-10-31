import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Timezones from '../timezones';

function App(): JSX.Element {
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
      <Timezones
        zoneNames={[
          'Asia/Krasnoyarsk',
          'Europe/Moscow',
        ]}
      />
    </div>
  );
}

export default App;
