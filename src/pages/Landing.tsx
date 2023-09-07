import image from "../ccc.svg";
import RadioButtonGroup from "./RadioButtonGroup";
import ToggleColorMode from "./ToggleColorMode";
import "./TopNav.css";

export default function Landing() {
  return (
    <div>
      <div className="top-navbar">
        <div className="nav-title">
          CCC{" "}
          <div className="img">
            <img src={image} alt="Cloud Cost Comparator" />
          </div>
          {/* <div className="BasicSwitches"></div> */}
        </div>
      </div>
      <div className="toggle">
        <ToggleColorMode />
      </div>
      <div className="radio">
        <RadioButtonGroup />
      </div>
    </div>
  );
}
