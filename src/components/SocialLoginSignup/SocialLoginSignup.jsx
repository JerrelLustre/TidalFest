import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// assets
import GoogleIcon from "../../assets/images/google-loginsignup.svg";
import GitHubIcon from "../../assets/images/github-loginsignup.svg";

// firebase auth
import { 
  auth, 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup 
} from '../../firebase/config';


export default function SocialLoginSignup({ promptText, altText }) {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignIn = async (provider, providerName) => {
    try {

      // Check is user is already authenticated
      if (user) {
        const providerData = user.providerData;

        const isAuthenticatedWithProvider = providerData.some(
          (data) => data.providerId === `${provider}.com`
        );

        if (isAuthenticatedWithProvider) {
          setErrorMessage(`User is already authenticated with ${providerName}`);
          return;
        }
      }

      const authProvider = getAuthProvider(provider);
      await signInWithPopup(auth, authProvider);

      // Upon successful login, return the user to the home page
      navigate('/');

    } catch (error) {
      console.error(`${providerName} login error:`, error);
      setErrorMessage(error.message);
    }
  };

  const getAuthProvider = (provider) => {
    switch (provider) {
      case 'google':
        return new GoogleAuthProvider();
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
      <div>
      {errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
