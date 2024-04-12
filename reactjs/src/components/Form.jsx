import { useEffect, useState } from "react";
import SectionA from "../form-elements/SectionA";
import SectionB from "../form-elements/SectionB";
import SectionC from "../form-elements/SectionC";
import SectionD from "../form-elements/SectionD";
import SectionE from "../form-elements/SectionE";
import SectionF from "../form-elements/SectionF";
import Decleration from "../form-elements/Declaration";
import "./form.css";

export default function Form() {
  const [isActive, setIsActive] = useState("A");
  const [state, setState] = useState(() => {
    const localValue = localStorage.getItem("STATE");
    if (localValue == null) return {};
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  });

  function handleChange(event, field) {
    setState((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  }

  return (
    <div className="form-container">
      <div className="form-section-container">
        <div
          className="form-section"
          onClick={(e) => {
            setIsActive("A");
          }}
        >
          Section A
        </div>
        <div
          className="form-section"
          onClick={(e) => {
            setIsActive("B");
          }}
        >
          Section B
        </div>
        <div
          className="form-section"
          onClick={(e) => {
            setIsActive("C");
          }}
        >
          Section C
        </div>
        <div
          className="form-section"
          onClick={(e) => {
            setIsActive("D");
          }}
        >
          Section D
        </div>
        <div
          className="form-section"
          onClick={(e) => {
            setIsActive("E");
          }}
        >
          Section E
        </div>
        <div
          className="form-section"
          onClick={(e) => {
            setIsActive("F");
          }}
        >
          Section F
        </div>
        <div
          className="form-section"
          onClick={(e) => {
            setIsActive("G");
          }}
        >
          Section G
        </div>
        <div
          className="form-section"
          onClick={(e) => {
            setIsActive("Decleration");
          }}
        >
          Decleration
        </div>
      </div>
      <div className="form-area">
        {isActive === "A" ? (
          <SectionA state={state} handleChange={handleChange} />
        ) : (
          ""
        )}
        {isActive === "B" ? (
          <SectionB state={state} handleChange={handleChange}/>
        ) : (
          ""
        )}
        {isActive === "C" ? (
          <SectionC state={state} handleChange={handleChange} />
        ) : (
          ""
        )}
        {isActive === "D" ? <SectionD state={state} handleChange={handleChange} /> : ""}
        {isActive === "E" ? <SectionE state={state} handleChange={handleChange} /> : ""}
        {isActive === "F" ? <SectionF state={state} handleChange={handleChange} /> : ""}
        {isActive === "G" ? <SectionG state={state} handleChange={handleChange} /> : ""}
        {isActive === "Decleration" ? (
          <Decleration state={state} handleChange={handleChange} />
        ) : (
          ""
        )}
        {/* {console.log(state)} */}
      </div>
    </div>
  );
}
