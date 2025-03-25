import React from 'react'
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="min-h-[calc(450px-140px)] flex justify-center items-center w-full">
      <div className="flex flex-col items-center gap-2">
        <Oval
          visible={true}
          height="70"
          width="70"
          color="#808000"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}

export default Loader