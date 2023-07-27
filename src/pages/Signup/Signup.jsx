import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"
import SectionLayout from "../../layouts/SectionLayout"
import SubBanner from '../../components/SubBanner'
import H1Container from '../../components/H1Container'

export default function Signup() {
  return (
    <PageLayout>
      <SectionLayout>
        <H1Container text="TidalFest Account Setup" />
        <SubBanner text="Sign-up" />
        <MaxWidthLayout>
          This is Signup page.
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
