import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStoreContext } from '../../contextAPI/ContextAPI';
import { Tooltip } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import api from '../../API/api';
import toast from 'react-hot-toast';
import TextField from '../TextField';

const CreateNewShorten = ({setOpen, refetch}) => {

  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
        const { data: res } = await api.post("/api/urls/short", data, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + token,
            },
          });

          const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${res.shortUrl}`}`;
          navigator.clipboard.writeText(shortenUrl).then(() => {
            toast.success("Short URL Copied to Clipboard", {
                position: "bottom-center",
                className: "mb-5",
                duration: 3000,
            });
          });
          await refetch();
          reset();
          setOpen(false);
    } catch (error) {
        toast.error("ShortURL creation Failed");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center bg-white rounded-md">
    <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[550px] w-[400px] relative shadow-custom pt-10 pb-7 sm:px-8 px-4 rounded-xl"
      >

        <h1 className="font-montserrat sm:mt-0 mt-2 text-center font-bold sm:text-2xl text-[23px] text-slate-800 ">
                Create a new Short Url
        </h1>

        <hr className="mt-2 sm:mb-5 mb-3 border-black border text-slate-950" />

        <div>
          <TextField
            label="Enter URL"
            required
            id="originalUrl"
            placeholder="https://example-webpage.com"
            type="url"
            message="Url is required"
            register={register}
            errors={errors}
          />
        </div>

        <button
          className="bg-customRed font-semibold text-white w-24  bg-custom-gradient-3 hover:bg-button-gradient-hover  py-2 transition-colors  rounded-lg my-3"
          type="text"
        >
          {loading ? "Loading..." : "Create"}
        </button>

        {!loading && (
          <Tooltip title="Close">
            <button
              disabled={loading}
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2"
            >
              <RxCross2 className="text-slate-800   text-3xl" />
            </button>
          </Tooltip>
        )}

      </form>
    </div>
  )
}

export default CreateNewShorten