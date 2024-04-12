import Navbar from "./components/Navbar";
import SectionA from "./form-elements/SectionA";
import SectionB from "./form-elements/SectionB"
import SectionC from "./form-elements/SectionC";

export default function App(){
  return (
    <>
    <Navbar />
      <SectionA />
      <SectionB/>
    <SectionC />
    </>
  )
}