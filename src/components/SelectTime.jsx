import React, { useState, useEffect } from "react";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import ListOfHours from "./ListOfHours";

const SelectTime = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(loadLocalTimeZone());

  function loadLocalTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  // useEffect(() => {
  //   localStorage.setItem("selectedTimezone", selectedTimezone);
  // }, [selectedTimezone]);

  // useEffect(() => {
  //   const timezoneFromLocalStorage = localStorage.getItem("selectedTimezone");
  //   if (timezoneFromLocalStorage) {
  //     setSelectedTimezone(timezoneFromLocalStorage);
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

        <ListOfHours
          title={selectedTimezone.value}
          num={selectedTimezone.offset}
        />
      </div>
    </div>
  );
};

export default SelectTime;
