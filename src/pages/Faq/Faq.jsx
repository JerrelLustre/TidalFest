import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"
import H1Container from "../../components/H1Container"
import SubBanner from "../../components/SubBanner"
import SectionLayout from "../../layouts/SectionLayout"

export default function Faq() {
  return (
    <PageLayout>
      <SectionLayout>
          <H1Container text="FAQ" />
          <SubBanner text="Frequently Asked Questions" />
          <MaxWidthLayout>
            THIS IS FAQ
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
