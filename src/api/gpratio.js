import React,{useEffect} from "react";
import { useRecoilState} from 'recoil';
import  axios from "axios";
import { Grid } from "@mui/material";
import {opratioValueState } from "../Data/atom";

export default function GpratioDatas(){
const [opratioValue, setOpratioValue] = useRecoilState(opratioValueState);

  const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/soratio`;
  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
      const filteredData =response.data;
      setOpratioValue(filteredData);
    })  
    .catch((error) => {
      console.error(error);
    });
}, []);
console.log(7);
return(
<Grid container spacing={2}>

</Grid>
)
}



  


