import React, { Component } from 'react';

import NotifyArea from '../notify-area';
import Timezone from '../timezone';
import NewTimezoneArea from '../new-timezone-area';

import { INITIAL_ZONENAMES } from '../../lib/constants';

import style from './style.scss';

interface IAppState {
  dateTime: Date,
  zoneNames: string[],
}

class App extends Component<unknown, IAppState> {
  timeID!: number;

  constructor(props: unknown) {
    super(props);

    this.state = {
      dateTime: new Date(),
      zoneNames: INITIAL_ZONENAMES,
    };
  }

  componentDidMount(): void {
    this.timeID = window.setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount(): void {
    clearInterval(this.timeID);
  }

  private handlerNewTimezoneName = (zoneName: string) => {
    const { zoneNames } = this.state;

    this.setState({
      zoneNames: zoneNames.concat(zoneName),
    });
  };

  private handleTimezoneRename = (zoneIdx: number, newZoneName: string) => {
    const { zoneNames } = this.state;

    const newZoneNames = [...zoneNames];
    newZoneNames[zoneIdx] = newZoneName;

    this.setState({
      zoneNames: newZoneNames,
    });
  };

  private makeTimezone = (
    zoneName: string,
    zoneIdx: number,
    dateTime: Date,
  ) => (
    <Timezone
      id={zoneIdx}
      zoneName={zoneName}
      dateTime={dateTime}
      onRename={this.handleTimezoneRename}
    />
  );

  tick(): void {
    this.setState({
      dateTime: new Date(),
    });
  }

  render(): JSX.Element {
    const { zoneNames, dateTime } = this.state;

    return (
      <div id="layout">
        <NotifyArea />
        <NewTimezoneArea
          onNewTimezoneName={this.handlerNewTimezoneName}
        />
        <div className={style.timezones}>
          {
            zoneNames.map((zoneName, zoneIdx) => (
              this.makeTimezone(zoneName, zoneIdx, dateTime)
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
