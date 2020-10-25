import React, { Component } from 'react';

import Timezone from '../timezone';

interface ITimezonesProps {
  zoneNames: string[],
}

interface ITimezonesState {
  dateTime: Date,
}

class Timezones extends Component<ITimezonesProps, ITimezonesState> {
  timeID!: number;

  constructor(props: ITimezonesProps) {
    super(props);

    this.state = {
      dateTime: new Date(),
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

  tick(): void {
    this.setState({
      dateTime: new Date(),
    });
  }

  render(): JSX.Element {
    const {
      zoneNames,
    } = this.props;

    const {
      dateTime,
    } = this.state;

    return (
      <div id="timezones">
        {
          zoneNames.map((zoneName) => (
            <Timezone
              zoneName={zoneName}
              dateTime={dateTime}
            />
          ))
        }
      </div>
    );
  }
}

export default Timezones;
