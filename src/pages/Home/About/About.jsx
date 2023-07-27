import SubBanner from '../../../components/SubBanner'
import SectionHeading from '../../../components/SectionHeading'
import AboutImgOne from '../../../assets/images/about-image1.webp'
import AboutImgTwo from '../../../assets/images/about-image2.webp'
import AboutImgThree from '../../../assets/images/about-image3.webp'
import SectionLayout from '../../../layouts/SectionLayout'
import MaxWidthLayout from '../../../layouts/MaxWidthLayout'

export default function About() {
  return (
    <SectionLayout>
        <SubBanner text="A memorable music festival for the summer" />
        <MaxWidthLayout>
            <SectionHeading text="What is TidalFest?" />
            <div className="desktop:grid desktop:grid-cols-2 pb-14">
                <div className='flex justify-center items-center'>
                    <img src={AboutImgOne} alt="A crowd of people enjoying a concert" />
                </div>
                <p>
                    Our festival journey started with a tiny stage and a handful of die-hard fans, and now we've blossomed into a full-blown fiesta that keeps getting better with each passing year! We've jammed with legendary artists, celebrated wild milestones, and formed a massive family of festival-goers who spread the summer vibes wherever they go.
                </p>
            </div>
            <div className="desktop:grid desktop:grid-cols-2 pb-14">
                <div className='flex justify-center items-center desktop:order-2'>
                    <img src={AboutImgTwo} alt="A crowd of people enjoying a concert" />
                </div>
                <p>We're all about creating a wild, music-filled bash where everyone's invited to let loose, dance like nobody's watching, and create epic summer memories. Our dream is to bring people together from all walks of life and create a festival that's one big, happy party under the sun!</p>
            </div>
            <div className="desktop:grid desktop:grid-cols-2 pb-14">
                <div className='flex justify-center items-center'>
                    <img src={AboutImgThree} alt="Two people smiling" />
                </div>
                <p>Buy a ticket and join in the fun!</p>
            </div>
        </MaxWidthLayout>
        <SubBanner text="Hope you see you there!" />
    </SectionLayout>
  )
}
