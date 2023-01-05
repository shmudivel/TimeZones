import React, { useEffect, useState } from "react";

//Styles Tailwind
const style = {
  table: `w-full table-auto`,
  thead: `w-fit`,
  thtr: `w-fit`,
  th: ` rounded-sm text-[0.60rem] md:text-base	 bg-slate-300`,

  //color
  nightHours: ` rounded border-[1px] border-b-slate-100 text-center  bg-purple-300`,
  workHours: ` rounded border-[1px] border-b-slate-100 text-center  bg-lime-200`,
  restingHoures: `  rounded border-[1px] border-b-slate-100 text-center  bg-amber-200`,
};

const ListOfHours = (props) => {
  const [timeGmt, setTimeGmt] = useState();

  useEffect(() => {
    const date = new Date();
    setTimeGmt(date.getUTCHours());
  }, []);

  const getLocalHour = () => {
    const date = new Date();
    return date.getHours();
  };

  function defaultTimeZoneTitle() {
    if (props.title === undefined) {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } else {
      return props.title;
    }
  }

  function reduceGmt(hour) {
    // Initialize totalHours to timeGmt + props.num + hour
    let totalHours = timeGmt + props.num + hour;

    // If totalHours is not a number, set totalHours to the local time plus the hour from the table
    if (isNaN(totalHours)) {
      totalHours = getLocalHour() + hour;
    }

    // Use a for loop to keep subtracting 24 from totalHours until it is less than 24
    for (let i = 0; totalHours >= 24; i++) {
      totalHours -= 24;
    }

    // If totalHours is less than 0, add 24
    if (totalHours < 0) {
      totalHours += 24;
    }

    return totalHours;
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
          </tr>
        </thead>

        <tbody className={style.tbody}>
          {/* Use a for loop to generate the rows of the table */}
          {Array.from(Array(24).keys()).map((hour) => (
            <tr key={hour}>
              <td
                className={`${style.td} ${threeStyleHourColoringStyle(
                  reduceGmt(hour)
                )}`}
              >
                {reduceGmt(hour)}:00
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfHours;
