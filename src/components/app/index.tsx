import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Timezones from '../timezones';

interface IAppState {
  zoneNames: string[],
}

class App extends Component<unknown, IAppState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      zoneNames: [
        'Asia/Krasnoyarsk',
        'Europe/Moscow',
      ],
    };
  }

  render(): JSX.Element {
    const { zoneNames } = this.state;

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
          zoneNames={zoneNames}
        />
      </div>
    );
  }
}

export default App;
