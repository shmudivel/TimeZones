import React, { useState } from "react";
import SelectTime from "./SelectTime";

const AddSelectTimeZones = () => {
    const [addTZ, setAddTZ] = useState([]);

    const SelectTimeComp = () => {
        return <SelectTime />;
    }

    const onBtnAddSelectTime = event => {
        setAddTZ(addTZ.concat(<SelectTimeComp key={addTZ.length }/>))
    }

  return (
    <div>
        <SelectTime />
        <button onClick={onBtnAddSelectTime}>
            Add More
        </button>
        {addTZ}
    </div>
  );
};

export default AddSelectTimeZones;
