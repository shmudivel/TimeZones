import React, { useState } from "react";
// import { AiOutlinePlus } from "react-icons/ai";

//components
import SelectTime from "./SelectTime";

// Styles Tailwind 
// max-w-[500px]
const style = {
  container: ` w-fit max-w-[500px] bg-slate-100 m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  addBtn: ` rounded-md border text-xl p-4 w-full bg-purple-500`,
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

  const onMinusBtnSelectTime = (event) => {
    setAddTZ(addTZ.splice(<SelectTimeComp key={addTZ.length} />));
  };


  return (
    <div className={style.container}>
      <h1 className={style.heading}>Time zones app</h1>
        
      <button className={style.addBtn} onClick={onBtnAddSelectTime}>
        Add More Time zones 
        {/* <AiOutlinePlus size={30} /> */}
        
      </button>
      <button 
      className={style.addBtn} 
      onClick={onMinusBtnSelectTime}
      ></button>
    <div className=" w-fit min-w-[50px] py-2 grid grid-flow-col gap-2">




      <SelectTime />
      <SelectTime />
      {addTZ}

    </div>




    </div>
  );
};

export default AddSelectTimeZones;
