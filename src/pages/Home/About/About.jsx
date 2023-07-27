// components
import SubBanner from '../../../components/SubBanner'
import SectionHeading from '../../../components/SectionHeading'
import SectionLayout from '../../../layouts/SectionLayout'
import MaxWidthLayout from '../../../layouts/MaxWidthLayout'
import BoxLayout from '../../../layouts/BoxLayout'
import Body from '../../../components/Body'

// assets
import AboutImgOne from '../../../assets/images/about-image1.webp'
import AboutImgTwo from '../../../assets/images/about-image2.webp'
import AboutImgThree from '../../../assets/images/about-image3.webp'


export default function About() {
  return (
    <SectionLayout>
        <SubBanner text="A memorable music festival for the summer" />
        <MaxWidthLayout>
            <SectionHeading text="What is TidalFest?" />
            <BoxLayout
                imgUrl={AboutImgOne}
                imgAlt="A crowd of people enjoying a concert"
            >
                <Body>
                    Our festival journey started with a tiny stage and a handful of die-hard fans, and now we've blossomed into a full-blown fiesta that keeps getting better with each passing year! We've jammed with legendary artists, celebrated wild milestones, and formed a massive family of festival-goers who spread the summer vibes wherever they go.
                </Body>
            </BoxLayout>
            <BoxLayout
                imgUrl={AboutImgTwo}
                imgAlt="A crowd of people enjoying a concert"
                isReverse
            >
                <Body>
                    We're all about creating a wild, music-filled bash where everyone's invited to let loose, dance like nobody's watching, and create epic summer memories. Our dream is to bring people together from all walks of life and create a festival that's one big, happy party under the sun!
                </Body>
            </BoxLayout>
            <BoxLayout
                imgUrl={AboutImgThree}
                imgAlt="Two people smiling"
            >
                <Body>
                    Buy a ticket and join in the fun!
                </Body>
            </BoxLayout>
        </MaxWidthLayout>
        <SubBanner text="Hope to see you there!" />
    </SectionLayout>
  )
}
