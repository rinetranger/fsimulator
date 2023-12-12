import React,{useEffect} from "react";
import { useRecoilState} from 'recoil';
import  axios from "axios";
import { Grid } from "@mui/material";
import { assetRatioState } from "../Data/atom";



export default function AssetratioDatas(){
const [ assetratioValue, setAssetratioValue] = useRecoilState(assetRatioState);
const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/currentratio`;
  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
      const filteredData =response.data;
      setAssetratioValue(filteredData);
    })  
    .catch((error) => {
      console.error(error);
    });
}, []);

console.log(3);
return(
<Grid container spacing={2}>

</Grid>
)
}