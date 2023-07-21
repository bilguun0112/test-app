import HelpComp from "../components/accordion";
import Carausel from "../components/carousels/carausel";
import SectionOne from "../components/mainSection";
import SectionTwo from "../components/sectionTwo";

export default function Home() {
  return (
    <div>
      <Carausel />
      {/* <SectionOne /> */}
      <SectionTwo />
    </div>
  );
}
