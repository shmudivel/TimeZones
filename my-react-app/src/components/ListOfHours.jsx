import React, { useEffect, useState } from "react";

const ListOfHours = (props) => {
  const [timeGmt, setTimeGmt] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      // const dateAndGMT = date.toGMTString()

      // setClockState(dateAndGMT.getTimezoneOffset())
      setTimeGmt(date.getUTCHours());
    }, 2000);
  }, []);

//   const gmtPlusOffsetFromSelect = timeGmt + props.num;

function reduceGmt(hour) {
    // const totalHours = ((timeGmt/24 + (props.num/24)) % 1) * 24 + hour
    const totalHours = timeGmt + props.num + hour
    if (totalHours < 24) {
        return totalHours;
    } else if (totalHours < 36) {
        return totalHours - 24;
    } else if ( totalHours < 48){
        return totalHours - 24;
    } else {
        return totalHours - 48;
    } 
        // return cosnt totalHours = ((timeGmt/24 + (props.num/24)) % 1) * 24 + hour
}

// const testMODexcel = timeGmt + (props.num / 24)
// const testMODexcel = 120 + (4 / 24)
// console.log(testMODexcel);

// const testExcelAlbina = ((timeGmt/24 + (props.num/24)) % 1) * 24
  

  return (
    <div>
      <div>
        <div>GMT: {timeGmt}</div>
        <h1 className="">{props.title}</h1>
        <h2>{props.num}</h2>
      </div>

      <ul>
        <li>{reduceGmt(0)}</li>
        <li>{reduceGmt(1)}</li>
        <li>{reduceGmt(2)}</li>
        <li>{reduceGmt(3)}</li>
        <li>{reduceGmt(4)}</li>
        <li>{reduceGmt(5)}</li>
        <li>{reduceGmt(6)}</li>
        <li>{reduceGmt(7)}</li>
        <li>{reduceGmt(8)}</li>
        <li>{reduceGmt(9)}</li>
        <li>{reduceGmt(10)}</li>
        <li>{reduceGmt(11)}</li>
        <li>{reduceGmt(12)}</li>
        <li>{reduceGmt(13)}</li>
        <li>{reduceGmt(14)}</li>
        <li>{reduceGmt(15)}</li>
        <li>{reduceGmt(16)}</li>
        <li>{reduceGmt(17)}</li>
        <li>{reduceGmt(18)}</li>
        <li>{reduceGmt(19)}</li>
        <li>{reduceGmt(20)}</li>
        <li>{reduceGmt(21)}</li>
        <li>{reduceGmt(22)}</li>
        <li>{reduceGmt(23)}</li>
      </ul>
    </div>
  );
};

export default ListOfHours;
