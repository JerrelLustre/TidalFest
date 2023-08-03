import { Typography } from '@mui/material';
import Body from '../Body';


export default function TicketsOrderDetails() {

  return (
    <>
      <Body>
        <Typography>
          <span className="font-bold">Validity:</span> 3-Day Pass
        </Typography>
        <Typography>
          <span className="font-bold">Persons Per Pass:</span> 1
        </Typography>
        <Typography>
          <span className="font-bold">Pass Type:</span> General Admission
        </Typography>
        <Typography>
          <span className="font-bold">Price:</span> $120
        </Typography>
        <Typography>
          <span className="font-bold">Inclusions:</span> Access to all festival stages, food and drink vendors, art installations, and beach activities.
        </Typography>
        <Typography>
          <span className="font-bold">Age Restriction:</span> All ages welcome. Children under 12 enter free with a paying adult.
        </Typography>
        <Typography>
          <span className="font-bold">Additional Perks:</span> Discounted festival merchandise available for purchase.
        </Typography>
        <Typography>
          <span className="font-bold">Pass Pickup:</span> Starts at 9:00 AM on the first event day at the entrance.
        </Typography>
        <Typography>
          <span className="font-bold">Ticket Transfer Policy:</span> Transfers allowed until 48 hours before the event; non-refundable.
        </Typography>
      </Body>
    </>
  )
}
