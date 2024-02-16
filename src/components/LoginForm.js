import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import email_icon from '../images/email-mail-svgrepo-com.svg';
import pwd_icon from '../images/password-svgrepo-com.svg';
import InputField from './InputField';  // Import the InputField component

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleLogin = () => {
    // Trigger onLogin to update isLoggedIn state
    onLogin();

    // Redirect to EmptyStatePage after successful login
    navigate('/empty-state-page');
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="slit-in-hr p-8 bg-white rounded-xl mb-10">
      <article className="mb-6">
        <legend className="font-semibold text-xl mb-4">Login</legend>
        <p className="text-gray-400">Add your details below to get back into the app</p>
      </article>
      <fieldset>
        <label htmlFor="email">Email address</label>
        <InputField icon={email_icon} type="email" name="email" placeholder="e.g. alex@email.com" register={register} />
        <label htmlFor="password">Password</label>
        <InputField icon={pwd_icon} type="password" name="password" placeholder="Enter your password" register={register} />
      </fieldset>
      <button className="login px-3 py-2 text-white font-semibold rounded-md bg-cyan-500 hover:bg-cyan-600 w-full">Login</button>
      <article className="mt-4 text-center">
        <p className="text-gray-400">Don't have an account?</p>
        <span className="link-text cursor-pointer text-cyan-500" onClick={() => navigate('/signup')}>Create Account</span>
      </article>
    </form>
  );
}

export default LoginForm;
