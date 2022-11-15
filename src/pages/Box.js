import React, { useState } from "react";

export const Box = (props) => {
  const [on, setOn] = useState(props.on);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  const styles = {
    backgroundColor: on ? "#222222" : "#cccccc",
  };
  return <div className="box" style={styles} onClick={toggle}></div>;
};
