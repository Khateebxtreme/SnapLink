import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../API/api';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
} = useForm({
    defaultValues: {
        username: "",
        email: "",
        password: "",
    },
    mode: "onTouched",
});
// mode allows use to configure the validation strategy before the user submits the form. onTouched allows validation to be triggered on first blur event (losing focus) + onEvery change

const registerHandler = async (data) => {
  setLoader(true);
  try {
        const {data : response} = await api.post(
          "/api/auth/public/register",
          data
      );
      reset();
      navigate("/login");
      toast.success("Registration Successfull")
  } catch (error) {
      console.log(error);
      toast.error("Registration Failed")
  } finally {
      setLoader(false);
  }
};

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="sm:w-[450px] w-[360px]  shadow-custom py-8 sm:px-8 px-4 rounded-md border-black border"
      >
        <h1 className="text-center font-serif text-btnColor font-semibold lg:text-2xl text-xl">
          Create a New Account
        </h1>
        <hr className="mt-2 mb-5 text-black border-black border" />
        <div className="flex flex-col gap-3">
          <TextField
            label="UserName"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Please Enter your username"
            register={register}
            errors={errors}
          />

          <TextField
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Please Enter your email"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Please Enter your password"
            register={register}
            min={6}
            errors={errors}
          />
        </div>
        <button
          disabled={loader}
          type='submit'
          className="bg-customRed font-semibold text-white  bg-overall-theme-gradient w-full py-2 hover:bg-overall-theme-gradient-hover transition-colors duration-100 rounded-md my-3"
        >
          {loader ? "Loading..." : "Register"}
        </button>
        <p className="text-center text-sm text-slate-700 mt-6">
          Already have an account?
          <span> </span> 
          <Link
            className="font-semibold underline hover:text-black"
            to="/login"
          >
            <span className="text-btnColor hover:text-red-500">Sign In</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage