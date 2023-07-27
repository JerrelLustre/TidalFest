// components
import SubBanner from '../../../components/SubBanner'
import SectionHeading from '../../../components/SectionHeading'
import Button from '../../../components/Button'
import Body from '../../../components/Body'
import SectionSubheading from '../../../components/SectionSubHeading'
import SectionLayout from '../../../layouts/SectionLayout'
import MaxWidthLayout from '../../../layouts/MaxWidthLayout'
import BoxLayout from '../../../layouts/BoxLayout'

// assets
import BandImgOne from '../../../assets/images/featured-band1.webp'
import BandImgTwo from '../../../assets/images/featured-band2.webp'

 
export default function Musicians() {
  return (
    <>
        <SectionLayout>
            <SubBanner text="A Wide Array of performances to enjoy" />
            <MaxWidthLayout>
                <SectionHeading text="Check out our featured musicians" />
                <BoxLayout
                    imgUrl={BandImgOne}
                    imgAlt="Group shot of The Coastal Chillwaves"
                >
                    <div>
                        <SectionSubheading 
                            dateText="07.26 - 07.27"
                            subText="The Coastal Chillwaves"
                        />
                        <Body>
                            The Coastal Chillwaves are a laid-back, beach-inspired band that blends groovy surf rock with soothing reggae vibes. Their melodic tunes and catchy hooks create the perfect soundtrack for lazy days on sandy shores, making every moment feel like an endless summer.
                        </Body>
                    </div>
                </BoxLayout>
                <BoxLayout
                    imgUrl={BandImgTwo}
                    imgAlt="Group shot of The Sunset Singers"
                    isReverse
                >
                    <div>
                        <SectionSubheading 
                            dateText="07.27 - 07.28"
                            subText="The Sunset Singers"
                        />
                        <Body>
                            The Sunset Singers create dreamy, electronic beats that transport listeners to a tranquil world by the ocean, where the sunsets are captivating, and worries drift away with the gentle waves.
                        </Body>
                    </div>
                </BoxLayout>
                <div className='flex justify-center items-center pb-16'>
                    <Button 
                        text="See Full Lineup" 
                        link="/lineup"
                    />
                </div>
            </MaxWidthLayout>
        </SectionLayout>
    </>

  )
}
