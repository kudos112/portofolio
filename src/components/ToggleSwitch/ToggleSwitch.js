import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <div
      onClick={() => {
        styleContext.changeTheme();
        setChecked(!isChecked);
      }}
      style={{fontSize: "30px"}}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀️" : `🌒`}
    </div>
  )
};
export default ToggleSwitch;
