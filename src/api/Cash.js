import React,{useEffect} from "react";
import { useRecoilState} from 'recoil';
import  axios from "axios";
import { Grid } from "@mui/material";
import { CashValueState } from "../Data/atom";



export default function CashDatas(){
const [cashValue, setCashvalue] = useRecoilState(CashValueState);
const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/cash`;
  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
      const filteredData =response.data;
      setCashvalue(filteredData);
    })  
    .catch((error) => {
      console.error(error);
    });
}, []);
console.log(4);
return(
<Grid container spacing={2}>

</Grid>
)
}