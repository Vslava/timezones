interface IZoneDateAndTime {
  zoneDate: string,
  zoneTime: string,
}

export function zoneDateAndTime(
  dateTime: Date,
  zoneName: string,
): IZoneDateAndTime {
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

export function isZoneNameValid(zoneName: string): boolean {
  try {
    zoneDateAndTime(new Date(), zoneName);

    return true;
  } catch (err) {
    return false;
  }
}
