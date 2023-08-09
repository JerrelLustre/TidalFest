import { Typography } from '@mui/material';
import Body from '../Body';


export default function TicketsOrderDetails() {

  const texts = [
    {
      titleTxt: "Validity",
      bodyTxt: "One Day Pass"
    },
    {
      titleTxt: "Persons Per Pass",
      bodyTxt: "1"
    },
    {
      titleTxt: "Pass Type",
      bodyTxt: "General Admission"
    },
    {
      titleTxt: "Price",
      bodyTxt: "$16.99"
    },
    {
      titleTxt: "Maximum Passes Per Order",
      bodyTxt: "8"
    },
    {
      titleTxt: "Inclusions",
      bodyTxt: "Access to all festival stages, food and drink vendors, art installations, and beach activities."
    },
    {
      titleTxt: "Age Restriction",
      bodyTxt: "All ages welcome. Children under 12 enter free with a paying adult."
    },
    {
      titleTxt: "Additional Perks",
      bodyTxt: "Discounted festival merchandise available for purchase."
    },
    {
      titleTxt: "Pass Pickup",
      bodyTxt: "Starts at 9:00 AM on the first event day at the entrance."
    },
    {
      titleTxt: "Ticket Transfer Policy",
      bodyTxt: "Transfers allowed until 48 hours before the event; non-refundable."
    }
  ]

  return (
    <>
      <Body>
        {texts.map((text, index) => (
          <Typography key={index}>
            <span className="font-bold">{text.titleTxt}:</span> {text.bodyTxt}
          </Typography>
        ))}
      </Body>
    </>
  )
}
