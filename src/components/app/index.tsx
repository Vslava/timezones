import React, { Component } from 'react';

import NotifyArea from '../notify-area';
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
        <NotifyArea />
        <Timezones
          zoneNames={zoneNames}
        />
      </div>
    );
  }
}

export default App;
