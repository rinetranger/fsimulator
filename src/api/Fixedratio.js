import React,{useEffect} from "react";
import { useRecoilState} from 'recoil';
import  axios from "axios";
import { Grid } from "@mui/material";
import { fixedratioValueState } from "../Data/atom";



export default function FixedratioDatas(){
const [ fixedratioValue, setFixedratioValue] = useRecoilState(fixedratioValueState);
const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/fixedratio`;
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const filteredData =response.data;
        setFixedratioValue(filteredData);
      })  
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(6);

return(
<Grid container spacing={2}>

</Grid>
)
}