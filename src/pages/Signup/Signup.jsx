import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"
import SectionLayout from "../../layouts/SectionLayout"
import SubBanner from '../../components/SubBanner'
import H1Container from '../../components/H1Container'
import SectionHeading from "../../components/SectionHeading"
import SignupForm from "../../components/SignupForm"

import LoginSignupBG from "../../assets/images/sign-in-out-bg.webp"

export default function Signup() {
  return (
    <PageLayout>
      <SectionLayout
        backgroundImage={LoginSignupBG}
      >
        <H1Container text="TIDALFEST ACCOUNT SETUP" />
        <SubBanner text="Sign-up" />
        <MaxWidthLayout>
          <SectionHeading
            text="CREATE AN ACCOUNT"
          />
          <SignupForm />
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
