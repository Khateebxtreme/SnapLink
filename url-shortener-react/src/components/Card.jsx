import React from 'react'

const Card = ({title, description}) => {
  return (
    <div
    className="shadow-md shadow-slate-400 border flex flex-col px-4 py-8  gap-3 rounded-lg border-black"
  >
    <h1 className="text-slate-800 2xl:text-2xl text-xl flex font-bold justify-center">{title}</h1>
    <p className="text-slate-700 2xl:text-lg flex text-sm justify-center"> {description}</p>
  </div>
  )
}

export default Card