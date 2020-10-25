import React from 'react';

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
    <div className="timezone">
      <p className="zone-time">{zoneTime}</p>
      <p className="zone-name">{zoneName}</p>
      <p className="zone-date">{zoneDate}</p>
    </div>
  );
}

export default Timezone;
