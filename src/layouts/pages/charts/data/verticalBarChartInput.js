import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import verticalBarChartData from './verticalBarChartData';
import { 
        newvdSelector,
        segmentLabelSelector,
        segPerreproSelector,
        segdevPerSelector,
        segdivPerSelector,
        segrentPerSelector,
        segothPerSelector,
        assetratioLabelSelector,
        currentassetratioSelector,
        fixedassetratioSelector,
        debtratioLabelSelector,
        currentdebtratioSelector,
        fixeddebtratioSelector,
 } from 'Data/selector';


 function VerticalBarChartInput({ updateVerticalBarChartData }) {
  const [verticalBarChartDataState, setVerticalBarChartDataState] = useState(verticalBarChartData);
  const vdata=useRecoilValue(newvdSelector);
  const newvLabels = useRecoilValue(segmentLabelSelector);
  const newreproAmt = useRecoilValue(segPerreproSelector);
  const newdevPer = useRecoilValue(segdevPerSelector);
  const newdivPer =useRecoilValue(segdivPerSelector);
  const newrentPer=useRecoilValue(segrentPerSelector);
  const newothPer=useRecoilValue(segothPerSelector);
  const newassetLabels=useRecoilValue(assetratioLabelSelector);
  const newcassetsratio=useRecoilValue(currentassetratioSelector);
  const newfassetsratio=useRecoilValue(fixedassetratioSelector);
  const newdebtLabels=useRecoilValue(debtratioLabelSelector);
  const newcdebtratio=useRecoilValue(currentdebtratioSelector);
  const newfdebtratio=useRecoilValue(fixeddebtratioSelector);

  console.log(newvLabels);
  console.log("newvLabels");

  useEffect(() => {
    const newVerticalBarChartDataState = { ...verticalBarChartDataState };
    newVerticalBarChartDataState.segment.labels = newvLabels;
    newVerticalBarChartDataState.segment.datasets[0].data = newdevPer;
    newVerticalBarChartDataState.segment.datasets[1].data = newreproAmt;
    newVerticalBarChartDataState.segment.datasets[2].data = newrentPer;
    newVerticalBarChartDataState.segment.datasets[3].data = newdivPer;
    newVerticalBarChartDataState.segment.datasets[4].data = newothPer;
    newVerticalBarChartDataState.assetratios.labels = newassetLabels;
    newVerticalBarChartDataState.assetratios.datasets[0].data = newcassetsratio;
    newVerticalBarChartDataState.assetratios.datasets[1].data = newfassetsratio;
    newVerticalBarChartDataState.liabilityratios.labels = newdebtLabels;
    newVerticalBarChartDataState.liabilityratios.datasets[0].data = newcdebtratio;
    newVerticalBarChartDataState.liabilityratios.datasets[1].data = newfdebtratio;
  
    setVerticalBarChartDataState(newVerticalBarChartDataState);
    updateVerticalBarChartData(newVerticalBarChartDataState);
  }, [newvLabels, newreproAmt, newdevPer, newdivPer, newrentPer, newothPer, newassetLabels, newfassetsratio, newdebtLabels, newcdebtratio, newfdebtratio, updateVerticalBarChartData]);
return <></>
}

export default VerticalBarChartInput;
