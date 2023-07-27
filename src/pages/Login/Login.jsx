import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"
import SectionLayout from "../../layouts/SectionLayout"
import SubBanner from '../../components/SubBanner'
import H1Container from '../../components/H1Container'

export default function Login() {
  return (
    <PageLayout>
      <SectionLayout>
        <H1Container text="TidalFest Account Login" />
        <SubBanner text="Log-in" />
        <MaxWidthLayout>
          This is Login page.
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
