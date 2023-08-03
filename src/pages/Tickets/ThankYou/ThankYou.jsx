import PageLayout from "../../../layouts/PageLayout"
import MaxWidthLayout from "../../../layouts/MaxWidthLayout"
import SectionLayout from "../../../layouts/SectionLayout"
import SubBanner from '../../../components/SubBanner'
import H1Container from '../../../components/H1Container'
import Body from "../../../components/Body"
import Button from "../../../components/Button"

export default function ThankYou() {
  return (
    <PageLayout>
      <SectionLayout>
        <H1Container text="TidalFest Music Festival Tickets" />
        <SubBanner text="Thank you for your purchase" />
        <MaxWidthLayout>
          <div className="flex justify-center items-center flex-col min-h-TicketsThankyou py-20">
            <Body>
              We’ve emailed you your passes, present them upon entering the festival in order to gain access to the event.
            </Body>
            <div className="py-20">
              <Button 
                text="Return Home"
                link="/"
              />
            </div>
          </div>
        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
