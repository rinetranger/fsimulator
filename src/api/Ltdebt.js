import React,{useEffect} from "react";
import { useRecoilState} from 'recoil';
import  axios from "axios";
import { Grid } from "@mui/material";
import { LtdebtValueState } from "Data/atom";



export default function LtdebtDatas(){
const [ltdebtValue, setLtdebtvalue] = useRecoilState(LtdebtValueState);

const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/ltdebt`;
  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
      const filteredData =response.data;
      setLtdebtvalue(filteredData);
    })  
    .catch((error) => {
      console.error(error);
    });
}, []);
console.log(8);

return(
<Grid container spacing={2}>

</Grid>
)
}