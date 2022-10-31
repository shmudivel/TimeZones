import React from 'react';
import AddSelectTimeZones from './components/AddSelectTimeZones';


//styles
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
}

function App() {


  return (
    <div className={style.bg}>
      <AddSelectTimeZones  />
      <script src="https://moment.github.io/luxon/global/luxon.min.js">
      </script>
    </div>
  );
}

export default App;
