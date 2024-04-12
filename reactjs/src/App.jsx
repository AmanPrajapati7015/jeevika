import Navbar from "./components/Navbar";
import SectionA from "./form-elements/SectionA";
import SectionB from "./form-elements/SectionB"
import SectionC from "./form-elements/SectionC";
import SectionD from "./form-elements/SectionD";
import SectionE from "./form-elements/SectionE";
import SectionG from "./form-elements/SectionG";
// import SectionC from "./form-elements/SectionD";

export default function App(){
  return (
    <>
    <Navbar />
      <SectionA />
      <SectionB/>
    <SectionC />
    <SectionD />
      <SectionE />
      <SectionG />
    </>
  )
}