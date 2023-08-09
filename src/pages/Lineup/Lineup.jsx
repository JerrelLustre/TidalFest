// components
import PageLayout from "../../layouts/PageLayout"
import MaxWidthLayout from "../../layouts/MaxWidthLayout"
import SectionLayout from "../../layouts/SectionLayout"
import SubBanner from '../../components/SubBanner'
import H1Container from '../../components/H1Container'
import LineupDay1 from "../../components/LineupDay1/LineupDay1"
import LineupDay2 from "../../components/LineupDay2/LineupDay2"
import LineupDay3 from "../../components/LineupDay3/LineupDay3"

// assets

import LineupBgMain from '../../assets/images/lineup-bg-main.webp'


export default function Lineup() {
  return (
    <PageLayout>
      <SectionLayout
        backgroundImage={LineupBgMain}
      >
        <H1Container text="TidalFest Performance Lineup" />
        <SubBanner text="Check out our lineup" />
        <MaxWidthLayout>
          <LineupDay1 />
          <LineupDay2 />
          <LineupDay3 />
        </MaxWidthLayout>
        <SubBanner text="HOPE TO SEE YOU THERE!" />
      </SectionLayout>
    </PageLayout>
  )
}
