import { useState } from "react";
import SectionA from "../form-elements/SectionA";
import SectionB from "../form-elements/SectionB";
import SectionC from "../form-elements/SectionC";
import SectionD from "../form-elements/SectionD";
import "./form.css";

export default function Form() {
  const [isActive, setIsActive] = useState("A");

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
        <div className="form-section">Section E</div>
        <div className="form-section">Section F</div>
        <div className="form-section">Section G</div>
      </div>
      <div className="form-area">
        {isActive === "A" ? <SectionA /> : ""}
        {isActive === "B" ? <SectionB /> : ""}
        {isActive === "C" ? <SectionC /> : ""}
        {isActive === "D" ? <SectionD /> : ""}
      </div>
    </div>
  );
}
