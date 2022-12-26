import React, { useState, useEffect } from "react";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import ListOfHours from "./ListOfHours";

const SelectTime = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(loadLocalTimeZone());

  function loadLocalTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  // useEffect (() => {
  //   localStorage.setItem('my-time-zones', JSON.stringify(selectedTimezone));
  // }, [selectedTimezone]);
  // const [selectedTimezone, setSelectedTimezone] = useState(tzFromLocalStorage)

  //   const tzFromLocalStorage = JSON.parse(localStorage.getItem('my-time-zone') || Intl.DateTimeFormat().resolvedOptions().timeZone)

  //      useEffect(() => {
  //   const data = localStorage.getItem('my-time-zone');
  //   if (data) {
  //     setSelectedTimezone(JSON.parse(data));
  //   }
  // }, []);

  return (
    <div className="border-1 text-sm round-sm">
      <div>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          timezones={{
            ...allTimezones,
            "America/Lima": "Pittsburgh",
            "Europe/Berlin": "Frankfurt",
          }}
        />

        {/* <h3>Output:</h3> */}
        {/* <pre
          style={{
            margin: '0 20px',
            fontWeight: 500,
            fontFamily: 'monospace',
          }}
        >
          {JSON.stringify(selectedTimezone, null, 2)}

        </pre> */}
        <ListOfHours
          title={selectedTimezone.value}
          num={selectedTimezone.offset}
        />
      </div>
    </div>
  );
};

export default SelectTime;
