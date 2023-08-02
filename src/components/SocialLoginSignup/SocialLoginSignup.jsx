import { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// assets
import FacebookIcon from "../../assets/images/facebook-loginsignup.svg";
import GoogleIcon from "../../assets/images/google-loginsignup.svg";
import GitHubIcon from "../../assets/images/github-loginsignup.svg";

export default function SocialLoginSignup({ promptText, altText }) {
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const handleSocialLogin = (provider) => {
    // Add your Firebase authentication logic for social login here
    // You can use the "provider" parameter to determine which social login option was clicked (e.g., 'facebook', 'google', 'github')
    // You can also use the "isLoggingIn" state to determine if the user is logging in or signing up
    // Perform the necessary actions based on the authentication response
  };

  const Prompt = styled(Typography) ({
    fontSize: "16px",
    fontFamily: "Montserrat",
    margin: "0",
    lineHeight: "24px",
  })

  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <Prompt>
          {promptText}
        </Prompt>
      </div>
      <div className="flex gap-3">
        <IconButton
          onClick={() => handleSocialLogin("google")}
        >
          <img 
            src={GoogleIcon}
            alt={altText}
            width="48.7px"
            height="auto"
          />
        </IconButton>
        <IconButton
          onClick={() => handleSocialLogin("facebook")}
        >
          <img 
            src={FacebookIcon}
            alt={altText}
            width="45.86px"
            height="auto"
          />
        </IconButton>
        <IconButton
          onClick={() => handleSocialLogin("github")}
        >
          <img 
            src={GitHubIcon}
            alt={altText}
            width="48.7px"
            height="auto"
          />
        </IconButton>
      </div>
    </div>
  );
}
