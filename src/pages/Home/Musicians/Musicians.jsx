import SubBanner from '../../../components/SubBanner'
import SectionHeading from '../../../components/SectionHeading'
import BandImgOne from '../../../assets/images/featured-band1.webp'
import BandImgTwo from '../../../assets/images/featured-band2.webp'
import Button from '../../../components/Button'
import SectionLayout from '../../../layouts/SectionLayout'
import MaxWidthLayout from '../../../layouts/MaxWidthLayout'

export default function Musicians() {
  return (
    <>
        <SectionLayout>
            <SubBanner text="A Wide Array of performances to enjoy" />
            <MaxWidthLayout>
                <SectionHeading text="Check out our featured musicians" />
                <div className="desktop:grid desktop:grid-cols-2 pb-14">
                    <div className="flex justify-center items-center">
                        <img src={BandImgOne} alt="Group shot of The Coastal Chillwaves" />
                    </div>
                    <div>
                        <div>
                            <p>07.26 - 07.27</p>
                            <p>The Coastal Chillwaves</p>
                        </div>
                        <p>
                            The Coastal Chillwaves are a laid-back, beach-inspired band that blends groovy surf rock with soothing reggae vibes. Their melodic tunes and catchy hooks create the perfect soundtrack for lazy days on sandy shores, making every moment feel like an endless summer.
                        </p>
                    </div>
                </div>
                <div className="desktop:grid desktop:grid-cols-2 pb-14">
                    <div className="flex justify-center items-center desktop:order-2">
                        <img src={BandImgTwo} alt="Group shot of The Sunset Singers" />
                    </div>
                    <div>
                        <div>
                            <p>07.27 - 07.28</p>
                            <p>The Sunset Singers</p>
                        </div>
                        <p>
                            The Sunset Singers create dreamy, electronic beats that transport listeners to a tranquil world by the ocean, where the sunsets are captivating, and worries drift away with the gentle waves.
                        </p>
                    </div>
                </div>
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
