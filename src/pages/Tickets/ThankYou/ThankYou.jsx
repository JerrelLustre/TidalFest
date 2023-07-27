import PageLayout from "../../../layouts/PageLayout"
import MaxWidthLayout from "../../../layouts/MaxWidthLayout"
import SectionLayout from "../../../layouts/SectionLayout"
import SubBanner from '../../../components/SubBanner'
import H1Container from '../../../components/H1Container'

export default function ThankYou() {
  return (
    <PageLayout>
      <SectionLayout>
        <H1Container text="TidalFest Music Festival Tickets" />
        <SubBanner text="Thank you for your purchase" />
        <MaxWidthLayout>
          This is Thank you page.
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
