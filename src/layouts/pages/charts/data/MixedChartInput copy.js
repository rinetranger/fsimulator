// import { useRecoilState, useRecoilCallback } from 'recoil';
// import { useEffect, useState } from 'react';
// import mixedChartData from './mixedChartData';
// import { 
//     salesLabelSelector, 
//     salesVolumeSelector,
//     salesPerSelector,  
//     opLabelSelector,
//     opVolumeSelector,
//     opPerSelector,
//     assetLabelSelector,
//     assetVolumelSelector,
//     assetPerSelector,
//     debtLabelSelector,
//     debtVolumelSelector,
//     debtPerSelector,
//     netLabelSelector,
//     netVolumelSelector,
//     netPerSelector,
//  } from 'Data/selector';


// function MixedChartInput() {
//   const [mixedChartDataState, setMixedChartDataState] = useState(mixedChartData);
//   const [salesLabel, setSalesLabel] = useRecoilState(salesLabelSelector);
//   const [salesVolume, setSalesVolume] = useRecoilState(salesVolumeSelector);
//   const [salesPer, setSalesPer] = useRecoilState(salesPerSelector);
//   const [opLabel, setOpLabel] = useRecoilState(opLabelSelector);
//   const [opVolume, setOpVolume] = useRecoilState(opVolumeSelector);
//   const [opPer, setOpPer] = useRecoilState(opPerSelector);
//   const [assetLabel, setAssetLabel] = useRecoilState(assetLabelSelector);
//   const [assetVolume, setAssetVolume] = useRecoilState(assetVolumelSelector);
//   const [assetPer, setAssetPer] = useRecoilState(assetPerSelector);
//   const [debtLabel, setDebtLabel] = useRecoilState(debtLabelSelector);
//   const [debtVolume, setDebtVolume] = useRecoilState(debtVolumelSelector);
//   const [debtPer, setDebtPer] = useRecoilState(debtPerSelector);
//   const [netLabel, setNetLabel] = useRecoilState(netLabelSelector);
//   const [netVolume, setNetVolume] = useRecoilState(netVolumelSelector);
//   const [netPer, setNetPer] = useRecoilState(netPerSelector);

//   useEffect(() => {
//     updateMixedChartData();
//   }, [salesLabel, salesVolume, salesPer]);

//   const updateMixedChartData = useRecoilCallback(({ snapshot }) => async () => {
//     const newLabels = await snapshot.getPromise(salesLabelSelector);
//     const newAmt = await snapshot.getPromise(salesVolumeSelector);
//     const newPer = await snapshot.getPromise(salesPerSelector);
//     const newopLabels = await snapshot.getPromise(opLabelSelector);
//     const newopVolume = await snapshot.getPromise(opVolumeSelector);
//     const newopPer = await snapshot.getPromise(opPerSelector);
//     const newassetLabels = await snapshot.getPromise(assetLabelSelector);
//     const newassetVolume = await snapshot.getPromise(assetVolumelSelector);
//     const newassetPer = await snapshot.getPromise(assetPerSelector);
//     const newdebtLabels = await snapshot.getPromise(debtLabelSelector);
//     const newdebtVolume = await snapshot.getPromise(debtVolumelSelector);
//     const newdebtPer = await snapshot.getPromise(debtPerSelector);
//     const newnetLabels = await snapshot.getPromise(netLabelSelector);
//     const newnetVolume = await snapshot.getPromise(netVolumelSelector);
//     const newnetPer = await snapshot.getPromise(netPerSelector);
    
//   //   setMixedChartDataState({
//   //     ...mixedChartDataState,
//   //     labels: newLabels,
//   //     datasets: [
//   //       {
//   //         ...mixedChartDataState.datasets[0],
//   //         data: newAmt,
//   //       },
//   //       {
//   //         ...mixedChartDataState.datasets[1],
//   //         data: newPer,
//   //       },
//   //     ],
//   //   });
//   // });
//   setSalesLabel(newLabels);
//   setSalesVolume(newAmt);
//   setSalesPer(newPer);
//   setOpLabel(newopLabels);
//   setOpVolume(newopVolume);
//   setOpPer(newopPer);
//   setAssetLabel(newassetLabels);
//   setAssetVolume(newassetVolume);
//   setAssetPer(newassetPer);
//   setDebtLabel(newdebtLabels);
//   setDebtVolume(newdebtVolume);
//   setDebtPer(newdebtPer);
//   setNetLabel(newnetLabels);
//   setNetVolume(newnetVolume);
//   setNetPer(newnetPer); 
//   });
//   return null; // 仮の返り値
// }

// export default MixedChartInput;
