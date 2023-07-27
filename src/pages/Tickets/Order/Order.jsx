import PageLayout from "../../../layouts/PageLayout"
import MaxWidthLayout from "../../../layouts/MaxWidthLayout"
import SectionLayout from "../../../layouts/SectionLayout"
import SubBanner from '../../../components/SubBanner'
import H1Container from '../../../components/H1Container'

export default function Order() {
  return (
    <PageLayout>
      <SectionLayout>
        <H1Container text="TidalFest Music Festival Tickets" />
        <SubBanner text="Ticket Purchase" />
        <MaxWidthLayout>
          This is Order page.
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
