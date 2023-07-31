import { List, ListItem, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionSubheadingLineup from "../SectionSubheadingLineup";
import bandsData from "../../assets/data/bandsData.json";

import LineupBgTwo from "../../assets/images/lineup-bg2.webp"

const BandButton = styled(ListItemButton)(({ theme }) => ({
  fontFamily: "Montserrat",
  margin: "0",
  borderLeft: `8px solid ${theme.palette.red200.main}`,
  borderRight: `8px solid ${theme.palette.red200.main}`,
  textAlign: "center",
  padding: "1rem 2rem",
}));

function LineupDay2() {
  const bandsDay2 = bandsData.bandsDay2;

  return (
    <div 
      className="flex flex-col mx-auto"
      style={{ backgroundImage: `url(${LineupBgTwo})`}}
    >
      <div className="flex flex-col items-center max-w-lineup mx-auto pt-16 pb-10">
        <div className="mb-11">
          <SectionSubheadingLineup dateText="JULY 27" subheadingText="BAND LINEUP FOR DAY 2"/>
        </div>
        <div className="items-center">
          <List className="flex flex-col md:flex-row md:flex-wrap">
            {bandsDay2.map((band, index) => (
            <ListItem key={index} className="flex flex-col text-center flex-1">
              <BandButton
                className="bg-orange-300 font-bold text-pale-100 text-3xl shadow-sectionheading-shadow min-w-max mb-8">
                  {band}
              </BandButton>
            </ListItem> 
            ))}
          </List>
        </div>
      </div>
    </div>
  )
}

export default LineupDay2;

