import image from "../ccc.svg";
import ResourceWrapper from "../components/ResourceWrapper";
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
        </div>
        <div className="mode">
          <ToggleColorMode />
        </div>
      </div>
      <div>
        <ResourceWrapper />
      </div>
    </div>
  );
}
