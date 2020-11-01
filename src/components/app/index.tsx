import React, { Component } from 'react';

import NotifyArea from '../notify-area';
import Timezones from '../timezones';
import NewTimezoneArea from '../new-timezone-area';

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

  private handlerNewTimezoneName = (zoneName: string) => {
    const { zoneNames } = this.state;

    this.setState({
      zoneNames: zoneNames.concat(zoneName),
    });
  };

  render(): JSX.Element {
    const { zoneNames } = this.state;

    return (
      <div id="layout">
        <NotifyArea />
        <NewTimezoneArea
          onNewTimezoneName={this.handlerNewTimezoneName}
        />
        <Timezones
          zoneNames={zoneNames}
        />
      </div>
    );
  }
}

export default App;
