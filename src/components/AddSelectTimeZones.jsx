import React, { useState } from "react";
import { useEffect } from "react";

//components
import SelectTime from "./SelectTime";

const style = {
  container: ` w-fit max-w-[500px] bg-slate-100 m-auto rounded-sm shadow-xl p-4`,
  heading: `text-xl font-bold text-center text-gray-800 p-2`,
  addBtn: ` rounded-sm border p-1 bg-purple-500 text-2xl text-white font-bold hover:bg-purple-600`,
  buttonsAddRemove: `grid grid-cols-2 gap2`,
  selectsBox: ``,
};

const AddSelectTimeZones = () => {
  const [addTZ, setAddTZ] = useState(() => {
    const timeZonesFromLocalStorage = localStorage.getItem("selectedTimeZones");
    if (timeZonesFromLocalStorage) {
      return Array(parseInt(timeZonesFromLocalStorage)).fill(<SelectTime />);
    }
    return [];
  });
  


  console.log(addTZ);

  const onAddBtnSelectTime = () => {
    setAddTZ((prev) => [...prev, <SelectTime key={prev.length} />]);
  };

  const onRemoveBtnSelectTime = () => {
    setAddTZ((prev) => prev.slice(0, -1));
  };



  useEffect(() => {
    localStorage.setItem("selectedTimeZones", addTZ.length);
  }, [addTZ]);

  // useEffect(() => {
  //   const timeZonesFromLocalStorage = localStorage.getItem("selectedTimeZones");
  //   if (timeZonesFromLocalStorage) {
  //     setAddTZ(Array(parseInt(timeZonesFromLocalStorage)).fill(<SelectTime />));
  //   }
  // }, []);


  

  // useEffect(() => {
  //   onAddBtnSelectTime();
  // }, []);

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Time zones</h1>
      <div className={style.buttonsAddRemove}>
        <button className={style.addBtn} onClick={onRemoveBtnSelectTime}>
          {/* <AiOutlineMinus size={30}/>  */}
          <span>-</span>
        </button>
        <button className={style.addBtn} onClick={onAddBtnSelectTime}>
          {/* <AiOutlinePlus size={30}/>  */}
          <span>+</span>
        </button>
      </div>

      <div className=" w-fit min-w-[50px] py-2 grid grid-flow-col gap-2">
        {addTZ}
      </div>
    </div>
  );
};

export default AddSelectTimeZones;
