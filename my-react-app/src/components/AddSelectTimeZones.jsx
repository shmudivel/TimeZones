import React, { useState } from "react";
// import { AiOutlinePlus } from "react-icons/ai";

//components
import SelectTime from "./SelectTime";

const style = {
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  addBtn: `border text-xl p-4 w-full bg-purple-500`,
  selectsBox: ``,
};

const AddSelectTimeZones = () => {
  const [addTZ, setAddTZ] = useState([]);

  const SelectTimeComp = () => {
    return <SelectTime />;
  };

  const onBtnAddSelectTime = (event) => {
    setAddTZ(addTZ.concat(<SelectTimeComp key={addTZ.length} />));
  };

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Time zones app</h1>
        
      <button className={style.addBtn} onClick={onBtnAddSelectTime}>
        Add More Time zones 
        {/* <AiOutlinePlus size={30} /> */}
        
      </button>
    <div className="grid grid-flow-col">
      {addTZ}



      <SelectTime />
      <SelectTime />

    </div>




    </div>
  );
};

export default AddSelectTimeZones;
