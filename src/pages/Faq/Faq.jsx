import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"

export default function Faq() {
  return (
    <PageLayout
      h1Text="FAQ"
      sloganText="Frequently Asked Questions"
    >
      <MaxWidthLayout>
        This is FAQ page.
      </MaxWidthLayout>
    </PageLayout>
  )
}
