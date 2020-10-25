import React from 'react';

import style from './style.scss';

interface ITimezoneProps {
  zoneName: string,
  dateTime: Date,
}

function Timezone({ zoneName, dateTime }: ITimezoneProps): JSX.Element {
  const zoneTime = dateTime.toLocaleTimeString(
    undefined,
    { timeZone: zoneName },
  );

  const zoneDate = dateTime.toLocaleDateString(
    undefined,
    {
      timeZone: zoneName,
      day: '2-digit',
      month: 'long',
    },
  );

  return (
    <div className={style.timezone}>
      <p className={style.zoneTime}>{zoneTime}</p>
      <p className={style.zoneName}>{zoneName}</p>
      <p className={style.zoneDate}>{zoneDate}</p>
    </div>
  );
}

export default Timezone;
