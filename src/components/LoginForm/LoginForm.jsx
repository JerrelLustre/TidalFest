import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useAuthContext } from '../../hooks/useAuthContext';

import { TextField } from "@mui/material";

import FormButton from "../FormButton";
import LoginSignupToggle from "../LoginSignupToggle";
import SocialLoginSignup from '../SocialLoginSignup';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, error, isPending } = useLogin();
    const { user } = useAuthContext();

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password)
    }

    return (
        <div className="pb-24">
            <form className="flex flex-col items-center gap-8 mx-auto bg-pale-100 border border-8 border-red-200 rounded-lg px-8 pt-6 pb-10 w-80">
                <div>
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
                </div>
                <div className="my-4">
                    <FormButton
                        disabled={isPending}
                        text={isPending ? "Logging in..." : "LOGIN"}
                        onClick={handleLogin}
                    />
                    {error && <p>{error}</p>}
                </div>
                <div>
                    <LoginSignupToggle 
                        promptText="Don't have an account?"
                        toggleText="Sign-up"
                        toggleLink="signup"
                    />
                </div>
                <div>
                    <SocialLoginSignup 
                        promptText="Or sign-in with:"
                    />
                </div>
            </form>
        </div>
    );
  };
  
  export default LoginForm;
  

