import { renderHook } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import { useAtomValues } from '../hooks/useAtomValues';
import defaultLineChartData from '../layouts/pages/charts/data/defaultLineChartData';

test('Atom values are stored correctly', () => {
  const { result } = renderHook(() => useAtomValues(), {
    wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
  });

  // 期待されるデフォルト値
  const expectedVdata = [{}];
  const expectedNewvdataValue = [{}];
  const expectedNewVdata = [{}];
  const expectedSalesValue = [{}];
  const expectedoprofitValue = [{}];
  const expectednetValue = [{}];
  const expecteddebtValue = [{}];
  const expectedassetValue = [{}];
  const expectedsegmentValue = [{}];
  const expectedversiondata = [{}];
  const expectedscratioValue = [{}];
  const expectedCashValue = [{}];
  const expectedLtdebtValue= [{}];
  const expectedapidata = [{}];
  const expectedfixedratioValue = [{}];
  const expectedopratioValue = [{}];
  const exepectedassetRatio = [{}];
  const expecteddefaultLinea = defaultLineChartData;
  const expectedTtlassetValue = [{}];

  expect(result.current.vdata).toEqual(expectedVdata);
  expect(result.current.newvdataValue).toEqual(expectedNewvdataValue);
  expect(result.current.newVdata).toEqual(expectedNewVdata);
  expect(result.current.salesValue).toEqual(expectedSalesValue);
    expect(result.current.oprofitValue).toEqual(expectedoprofitValue);
    expect(result.current.netValue).toEqual(expectednetValue);
    expect(result.current.debtValue).toEqual(expecteddebtValue);
    expect(result.current.assetValue).toEqual(expectedassetValue);
    expect(result.current.segmentValue).toEqual(expectedsegmentValue);
    expect(result.current.versiondata).toEqual(expectedversiondata);
    expect(result.current.scratioValue).toEqual(expectedscratioValue);
    expect(result.current.CashValue).toEqual(expectedCashValue);
    expect(result.current.LtdebtValue).toEqual(expectedLtdebtValue);
    expect(result.current.apidata).toEqual(expectedapidata);
    expect(result.current.fixedratioValue).toEqual(expectedfixedratioValue);
    expect(result.current.opratioValue).toEqual(expectedopratioValue);
    expect(result.current.assetRatio).toEqual(exepectedassetRatio);
    expect(result.current.defaultLinea).toEqual(expecteddefaultLinea);
    expect(result.current.TtlassetValue).toEqual(expectedTtlassetValue);

  
});
