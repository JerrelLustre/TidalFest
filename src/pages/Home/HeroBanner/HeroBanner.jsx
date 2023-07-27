import { Typography, useTheme } from '@mui/material';
import { styled } from "@mui/material/styles";

// components
import wave from '../../../assets/images/wave.svg';
import Button from '../../../components/Button';
import VancouverFestivalBanner from '../../../components/VancouverFestivalBanner';

export default function HeroBanner() {

  const theme = useTheme();

  const HeroTitle = styled(Typography)(() => ({
    color: theme.palette.yellow100.main,
    textAlign: "center",
    fontSize: "9vw",
    textShadow: `-6px 3px ${theme.palette.red100.main}, -12px 6px ${theme.palette.jade300.main}`,
    [theme.breakpoints.up('tablet')]: {
      lineHeight: 1,
    },
    [theme.breakpoints.up('desktop')]: {
      fontSize: "7.5rem",
    }
  }))

  const HeroSubTitle = styled(Typography)(() => ({
    color: theme.palette.white.main,
    padding: "0 1rem",
    fontSize: "5vw",
    lineHeight: 1.25,
    [theme.breakpoints.up('tablet')]: {
      fontSize: "2.5rem",
    }
  }))

  return (
    <>
      <section className="bg-hero-bg bg-no-repeat bg-center bg-cover h-90vh flex flex-col justify-center items-center">
        <div>
          <img 
            src={wave} 
            alt="Wave graphic"
            width="300px"
            className="px-6 tablet:w-400 tablet:px-0"
          />
          <HeroTitle className="font-flegrei relative">
            TidalFest 2023
          </HeroTitle>
        </div>
        <HeroSubTitle className="font-permanentmarker text-white text-center" >
          Join in the fun this summer and buy tickets now
        </HeroSubTitle>
        <div className="pt-20">
          <Button 
            text="Buy Tickets Now"
            link="/tickets" 
          />
        </div>
      </section>
      <VancouverFestivalBanner />
      <Typography className="bg-jade-300 text-white text-center font-extrabold">July 27 - July 30</Typography>
    </>

  )
}
