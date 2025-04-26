import React, { createContext, useEffect, useState } from "react";
import Graph from "./Graph";
import { placeholderData } from "../../PlaceHolder_Data/data";
import { useStoreContext } from "../../contextAPI/ContextAPI";
import { useFetchTotalClicks, useFetchMyShortUrls } from "../../Hooks/useQuery";
import ShortenPopUp from "./ShortenPopUp";
import ShortUrlList from "./ShortUrlList";
import { FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";
import { ColorRing } from "react-loader-spinner";
import deleteContext from "../../Utils/deleteContext"

const DashboardLayout = () => {
  const navigate = useNavigate();

  const [deleteLoader, setDeleteLoader] = useState(false);

  const [shortenPopUp, setShortenPopUp] = useState(false); //to handle the click on create new short url button

  const { token } = useStoreContext();
  function onError() {
    navigate("/error");
  }

  const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(
    token,
    onError
  );

  const {
    isLoading,
    data: myShortUrls,
    refetch,
  } = useFetchMyShortUrls(token, onError);

  useEffect(()=>{
    refetch(myShortUrls)
  },[deleteLoader])

  // console.log(useFetchTotalClicks(token, onError));
  // console.log(useFetchMyShortUrls(
  //   token,
  //   onError
  // ))

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      {loader ? (
        <Loader />
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          <div className=" h-97 relative">
            {totalClicks.length === 0 && (
              <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                  No Data is Available for This Time Period
                </h1>
              </div>
            )}
            <Graph graphData={totalClicks} />
          </div>
          <div className="py-3 sm:text-end text-center">
            <button
              className="bg-overall-theme-gradient  hover:bg-overall-theme-gradient-hover px-3 py-2 rounded-lg text-white"
              onClick={() => setShortenPopUp(true)}
            >
              Create A New Short Url
            </button>
          </div>

          <div>
            {!isLoading && myShortUrls.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center  py-6 sm:px-8 px-5 rounded-md   shadow-lg  bg-gray-50">
                  <h1 className="text-slate-800 font-montserrat   sm:text-[18px] text-[14px] font-semibold mb-1 ">
                    You haven't created any short link yet
                  </h1>
                  <FaLink className="text-blue-500 sm:text-xl text-sm " />
                </div>
              </div>
            ) : (
              <deleteContext.Provider value={{ setDeleteLoader }}>
                {!deleteLoader ? (
                  <div>
                    <ShortUrlList data={myShortUrls} />
                  </div>
                ) : (
                  <div className="min-h-[calc(450px-140px)] flex justify-center items-center w-full">
                    <div className="flex flex-col items-center gap-2">
                      <ColorRing
                        visible={true}
                        height="55"
                        width="55"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={[
                          "#32CD32",
                          "#32CD32",
                          "#32CD32",
                          "#32CD32",
                          "#32CD32",
                        ]}
                      />
                      <h4 className="text-slate-800"> Please Wait ...</h4>
                    </div>
                  </div>
                )}
              </deleteContext.Provider>
            )}
          </div>
        </div>
      )}

      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default DashboardLayout;
