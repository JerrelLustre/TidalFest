import { useState } from 'react';

import { TextField } from "@mui/material";

import Button from "../Button";
import LoginSignupToggle from "../LoginSignupToggle";
import SocialLoginSignup from '../SocialLoginSignup';

function SignupForm () {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignup = () => {
      // Handle authentication here
    };
  
    return (
        <div className="pb-24">
            <form className="flex flex-col items-center gap-8 mx-auto bg-pale-100 border border-8 border-red-200 rounded-lg px-6 pt-6 pb-10 w-[360px]">
                <div>
                    <TextField
                        label="Full Name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="standard"
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="standard"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="standard"
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="standard"
                    />
                </div>
                <div className="my-4">
                    <Button
                        text="CREATE ACCOUNT"
                        onClick={handleSignup}
                    />
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
            </form>
        </div>
    );
  };
  
  export default SignupForm;
  

