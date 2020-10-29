import React, { Component } from 'react';

import ZoneNameArea from '../zone-name-area';

import style from './style.scss';

function zoneDateAndTime(dateTime: Date, zoneName: string) {
  const zoneDate = dateTime.toLocaleDateString(
    undefined,
    { timeZone: zoneName, day: '2-digit', month: 'long' },
  );

  const zoneTime = dateTime.toLocaleTimeString(
    undefined,
    { timeZone: zoneName },
  );

  return {
    zoneDate,
    zoneTime,
  };
}

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

  private zoneNameChangeHandler = (zoneName: string) => {
    this.setState({ zoneName });
  };

  private zoneNameValidator = (zoneName: string): boolean => {
    try {
      zoneDateAndTime(new Date(), zoneName);

      return true;
    } catch (err) {
      return false;
    }
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
          onZoneNameChange={this.zoneNameChangeHandler}
          isZoneNameValid={this.zoneNameValidator}
        />
        <p className={style.zoneDate}>{zoneDate}</p>
      </div>
    );
  }
}

export default Timezone;
