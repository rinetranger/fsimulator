import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import dataTableData from './dataTableData';
import {versiondataState} from "Data/atom"

function DataTableDataInput(){
const [datatableData,setDataTableDataInput]=useState(dataTableData);
const newData=useRecoilValue(versiondataState);


useEffect(() => {
    const newdataTableData = { ...dataTableData };
    newdataTableData.rows = newData.map((item) => ({
        version: item.version,
        remarks: item.comment,
      }));
      setDataTableDataInput(newdataTableData);
  }, [newData]);
  
  
  return null;
}
export default  DataTableDataInput;
