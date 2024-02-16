import React from "react";
import { useNavigate } from "react-router-dom";
import email_icon from '../images/email-mail-svgrepo-com.svg';
import pwd_icon from '../images/password-svgrepo-com.svg';

function SignUpForm({ onSignUp }) {
    const navigate = useNavigate();

    const handleSignUp = () => {
        // Perform signup logic here

        // For example, after successful signup, you can navigate to the EmptyStatePage
        navigate('/empty-state-page');

        // Additionally, you may want to update the login state
        onSignUp();
    };

    return(
        <form action="post" className="slit-in-hr p-8 bg-white rounded-xl mb-10">
            <article className="mb-6">
                <legend className="font-semibold text-xl mb-4">Create Account</legend>
                <p className="text-gray-400">Let's get you started sharing your links!</p>
            </article>
            <fieldset>
                <label htmlFor="email">Email address</label>
                <div className="inputBox relative flex gap-4 items-center mt-2 mb-6">
                    <img src={email_icon} className="h-10 w-8 absolute left-2" alt="email icon" />
                    <input type="email" name="email" id="email" className="pl-12 w-full border-2 px-3 py-2 rounded-md outline-cyan-400" placeholder="e.g. alex@email.com" />
                </div>
                <label htmlFor="init-password">Password</label>
                <div className="inputBox relative flex gap-4 items-center mt-2 mb-6">
                    <img src={pwd_icon} className="h-12 w-8 absolute left-2" alt="pwd icon" />
                    <input type="password" name="password" id="init-password" className="pl-12 w-full border-2 px-3 py-2 rounded-md outline-cyan-400" placeholder="At least 8 characters"/>
                </div>
                <label htmlFor="repeat-password">Confirm password</label>
                <div className="inputBox relative flex gap-4 items-center mt-2 mb-6">
                    <img src={pwd_icon} className="h-12 w-8 absolute left-2" alt="pwd icon" />
                    <input type="password" name="password" id="repeat-password" className="pl-12 w-full border-2 px-3 py-2 rounded-md outline-cyan-400" placeholder="At least 8 characters"/>
                </div>
                <p className="text-gray-400">Password must contain at least 8 characters</p>
            </fieldset>
            <button className="create-account px-3 py-2 mt-4 text-white font-semibold rounded-md bg-cyan-500 hover:bg-cyan-600 w-full"  onClick={handleSignUp}>Create Account</button>
            <article className="mt-4 text-center">
                <p className="text-gray-400">Already have an account?</p>
                <span className="link-text text-cyan-500 cursor-pointer" onClick={() => navigate('/login')}>Login</span>
            </article>
        </form>
    )
}

export default SignUpForm;
