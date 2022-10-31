import React, {useState} from 'react'
import TimezoneSelect from 'react-timezone-select'
import ListOfHours from './ListOfHours'

const SelectTime = () => {
    const [selectedTimezone, setSelectedTimezone] = useState(
      Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <div>
      <h1>Your Time Zone Now</h1>
      <div className="select-wrapper">
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
      <h3>Output:</h3>
      <pre
          style={{
            margin: '0 20px',
            fontWeight: 500,
            fontFamily: 'monospace',
          }}
        >
          {JSON.stringify(selectedTimezone, null, 2)}
        </pre>
        <ListOfHours title={selectedTimezone.value} />
    </div>
  )
}

export default SelectTime
