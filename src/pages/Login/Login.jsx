import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"
import SectionLayout from "../../layouts/SectionLayout"
import SubBanner from '../../components/SubBanner'
import H1Container from '../../components/H1Container'
import SectionHeading from "../../components/SectionHeading"
import LoginForm from "../../components/LoginForm"

import LoginSignupBG from "../../assets/images/sign-in-out-bg.webp"

export default function Login() {
  return (
    <PageLayout>
      <SectionLayout
        backgroundImage={LoginSignupBG}
      >
        <H1Container text="TidalFest Account Login" />
        <SubBanner text="Log-in" />
        <MaxWidthLayout>
          <SectionHeading
            text="ACCOUNT LOGIN"
          />
          <LoginForm />
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
