import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"
import SectionLayout from "../../layouts/SectionLayout"
import SubBanner from '../../components/SubBanner'
import H1Container from '../../components/H1Container'

export default function Lineup() {
  return (
    <PageLayout>
      <SectionLayout>
        <H1Container text="TidalFest Performance Lineup" />
        <SubBanner text="Check out our lineup" />
        <MaxWidthLayout>
          This is Lineup page.
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
