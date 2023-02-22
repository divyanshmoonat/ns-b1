import { useState } from "react";
import PropTypes from "prop-types";
import "./Events.css";

const Events = (props) => {
  console.log(props.title);

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

Events.propTypes = {
  onHeadingChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  event: PropTypes.shape({
    type: PropTypes.string,
    hardware: PropTypes.string,
  }),
};

Events.defaultProps = {
  title: "ABCD",
};

export default Events;
