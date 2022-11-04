import React, { useEffect, useState } from "react";

//Styles Tailwind
const style = {
    table: `table-auto`,
    thead: ``,
    thtr: ``,
    th: ` bg-slate-300`,
    nightHours: `bg-slate-900`,
    workHours: `bg-green-900`,
    restingHoures: `bg-yellow-900`,

}

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

  function hourColoringStyle(hour) {
    if (hour > 17) {
        return true
    }
    return false
  }

  function threeStyleHourColoringStyle(hour) {
    if (hour >= 8 && hour <= 17) {
        return style.workHours
    } else if (hour >= 18 && hour <= 22 ) {
        return style.restingHoures
    }
    return style.nightHours
    
  }

  // const testMODexcel = timeGmt + (props.num / 24)
  // const testMODexcel = 120 + (4 / 24)
  // console.log(testMODexcel);

  // const testExcelAlbina = ((timeGmt/24 + (props.num/24)) % 1) * 24

//   const workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
//   const nightHours = [23, 0, 1, 2, 3, 4, 5, 6, 7]
//   const restingHours = [18, 19, 20, 21, 22]

//className={hourColoringStyle(reduceGmt(1)) ? style.nightHours : style.workHours}

//className={ threeStyleHourColoringStyle(reduceGmt(2))}>{reduceGmt(2)}


  return (
    <div>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.thtr}>
            <th className={style.th}>{props.title}</th>

            {/* {timeGmt}
            {props.num} */}
          </tr>
        </thead>

        <tbody className={style.tbody}>
          <tr className={style.tr}>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(0))}>{reduceGmt(0)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(1))}>{reduceGmt(1)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(2))}>{reduceGmt(2)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(3))}>{reduceGmt(3)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(4))}>{reduceGmt(4)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(5))}>{reduceGmt(5)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(6))}>{reduceGmt(6)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(7))}>{reduceGmt(7)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(8))}>{reduceGmt(8)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(9))}>{reduceGmt(9)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(10))}>{reduceGmt(10)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(11))}>{reduceGmt(11)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(12))}>{reduceGmt(12)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(13))}>{reduceGmt(13)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(14))}>{reduceGmt(14)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(15))}>{reduceGmt(15)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(16))}>{reduceGmt(16)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(17))}>{reduceGmt(17)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(18))}>{reduceGmt(18)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(19))}>{reduceGmt(19)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(20))}>{reduceGmt(20)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(21))}>{reduceGmt(21)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(22))}>{reduceGmt(22)}</td></tr>
            <tr><td className={threeStyleHourColoringStyle(reduceGmt(23))}>{reduceGmt(23)}</td></tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListOfHours;
