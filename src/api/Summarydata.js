
import { useRecoilState} from 'recoil';
import  axios from "axios";
import { Grid } from "@mui/material";
import { summaryValueState } from "../Data/atom";
import { useEffect } from 'react';


export default function SummaryDatas(){
const [ summaryValueStates, setSummaryValueState] = useRecoilState(summaryValueState);
const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/summarydata`;
 
  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
      const filteredData =response.data;
      setSummaryValueState(filteredData);
      console.log("summarydata:",filteredData);
    })  
    .catch((error) => {
      console.error(error);
    });
}, []);

console.log("summaryValueState:",summaryValueState);

return(
<Grid container spacing={2}>

</Grid>
)
}