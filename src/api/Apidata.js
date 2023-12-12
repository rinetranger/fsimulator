
import { useRecoilState} from 'recoil';
import  axios from "axios";
import { Grid } from "@mui/material";
import { apidataState } from "../Data/atom";
import { useEffect } from 'react';


export default function ApiDatas(){
const [ apidataStateValue, setApidataStateValue] = useRecoilState(apidataState);
const baseURL =  `${process.env.REACT_APP_API_URL_BASE}/apidata`;
 
  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
      const filteredData =response.data;
      setApidataStateValue(filteredData);
    })  
    .catch((error) => {
      console.error(error);
    });
}, []);

console.log(1);

return(
<Grid container spacing={2}>

</Grid>
)
}