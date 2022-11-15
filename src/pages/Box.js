import React, { useState } from "react";

export const Box = (props) => {
  //   const [on, setOn] = useState(props.on);

  //   function toggle() {
  //     setOn((prevOn) => !prevOn);
  //   }
  const styles = {
    backgroundColor: props.on ? "#222222" : "#cccccc",
  };
  return (
    <div
      className="box"
      style={styles}
      onClick={() => props.toggle(props.id)}
    ></div>
  );
};
