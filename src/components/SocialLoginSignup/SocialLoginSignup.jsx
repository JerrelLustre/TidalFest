import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// assets
import FacebookIcon from "../../assets/images/facebook-loginsignup.svg";
import GoogleIcon from "../../assets/images/google-loginsignup.svg";
import GitHubIcon from "../../assets/images/github-loginsignup.svg";

// firebase auth
import { auth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithPopup } from '../../firebase/config';


export default function SocialLoginSignup({ promptText, altText }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (provider, providerName) => {
    try {
      const authProvider = getAuthProvider(provider);
      await signInWithPopup(auth, authProvider);
      setIsLoggedIn(true);

      // Upon successful login, return the user to the home page
      navigate('/');

    } catch (err) {
      console.error(`${providerName} login error:`, err);
    }
  };

  const getAuthProvider = (provider) => {
    switch (provider) {
      case 'google':
        return new GoogleAuthProvider();
      case 'facebook':
        return new FacebookAuthProvider();
      case 'github':
        return new GithubAuthProvider();
      default:
        throw new Error('Invalid provider');
    }
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
          onClick={() => handleSignIn('google', 'Google')}
        >
          <img 
            src={GoogleIcon}
            alt={altText}
            width="48.7px"
            height="auto"
          />
        </IconButton>
        <IconButton
          onClick={() => handleSignIn('facebook', 'Facebook')}
        >
          <img 
            src={FacebookIcon}
            alt={altText}
            width="45.86px"
            height="auto"
          />
        </IconButton>
        <IconButton
          onClick={() => handleSignIn('github', 'Github')}
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
