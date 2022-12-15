import React, { useEffect, useState } from "react";

//Styles Tailwind
const style = {
  table: `w-full table-auto`,
  thead: `w-fit`,
  thtr: `w-fit`,
  th: ` rounded text-[0.60rem] md:text-base	 bg-slate-300`,

  //color
  nightHours: ` rounded border-[1px] border-b-slate-100 text-center  bg-purple-300`,
  workHours: ` rounded border-[1px] border-b-slate-100 text-center  bg-lime-200`,
  restingHoures: `  rounded border-[1px] border-b-slate-100 text-center  bg-amber-200`,
};

const ListOfHours = (props) => {
  const [timeGmt, setTimeGmt] = useState();

  const test = props.title;
  console.log(test);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimeGmt(date.getUTCHours());
    }, 1000);
  }, []);

  const getLocalHour = () => {
    const date = new Date();
    return date.getHours();
  };

  function defaultTimeZoneTitle() {
    const date = new Date();
    if (props.title === undefined) {
      return date
        .toLocaleTimeString("en-us", { timeZoneName: "short" })
        .split(" ")[2];
    } else {
      return props.title;
    }
  }

  function reduceGmt(hour) {
    // let because of NaN and I need to redeclare it
    let totalHours = timeGmt + props.num + hour;

    // localHour is the local time plus the hour from table
    const localHour = getLocalHour() + hour;

    // if totalHours is not a number then return localHour
    if (isNaN(totalHours)) {
      let totalHours = localHour;
      if (totalHours < 0) {
        return totalHours + 24;
      } else if (totalHours < 24) {
        return totalHours;
      } else if (totalHours < 36) {
        return totalHours - 24;
      } else if (totalHours < 48) {
        return totalHours - 24;
      } else {
        return totalHours - 48;
      }
    }
    // if totalHours is a number then return totalHours
    if (totalHours < 0) {
      return totalHours + 24;
    } else if (totalHours < 24) {
      return totalHours;
    } else if (totalHours < 36) {
      return totalHours - 24;
    } else if (totalHours < 48) {
      return totalHours - 24;
    } else {
      return totalHours - 48;
    }
  }

  function threeStyleHourColoringStyle(hour) {
    if (hour >= 8 && hour <= 17) {
      return style.workHours;
    } else if (hour >= 18 && hour <= 22) {
      return style.restingHoures;
    }
    return style.nightHours;
  }

  return (
    <div>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.thtr}>
            <th className={style.th}>{defaultTimeZoneTitle()}</th>

            {/* {timeGmt}
            {props.num} */}
          </tr>
        </thead>

        <tbody className={style.tbody}>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(0))}>
              {reduceGmt(0)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(1))}>
              {reduceGmt(1)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(2))}>
              {reduceGmt(2)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(3))}>
              {reduceGmt(3)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(4))}>
              {reduceGmt(4)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(5))}>
              {reduceGmt(5)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(6))}>
              {reduceGmt(6)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(7))}>
              {reduceGmt(7)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(8))}>
              {reduceGmt(8)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(9))}>
              {reduceGmt(9)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(10))}>
              {reduceGmt(10)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(11))}>
              {reduceGmt(11)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(12))}>
              {reduceGmt(12)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(13))}>
              {reduceGmt(13)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(14))}>
              {reduceGmt(14)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(15))}>
              {reduceGmt(15)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(16))}>
              {reduceGmt(16)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(17))}>
              {reduceGmt(17)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(18))}>
              {reduceGmt(18)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(19))}>
              {reduceGmt(19)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(20))}>
              {reduceGmt(20)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(21))}>
              {reduceGmt(21)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(22))}>
              {reduceGmt(22)}:00
            </td>
          </tr>
          <tr>
            <td className={threeStyleHourColoringStyle(reduceGmt(23))}>
              {reduceGmt(23)}:00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListOfHours;
