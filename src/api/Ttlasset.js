import React,{useEffect} from "react"
import { useRecoilState} from 'recoil';

import  axios from "axios";
import { Grid } from "@mui/material";
import { TtlassetValueState } from "../Data/atom";


export default function TtlassetDatas(){
const [ttlassetValue, setTtlassetvalue] = useRecoilState(TtlassetValueState);
const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/ttlasset`;

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const filteredData =response.data;
        setTtlassetvalue(filteredData);
      })  
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(14);
return(
<Grid container spacing={2}>

</Grid>
)
}