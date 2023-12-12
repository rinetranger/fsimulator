import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import mixedChartData from './mixedChartData';
import { 
    SummaryLabelSelector,
    summaryDVAmtSelector,
    summaryDVVolumeSelector,
    summaryIRAmtSelector,
    summaryIRVolumeSelector,
    newvdSelector
 } from 'Data/selector';

 const useUpdateMixedChartData = (updateMixedChartData) => {
  const newLabels = useRecoilValue(SummaryLabelSelector);
  const newDVAmt = useRecoilValue(summaryDVAmtSelector);
  const newIRAmt = useRecoilValue(summaryIRAmtSelector);
  const newDVVolume = useRecoilValue(summaryDVVolumeSelector);
  const newIRVolume = useRecoilValue(summaryIRVolumeSelector);

  useEffect(() => {
    updateMixedChartData((prevState) => {
      const newMixedChartData = { ...prevState };
      newMixedChartData.DeveloppingResidenceSimulate.labels = newLabels;
      newMixedChartData.RentResidenceSimulate.labels = newLabels;

      newMixedChartData.DeveloppingResidenceSimulate.datasets[0].data = newDVAmt;
      newMixedChartData.RentResidenceSimulate.datasets[0].data = newIRAmt;
      newMixedChartData.DeveloppingResidenceSimulate.datasets[1].data = newDVVolume;
      newMixedChartData.RentResidenceSimulate.datasets[1].data = newIRVolume;

      return newMixedChartData;
    });
  }, [newLabels, newDVAmt, newIRAmt, newDVVolume, newIRVolume, updateMixedChartData]);
};

export default useUpdateMixedChartData;
