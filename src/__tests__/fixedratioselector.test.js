import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";
// import { currentfixedtratioSelector } from "./path/to/your/currentfixedtratioSelector/file";


const newvdSelector = atom({
    key: "newvdSelector",
    default: { version: "2022.4Q ver001" },
});
  
const fixedRatioState = atom({
  key: 'fixedRatioState',
  default: [{"FY":"2022","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2022","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"190894431888","version":"2022.4Q ver001"},{"FY":"2023","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2023","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"283385514224","version":"2022.4Q ver001"},{"FY":"2024","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2024","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"411398484280","version":"2022.4Q ver001"},{"FY":"2025","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2025","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"552248280527","version":"2022.4Q ver001"},{"FY":"2026","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2026","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"714998280515","version":"2022.4Q ver001"},{"FY":"2027","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2027","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"889598280491","version":"2022.4Q ver001"}]


});


const fixedDebtRatioSelector = selector({
  key: "fixedDebtRatios",
  get: ({ get }) => {
    const debtRatioV = get(fixedRatioState);
    const vdata = get(newvdSelector);
    const debtRatio = debtRatioV.filter((item) => String(item.version) === vdata.version);

    const groupByFYQrs = (array) => {
      const result = {};
      array.forEach((item) => {
        const fy = item.FY;
        const qrs = item.Qrs;
        if (!result[fy]) {
          result[fy] = {};
        }
        if (!result[fy][qrs]) {
          result[fy][qrs] = [];
        }
        result[fy][qrs].push(item);
      });
      return result;
    };
    const groupedDebtRatio = groupByFYQrs(debtRatio);
    const ratios = [];

    for (const fy in groupedDebtRatio) {
      for (const qrs in groupedDebtRatio[fy]) {
        const currentData =
          groupedDebtRatio[fy][qrs].find((item) => item.accntCode === "24999") ||
          null;
        const fixedData =
          groupedDebtRatio[fy][qrs].find((item) => item.accntCode === "29998") ||
          null;

        if (currentData && fixedData) {
          const currentAmt = parseInt(currentData.amt);
          const fixedAmt = parseInt(fixedData.amt);

          const ratio = ((fixedAmt / (currentAmt + fixedAmt)) * 100).toFixed(2);
          ratios.push(ratio);
        } else {
          ratios.push(null);
        }
      }
    }

    return ratios;
  },
});
  
  


  

describe("fixedDebtRatioSelector", () => {
  it("should return the correct fixed ratios based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(fixedDebtRatioSelector), {
      wrapper: RecoilRoot,
    });

    const expectedRatios = [
      "79.77",
      "85.41",
      "89.47",
      "91.94",
      "93.66",
      "94.84",
    ];

    expect(result.current).toEqual(expectedRatios);
  });
});