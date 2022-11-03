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
    const totalHours = timeGmt + props.num + hour;
    if (totalHours < 24) {
      return totalHours;
    } else if (totalHours < 36) {
      return totalHours - 24;
    } else if (totalHours < 48) {
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
      <table>
        <thead>
          <tr>
            <th>GMT: {timeGmt}</th>
            {props.title}
            {props.num}
          </tr>
        </thead>

        <tbody>
          <tr>
            <tr><td>{reduceGmt(0)}</td></tr>
            <tr><td>{reduceGmt(1)}</td></tr>
            <tr><td>{reduceGmt(2)}</td></tr>
            <tr><td>{reduceGmt(3)}</td></tr>
            <tr><td>{reduceGmt(4)}</td></tr>
            <tr><td>{reduceGmt(5)}</td></tr>
            <tr><td>{reduceGmt(6)}</td></tr>
            <tr><td>{reduceGmt(7)}</td></tr>
            <tr><td>{reduceGmt(8)}</td></tr>
            <tr><td>{reduceGmt(9)}</td></tr>
            <tr><td>{reduceGmt(10)}</td></tr>
            <tr><td>{reduceGmt(11)}</td></tr>
            <tr><td>{reduceGmt(12)}</td></tr>
            <tr><td>{reduceGmt(13)}</td></tr>
            <tr><td>{reduceGmt(14)}</td></tr>
            <tr><td>{reduceGmt(15)}</td></tr>
            <tr><td>{reduceGmt(16)}</td></tr>
            <tr><td>{reduceGmt(17)}</td></tr>
            <tr><td>{reduceGmt(18)}</td></tr>
            <tr><td>{reduceGmt(19)}</td></tr>
            <tr><td>{reduceGmt(20)}</td></tr>
            <tr><td>{reduceGmt(21)}</td></tr>
            <tr><td>{reduceGmt(22)}</td></tr>
            <tr><td>{reduceGmt(23)}</td></tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListOfHours;
