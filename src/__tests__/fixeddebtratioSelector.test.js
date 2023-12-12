import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const fixedRatioState = atom({
  key: 'fixedratio',
  default: [{"FY":"2022","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2022","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"190894431888","version":"2022.4Q ver001"},{"FY":"2023","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2023","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"283385514224","version":"2022.4Q ver001"},{"FY":"2024","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2024","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"411398484280","version":"2022.4Q ver001"},{"FY":"2025","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2025","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"552248280527","version":"2022.4Q ver001"},{"FY":"2026","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2026","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"714998280515","version":"2022.4Q ver001"},{"FY":"2027","Qrs":"4","accntCode":"24999","accntName":"流動負債合計","amt":"48411625352","version":"2022.4Q ver001"},{"FY":"2027","Qrs":"4","accntCode":"29998","accntName":"固定負債合計","amt":"889598280491","version":"2022.4Q ver001"}],
});

 const fixeddebtratioSelector = selector({
  key: "fixeddebtratios",
  get: ({ get }) => {
    const debtratios = get(fixedRatioState);
    const vdata = get(newvdSelector);
    const debtratio = debtratios.filter((item) => String(item.version) === vdata.version);
    // FY と Qrs 毎にグループ化する関数
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
    // グループ化したオブジェクトを取得
    const groupedDebtratio = groupByFYQrs(debtratio);
    // 結果を格納する配列
    const ratios = [];
    // FY と Qrs 毎に計算するループ
    for (const fy in groupedDebtratio) {
      for (const qrs in groupedDebtratio[fy]) {
        // 各資産のデータを取得
        const currentData =
        groupedDebtratio[fy][qrs].find((item) => item.accntCode === "24999") ||
          null;
        const fixedData =
        groupedDebtratio[fy][qrs].find((item) => item.accntCode === "29998") ||
          null;
        
        if (currentData && fixedData ) {
          // 各資産の金額を数値に変換
          const currentAmt = parseInt(currentData.amt);
          const fixedAmt = parseInt(fixedData.amt);
          
          // 資産比率を計算して配列に追加
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



describe(" fixeddebtratioSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue( fixeddebtratioSelector), {
      wrapper: RecoilRoot,
    });

    const expectedFyArray = [
      "79.77",
      "85.41",
      "89.47",
      "91.94",
      "93.66",
      "94.84",
    ];

    expect(result.current).toEqual(expectedFyArray);
  });
});
