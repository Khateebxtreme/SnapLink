import dayjs from "dayjs";
import { React, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb"
import {
  MdAnalytics,
  MdOutlineAdsClick,
  MdDeleteForever,
} from "react-icons/md";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";
import Graph from "./Graph";
import api from "../../API/api";
import { ColorRing } from "react-loader-spinner";
import { useStoreContext } from "../../contextAPI/ContextAPI";
import toast from 'react-hot-toast';
import deleteContext from "../../Utils/deleteContext"

const ShortItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [analyticsData, setAnalyticsData] = useState([]);

  const { setDeleteLoader } = useContext(deleteContext);

  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) {
      setSelectedUrl(shortUrl);
    }
    setAnalyticToggle(!analyticToggle);
  };
  const fetchMyShortUrl = async () => {
    setLoader(true);
    try {
      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=2025-01-01T00:00:00&endDate=2026-12-31T23:59:59`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setAnalyticsData(data);
      setSelectedUrl("");
      console.log(data);
    } catch (error) {
      navigate("/error");
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const deleteUrlHandler = async () => {
    setDeleteLoader(true);
    try {
      console.log("This is the selected URL -> " + shortUrl);
      const response = await api.delete(`/api/urls/delete/${shortUrl}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      toast.success("The URL has been successfully deleted", {
        position: "bottom-center",
        className: "mb-5",
        duration: 3000,
      });
      console.log(response);
    } catch (error) {
      toast.error("Url deletion failed");
      navigate("/error");
      console.log(error);
    } finally {
      setDeleteLoader(false);
      window.location.reload()
    }
  };

  useEffect(() => {
    if (selectedUrl) {
      fetchMyShortUrl();
    }
  }, [selectedUrl]);

  return (
    <div className="bg-short-list-background shadow-lg border border-solid border-slate-600 px-6 sm:py-1 py-3 rounded-xl transition-all duration-100">
      <div className="flex sm:flex-row flex-col  sm:justify-between w-full sm:gap-0 gap-5 py-5">
        <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden ">
          <div className="text-slate-900 pb-1 sm:pb-0  flex items-center gap-2 ">
            <Link
              target="_"
              className="text-[17px]  font-montserrat font-[600] text-red-400"
              to={
                import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`
              }
            >
              {import.meta.env.VITE_REACT_FRONT_END_URL.substring(
                import.meta.env.VITE_REACT_FRONT_END_URL.indexOf("l")
              ) +
                "/s/" +
                `${shortUrl}`}
            </Link>
            <FaExternalLinkAlt className="text-linkColor" />
          </div>
          <div className="flex items-center gap-1 ">
            <h3 className=" text-slate-900 font-[400] text-[17px] ">
              {originalUrl}
            </h3>
          </div>
          <div className="flex   items-center gap-8 pt-6 ">
            <div className="flex gap-1  items-center font-semibold  text-[#10b981]">
              <span>
                <TbHandClick className="text-[22px] me-1" />
              </span>
              <span className="text-[16px]">{clickCount}</span>
              <span className="text-[15px] ">
                {clickCount === 0 || clickCount === 1 ? "Click" : "Clicks"}
              </span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-lg   text-[#475569]">
              <span>
                <FaRegCalendarAlt />
              </span>
              <span className="text-[17px]">
                {dayjs(createdDate).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>
        <div className="flex  flex-1  sm:justify-end items-center gap-4">
          <CopyToClipboard
            onCopy={() => setIsCopied(true)}
            text={`${
              import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`
            }`}
          >
            <div className="flex cursor-pointer gap-1 items-center bg-copy-button-color py-2  font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white ">
              <button className="">{isCopied ? "Copied" : "Copy"}</button>
              {isCopied ? (
                <LiaCheckSolid className="text-md" />
              ) : (
                <IoCopy className="text-md" />
              )}
            </div>
          </CopyToClipboard>
          <div
            onClick={() => analyticsHandler(shortUrl)}
            className="flex cursor-pointer gap-1 items-center bg-analytics-button-gradient py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white "
          >
            <button>Analytics</button>
            <MdAnalytics className="text-md" />
          </div>
          <div
            onClick={() => deleteUrlHandler(shortUrl)}
            className="flex cursor-pointer gap-1 items-center bg-delete-button-grad py-2 font-semibold shadow-md shadow-slate-500 pl-2 pr-3 rounded-md text-white"
          >
            <button></button>
            <MdDeleteForever className="text-2xl" />
          </div>
        </div>
      </div>
      <>
        <div
          className={`${
            analyticToggle ? "flex" : "hidden"
          }  max-h-96 sm:mt-0 mt-5 min-h-96 relative  border-t-2 w-[100%] overflow-hidden `}
        >
          {loader ? (
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
          ) : (
            <>
              {analyticsData.length === 0 && (
                <div className="absolute flex flex-col justify-center sm:items-center items-center w-full left-0 top-0 bottom-0 right-0 m-0 pr-[20%]">
                  <h1 className=" text-slate-800 font-serif sm:text-2xl text-[15px] font-bold mb-1">
                    No Data For This Time Period
                  </h1>
                </div>
              )}
              <Graph graphData={analyticsData} />
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default ShortItem;
