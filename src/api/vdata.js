import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { vdataState } from "Data/atom";
import { Grid } from "@mui/material";

export default function VDatas() {
  const [vdata, setVdataState] = useRecoilState(vdataState);
  const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/versiondata`;

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const filteredData =response.data;
        setVdataState(filteredData);
      })  
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(15);
  
  return <Grid container spacing={2}></Grid>;
}
