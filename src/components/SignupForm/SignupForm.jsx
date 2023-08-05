import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { TextField } from "@mui/material";

import FormButton from "../FormButton";
import LoginSignupToggle from "../LoginSignupToggle";
import SocialLoginSignup from '../SocialLoginSignup';

function SignupForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { signup, isPending, error } = useSignup()
  
    const handleSignup = (e) => {
      e.preventDefault()
      signup(email, password, confirmPassword, displayName)
    }
  
    return (
        <div className="pb-24">
            <form className="flex flex-col items-center gap-8 mx-auto bg-pale-100 border-8 border-red-200 rounded-lg px-6 pt-6 pb-10 w-[360px]">
                <div>
                    <TextField
                        label="Full Name"
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="standard"
                    />
                    <TextField
                        label="Email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="standard"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="standard"
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        autoComplete="new-password"
                        obscuretext="true"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="standard"
                    />
                </div>
                <div className="my-4">
                    {!isPending &&
                    <FormButton
                        text="CREATE ACCOUNT"
                        onClick={handleSignup}
                    />
                    }
                </div>
                <div>
                    <LoginSignupToggle 
                        promptText="Already have an account?"
                        toggleText="Login"
                        toggleLink="login"
                    />
                </div>
                <div>
                    <SocialLoginSignup 
                        promptText="Or sign-up with:"
                    />
                </div>
                { isPending && <FormButton text="LOADING" disabled/> }
                { error && <p>{error}</p> }
            </form>
        </div>
    );
  };
  
  export default SignupForm;
  

