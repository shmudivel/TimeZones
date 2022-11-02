import React, { useEffect, useState } from "react";

const ListOfHours = (props) => {
  const [timeGmt, setTimeGmt] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      // const dateAndGMT = date.toGMTString()

      // setClockState(dateAndGMT.getTimezoneOffset())
      setTimeGmt(date.getUTCHours());
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        {/* <div>GMT: {timeGmt}</div> */}
        <h1 className="">{props.title}</h1>
        {/* <h2>{props.num}</h2> */}
      </div>

      <ul>
        <li>{timeGmt + props.num}</li>
        <li>{timeGmt + props.num + 1}</li>
        <li>{timeGmt + props.num + 2}</li>
        <li>{timeGmt + props.num + 3}</li>
        <li>{timeGmt + props.num + 4}</li>
        <li>{timeGmt + props.num + 5}</li>
        <li>{timeGmt + props.num + 6}</li>
        <li>{timeGmt + props.num + 7}</li>
        <li>{timeGmt + props.num + 8}</li>
        <li>{timeGmt + props.num + 9}</li>
        <li>{timeGmt + props.num + 10}</li>
        <li>{timeGmt + props.num + 11}</li>
        <li>{timeGmt + props.num + 12}</li>
        <li>{timeGmt + props.num + 13}</li>
        <li>{timeGmt + props.num + 14}</li>
        <li>{timeGmt + props.num + 15}</li>
        <li>{timeGmt + props.num + 16}</li>
        <li>{timeGmt + props.num + 17}</li>
        <li>{timeGmt + props.num + 18}</li>
        <li>{timeGmt + props.num + 19}</li>
        <li>{timeGmt + props.num + 20}</li>
        <li>{timeGmt + props.num + 21}</li>
        <li>{timeGmt + props.num + 22}</li>
        <li>{timeGmt + props.num + 23}</li>
      </ul>
    </div>
  );
};

export default ListOfHours;
