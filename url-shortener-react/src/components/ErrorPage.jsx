import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineError } from "react-icons/md";

const ErrorPage = ({message}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-6">
    <MdOutlineError className='text-7xl text-red-500 mb-4' />
    <h1 className='text-4xl font-bold mb-5 text-gray-800'>
        Oops! Something went wrong.
    </h1>
    <button onClick={() => {
        navigate("/");
    }}
    className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition'
    >
        Go back to home
    </button>
</div>
  )
}

export default ErrorPage