import React, { useState, useEffect } from "react";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import ListOfHours from "./ListOfHours";

const SelectTime = ({key}) => {
  const [selectedTimezone, setSelectedTimezone] = useState(() => {
    const storedTimezone = localStorage.getItem("selectedTimezone_" + key);
    if (storedTimezone) {
      return JSON.parse(storedTimezone);
    }
    return loadLocalTimezone();
  });

  function loadLocalTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  useEffect(() => {
    localStorage.setItem("selectedTimezone_" + key, JSON.stringify(selectedTimezone));
  }, [selectedTimezone, key]);




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
