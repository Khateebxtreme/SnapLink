import { useQuery } from "react-query";
import api from "../API/api";

export const useFetchTotalClicks = (token, onError) => {
  const queryKey = "url-totalclick";
  const queryFn = async () => {
    return await api.get(
      "/api/urls/totalClicks?startDate=2025-01-01&endDate=2026-12-31",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };

  const options = {
    select: (data) => {
      // data.data =>
      //  {
      //     "2024-01-01": 120,
      //     "2024-01-02": 95,
      //     "2024-01-03": 110,
      //   };

      const convertToArray = Object.keys(data.data).map((key) => ({
        clickDate: key,
        count: data.data[key], // data.data[2024-01-01]
      }));
      // Object.keys(data.data) => ["2024-01-01", "2024-01-02", "2024-01-03"]

      // FINAL:
      //   [
      //     { clickDate: "2024-01-01", count: 120 },
      //     { clickDate: "2024-01-02", count: 95 },
      //     { clickDate: "2024-01-03", count: 110 },
      //   ]
      return convertToArray;
    },
    onError,
    staleTime: 8000,
  };

  return useQuery(queryKey, queryFn, { ...options });
};

export const useFetchMyShortUrls = (token, onError) => {
  const queryKey = "my-short-urls";
  const queryFn = async () => {
    return await api.get("/api/urls/myurls", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });
  };

  const options = {
    select: (data) => {
      const sortedData = data.data.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      return sortedData;
    },
    onError,
    staleTime: 5000,
  };

  return useQuery(queryKey, queryFn, { ...options });
};
