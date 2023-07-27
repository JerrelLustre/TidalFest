import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"
import SubBanner from '../../components/SubBanner'
import H1Container from '../../components/H1Container'
import SectionLayout from "../../layouts/SectionLayout"

export default function Faq() {
  return (
    <PageLayout>
      <SectionLayout>
        <H1Container text="FAQ" />
        <SubBanner text="Frequently Asked Questions" />
        <MaxWidthLayout>
          This is FAQ page.
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
