import PageLayout from "../../layouts/PageLayout";
import MaxWidthLayout from "../../layouts/MaxWidthLayout";
import H1Container from "../../components/H1Container";
import SubBanner from "../../components/SubBanner";
import SectionLayout from "../../layouts/SectionLayout";

import SectionHeading from "../../components/SectionHeading";
import FAQContainer from "../../components/FAQContainer/FAQContainer";


export default function Faq() {
  return (
    <PageLayout>
      <SectionLayout>
        <H1Container text="TIDALFEST QUESTIONS AND ANSWERS" />
        <SubBanner text="Have A question?" />
        <MaxWidthLayout>
          <div className="flex flex-col justify-center items-center pb-24 pt-12">
            <SectionHeading text="TIDALFEST FAQ" />
            <FAQContainer />
          </div>
        </MaxWidthLayout>
        <SubBanner text="Hope to see you there!" />
      </SectionLayout>
    </PageLayout>
  );
}
