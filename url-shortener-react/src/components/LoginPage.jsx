import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../API/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextAPI/ContextAPI';

const LoginPage = () => {
    const navigate = useNavigate();
    const {setToken} = useStoreContext();
    const [loader, setLoader] = useState(false);
    const {
      register,
      handleSubmit,
      reset,
      formState: {errors}
  } = useForm({
      defaultValues: {
          username: "",
          password: "",
      },
      mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
          const {data : response} = await api.post(
            "/api/auth/public/login",
            data
        );
        //storing the bearer token in local storage for the authenticated user
        console.log(response.token)
        setToken(response.token) // setting the token at context level
        localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token))
        toast.success("User has logged in Successfully")
        reset();
        navigate("/dashboard");
        
    } catch (error) {
        console.log(error);
        toast.error("Failed to Login")
    } finally {
        setLoader(false);
    }
  };
  

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="sm:w-[450px] w-[360px]  shadow-custom py-8 sm:px-8 px-4 rounded-md border-black border"
    >
      <h1 className="text-center font-serif text-btnColor font-semibold lg:text-2xl text-xl">
        Sign In to Continue
      </h1>
      <hr className="mt-2 mb-5 border-black border" />
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
        {loader ? "Loading..." : "Login"}
      </button>
      <p className="text-center text-sm text-slate-700 mt-6">
        Don't have an Account?
        <span> </span> 
        <Link
          className="font-semibold underline hover:text-black"
          to="/register"
        >
          <span className="text-btnColor hover:text-red-500">Sign Up</span>
        </Link>
      </p>
    </form>
  </div>
  )
}

export default LoginPage

