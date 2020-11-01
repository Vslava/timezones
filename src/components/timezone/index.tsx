import React, { Component } from 'react';

import ZoneNameArea from '../zone-name-area';

import {
  zoneDateAndTime,
  zoneNameValidator,
} from '../../lib/util';

import style from './style.scss';

interface ITimezoneState {
  zoneName: string,
}

interface ITimezoneProps {
  zoneName: string,
  dateTime: Date,
}

class Timezone extends Component<ITimezoneProps, ITimezoneState> {
  constructor(props: ITimezoneProps) {
    super(props);

    const { zoneName } = props;

    this.state = {
      zoneName,
    };
  }

  private handleZoneNameChange = (zoneName: string) => {
    this.setState({ zoneName });
  };

  render(): JSX.Element {
    const { dateTime } = this.props;
    const { zoneName } = this.state;

    const {
      zoneDate,
      zoneTime,
    } = zoneDateAndTime(dateTime, zoneName);

    const zoneNameAreaStyle = {
      textClassName: style.zoneName,
      inputClassName: style.zoneName,
      invalidZoneNameClassName: style.wrong,
    };

    return (
      <div className={style.timezone}>
        <p className={style.zoneTime}>{zoneTime}</p>
        <ZoneNameArea
          style={zoneNameAreaStyle}
          zoneName={zoneName}
          onZoneNameChange={this.handleZoneNameChange}
          isZoneNameValid={zoneNameValidator}
        />
        <p className={style.zoneDate}>{zoneDate}</p>
      </div>
    );
  }
}

export default Timezone;
