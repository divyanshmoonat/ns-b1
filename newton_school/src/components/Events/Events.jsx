import { useState } from "react";

import "./Events.css";

const Events = (props) => {
  console.log(props);

  // const [heading, setHeading] = useState("");
  const [color, setColor] = useState("");

  const onInputChange = (event) => {
    // setHeading(event.target.value);
    // console.log(event.target.value);
    props.onHeadingChange(event.target.value);
  };

  const onColorChange = (event) => {
    // console.log(event.target.value);
    setColor(event.target.value);
  };

  return (
    <div className="events-container" style={{ backgroundColor: color }}>
      <input onChange={onInputChange} placeholder="Enter some text" />
      <input onChange={onColorChange} type={"color"} />
      {/* <h3>{heading}</h3> */}
    </div>
  );
};
export default Events;
