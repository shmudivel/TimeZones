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
  const [addTZ, setAddTZ] = useState([]);
  const [howManySelects, setHowManySelects] = useState(0);

  const loadLocalStorageForState = localStorage.setItem(
    "howManySelects",
    howManySelects
  );

  console.log(loadLocalStorageForState);

  const onAddBtnSelectTime = () => {
    // on click add new select time zone with new key and without removing previous select time zone and without ... spread operator
    setAddTZ((prev) => [...prev, <SelectTime key={prev.length} />]);

    //+ 1 to howManySelects
    setHowManySelects((prev) => prev + 1);
  };

  const onRemoveBtnSelectTime = () => {
    // on click remove last select time zone
    setAddTZ((prev) => prev.slice(0, prev.length - 1));
  };

  useEffect(() => {
    // on load add 2 select time zones if there is no selects in local storage
    // if there is selects in local storage then load them number of selects from local storage
    if (localStorage.getItem("howManySelects") === null) {
      setAddTZ((prev) => [...prev, <SelectTime key={prev.length} />]);
      setAddTZ((prev) => [...prev, <SelectTime key={prev.length} />]);
    } else {
      for (let i = 0; i < localStorage.getItem("howManySelects"); i++) {
        setAddTZ((prev) => [...prev, <SelectTime key={prev.length} />]);
      }
    }
  }, []);

  useEffect(() => {
    // save to local storage how many selects are even if page is refreshed
    localStorage.setItem("howManySelects", howManySelects);
  }, [howManySelects]);

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
