// src/hooks/useAtomValues.js

import { useRecoilValue } from 'recoil';
import {
  vdataState,
  newvdataValueState,
  newVdataState,
  salesValueState,
  oprofitValueState,
  netValueState,
  debtValueState,
  assetValueState,
  segmentValueState,
  versiondataState,
  scratioValueState,
  CashValueState,
  LtdebtValueState,
  apidataState,
  fixedratioValueState,
  opratioValueState,
    assetRatioState,
    defaultLine,
    TtlassetValueState,
} from '../Data/atom';

export const useAtomValues = () => {
  const vdata = useRecoilValue(vdataState);
  const newvdataValue = useRecoilValue(newvdataValueState);
  const newVdata = useRecoilValue(newVdataState);
  const salesValue = useRecoilValue(salesValueState);
  const oprofitValue = useRecoilValue(oprofitValueState);
  const netValue = useRecoilValue(netValueState);
  const debtValue = useRecoilValue(debtValueState);
  const assetValue = useRecoilValue(assetValueState);
  const segmentValue = useRecoilValue(segmentValueState);
  const versiondata = useRecoilValue(versiondataState);
  const scratioValue = useRecoilValue(scratioValueState);
  const CashValue = useRecoilValue(CashValueState);
  const LtdebtValue = useRecoilValue(LtdebtValueState);
  const apidata = useRecoilValue(apidataState);
  const fixedratioValue = useRecoilValue(fixedratioValueState);
  const opratioValue = useRecoilValue(opratioValueState);
  const assetRatio = useRecoilValue(assetRatioState);
  const defaultLinea = useRecoilValue(defaultLine);
  const TtlassetValue = useRecoilValue(TtlassetValueState);

  

  return {
    vdata,
    newvdataValue,
    newVdata,
    salesValue,
    oprofitValue,
    netValue,
    debtValue,
    assetValue,
    segmentValue,
    versiondata,
    scratioValue,
    CashValue,
    LtdebtValue,
    apidata,
    fixedratioValue,
    opratioValue,
    assetRatio,
    defaultLinea,
    TtlassetValue,
  };
};
  
  