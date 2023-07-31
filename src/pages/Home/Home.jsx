import HeroBanner from "./HeroBanner";
import Musicians from "./Musicians";
import About from "./About";
import SectionLayout from "../../layouts/SectionLayout";

import HomeBg from "../../assets/images/section-bg.webp";


export default function Home() {
  return (
      <>
        <HeroBanner />
        <SectionLayout
          backgroundImage={HomeBg}
        >
          <Musicians />
        </SectionLayout>
        <SectionLayout
          backgroundImage={HomeBg}
        >
          <About />
        </SectionLayout>
      </>
  )
}
