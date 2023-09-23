import { useState } from "react";
import ResourceWrapper from "../components/ResourceWrapper";
import ToggleColorMode from "./ToggleColorMode";
import "./TopNav.css";

export default function Landing() {
  return (
    <div>
      <div className="top-navbar">
        <div className="nav-title">
          Cloud Cost Comparator{" "}
          {/* <div className="img">
            <img src={image} alt="Cloud Cost Comparator" />
          </div> */}
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
