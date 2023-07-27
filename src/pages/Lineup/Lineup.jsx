import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"

export default function Lineup() {
  return (
    <PageLayout
      h1Text="TidalFest Performance Lineup"
      sloganText="Check out our lineup"
    >
      <MaxWidthLayout>
        This is Lineup page.
      </MaxWidthLayout>
    </PageLayout>
  )
}
