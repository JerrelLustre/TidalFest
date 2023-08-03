import PageLayout from "../../../layouts/PageLayout"
import MaxWidthLayout from "../../../layouts/MaxWidthLayout"
import SectionLayout from "../../../layouts/SectionLayout"
import SubBanner from '../../../components/SubBanner'
import H1Container from '../../../components/H1Container'
import TicketsOrderResult from "../../../components/TicketsOrderResult"
import TicketsOrderDetails from "../../../components/TicketsOrderDetails"
import PaypalButton from "../../../components/PaypalButton"
import SectionHeading from '../../../components/SectionHeading';


export default function Order() {

  return (
    <PageLayout>
      <SectionLayout>
        <H1Container text="TidalFest Music Festival Tickets" />
        <SubBanner text="Ticket Purchase" />
        <MaxWidthLayout>
          <div className="flex justify-center items-center flex-col min-h-screen py-20 desktop:py-0">
            <div className="w-full desktop:pb-6">
              <SectionHeading 
                text="Ticket Details" 
                isSmallMargin 
              />
            </div>
            <div className="desktop:flex desktop:justify-center desktop:items-start desktop:gap-10">
              <div className="desktop:order-2 desktop:h-full">
                <TicketsOrderResult />
                <div className="py-6">
                  <PaypalButton />
                </div>
              </div>
              <div>
                <TicketsOrderDetails />
              </div>
            </div>
          </div>

        </MaxWidthLayout>
      </SectionLayout>
    </PageLayout>
  )
}
