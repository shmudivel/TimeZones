import React, {
  useState,
  // useEffect
} from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// import { AiOutlineMinus } from "react-icons/ai";

//components
import SelectTime from "./SelectTime";

// Styles Tailwind
// max-w-[500px]
const style = {
  container: ` w-fit max-w-[500px] bg-slate-100 m-auto rounded-sm shadow-xl p-4`,
  heading: `text-xl font-bold text-center text-gray-800 p-2`,
  addBtn: ` rounded-sm border p-1 bg-purple-500 text-2xl text-white font-bold hover:bg-purple-600`,
  buttonsAddRemove: `grid grid-cols-2 gap2`,
  selectsBox: ``,
};

const AddSelectTimeZones = () => {
  const [addTZ, setAddTZ] = useState([]);

  const SelectTimeComp = () => {
    return <SelectTime />;
  };

  const onAddBtnSelectTime = () => {
    // Вот тут ключ
    let newAddTZ = <SelectTimeComp />;
    setAddTZ([...addTZ, newAddTZ]);
  };

  const onRemoveBtnSelectTime = (index) => {
    let data = [...addTZ];
    data.splice(index, 1);
    setAddTZ(data);
  };

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
        <SelectTime />
        <SelectTime />
        {addTZ}
      </div>
    </div>
  );
};

export default AddSelectTimeZones;
