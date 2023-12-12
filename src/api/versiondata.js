import React, { useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { versiondataState } from "Data/atom";

export default function VersionDatas() {
    const [version, setVersionvalue] = useRecoilState(versiondataState);

    const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/versiondata2`;

    useEffect(() => {
      axios
  .get(baseURL)
  .then((response) => {
    console.log("API response:", response.data);
    const versiondata = response.data;
    setVersionvalue(versiondata);
  })
  .catch((err) => {
    console.error(err);
  });
      }, []);

console.log(16);
return (
    <Grid container spacing={2}>

    </Grid>
)
}
