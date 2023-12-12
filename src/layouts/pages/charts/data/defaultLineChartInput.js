    // import { useRecoilValue, useRecoilState } from "recoil";
    // import { useState,useEffect } from "react";
    // import {
    // assetratioLabelSelector,
    // currentassetratioSelector,
    // fixedassetratioSelector,
    // } from "Data/selector";
    // import defaultLineChartData from "./defaultLineChartData";



    // function DefaultLineChartInput() {
    //     const [defaultLineChartDataState, setDefaultLineChartDataState] = useState(defaultLineChartData);
      
    //     const assetratioLabel = useRecoilValue(assetratioLabelSelector);
    //     const currentassetratio = useRecoilValue(currentassetratioSelector);
    //     const fixedassetratio = useRecoilValue(fixedassetratioSelector);
    //     console.log(assetratioLabel);
    //     console.log(currentassetratio);
    //     console.log(fixedassetratio);
    //     useEffect(() => {
    //       const newdefaultLineChartData = { ...defaultLineChartDataState };
    //       newdefaultLineChartData.assetsratio.labels = assetratioLabel;
    //       newdefaultLineChartData.assetsratio.datasets = newdefaultLineChartData.assetsratio.datasets.map((dataset, i) => {
    //         return {
    //           ...dataset,
    //           data: i === 0 ? currentassetratio.map((item) => item.currentRatio) : fixedassetratio.map((item) => item.fixedRatio)
    //         };
    //       });
    //       setDefaultLineChartDataState(newdefaultLineChartData);
    //     }, [assetratioLabel, currentassetratio, fixedassetratio]);
      
    //     return defaultLineChartDataState;
    //   }
      
    //   export default DefaultLineChartInput;
      