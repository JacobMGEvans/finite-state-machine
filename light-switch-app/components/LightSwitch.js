import React from "react";
import { toggleService } from "../../machines/light-switch-machine";
import "./bulb.css";

export function LightSwitch() {
  return (
    <div className="switch">
      <input
        type="checkbox"
        name="toggle"
        onClick={() => toggleService.send(`TOGGLE`)}
      />
      <label htmlFor="toggle">
        <i className="bulb">
          <span className="bulb-center" />
          <span className="filament-1" />
          <span className="filament-2" />
          <span className="reflections">
            <span />
          </span>
          <span className="sparks">
            <i className="spark1" />
            <i className="spark2" />
            <i className="spark3" />
            <i className="spark4" />
            {/* <i className="sparks5" /> */}
          </span>
        </i>
      </label>
    </div>
  );
}
