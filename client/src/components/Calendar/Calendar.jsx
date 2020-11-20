import React, { useState } from 'react';
import Calendar from 'react-calendar';

const disabledDates = [, in3Days, in5Days];

function tileDisabled({ date, view }) {
  // Disable tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of disabled dates
    return disabledDates.find(dDate => isSameDay(dDate, date));
  }
}

function Calendarr() {
  const [value, setValue] = useState(new Date());

  return (
    <Calendar
      onChange={onChange}
      value={date}
      tileDisabled={tileDisabled}
    />
  );
}
export default Calendarr