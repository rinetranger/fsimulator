import React,{useEffect} from "react";
import { useRecoilState} from 'recoil';
import  axios from "axios";
import { Grid } from "@mui/material";
import { scratioValueState } from "../Data/atom";


export default function ScratioDatas(){
const [ scratioValue, setScratioValue] = useRecoilState(scratioValueState);
  
  const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/scratio`;
  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
      const filteredData =response.data;
      setScratioValue(filteredData);
    })  
    .catch((error) => {
      console.error(error);
    });
}, []);
console.log(11);
return(
<Grid container spacing={2}>

</Grid>
)
}



  


