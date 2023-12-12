import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import StepData from './StepData';
import { CashValueSelector } from 'Data/selector';
import { LtdebtValueSelector } from 'Data/selector';
import { TtlassetValueSelector } from 'Data/selector';



function UpdateCash(){
  
  const cashValue = useRecoilValue(CashValueSelector) || 0;
  const ltdebtValue= useRecoilValue(LtdebtValueSelector) || 0;
  const ttlassetValue=useRecoilValue(TtlassetValueSelector) || 0;

  const updateState = () => {
    console.log("Updating state");
    StepData.ca.amount = `¥${cashValue.toLocaleString()}`;
    StepData.ltd.amount = `¥${ltdebtValue.toLocaleString()}`;
    StepData.ttla.amount = `¥${ttlassetValue.toLocaleString()}`;
  };
  

  useEffect(() => {


    updateState();
  }, [cashValue, ltdebtValue, ttlassetValue]);

  return <> </>;
}
export default UpdateCash;
