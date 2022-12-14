import React from "react";
import AddSelectTimeZones from "./components/AddSelectTimeZones";
import bg from "./assets/bg00.jpg";

//styles
const style = {
  bg: `min-h-screen w-screen p-4 bg-gradient-to-r from-[#bfdbfe] to-[#a5f3fc]`,
};

function App() {
  return (
    <div className={style.bg}>
      <AddSelectTimeZones />
    </div>
  );
}

export default App;
