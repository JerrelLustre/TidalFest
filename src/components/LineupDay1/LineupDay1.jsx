import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Band = styled(Typography)(({ theme }) => ({
  as: "li",
  fontFamily: "Montserrat",
  margin: "0",
  borderLeft: `8px solid ${theme.palette.blue?.[100] || "#67D9D2"}`,
}));

function LineupItem({ bandName }) {
  return <Band>{bandName}</Band>;
}

export default LineupItem;