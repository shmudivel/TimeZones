import React from 'react';
import AddSelectTimeZones from './components/AddSelectTimeZones';


//styles
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#bfdbfe] to-[#a5f3fc]`,
}

function App() {


  return (
    <div className={style.bg}>
      <AddSelectTimeZones  />
    </div>
  );
}

export default App;
