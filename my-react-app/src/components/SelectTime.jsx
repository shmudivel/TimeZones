import React, {useState} from 'react'
import TimezoneSelect from 'react-timezone-select'
import ListOfHours from './ListOfHours'

const SelectTime = () => {
    const [selectedTimezone, setSelectedTimezone] = useState(
      Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <div className='border-2 round-md'>
      <div className=''>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
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
        <ListOfHours title={selectedTimezone.value} num={selectedTimezone.offset} />
        </div>
    </div>
  )
}

export default SelectTime
