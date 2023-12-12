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

const debtratioLabelSelector = selector({
  key: "debtratioLabels",
  get: ({ get }) => {
    const debtratioLabels = get(fixedRatioState);
    const vdata = get(newvdSelector);
    const debtratioLabel = debtratioLabels.filter((item) => String(item.version) === vdata.version);
    
    const debtratioLabelSet = new Set(debtratioLabel.map(obj => obj.FY));
    const debtratioLabelArray = [...debtratioLabelSet];
    return debtratioLabelArray;
  }
});
describe("debtratioLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(debtratioLabelSelector), {
      wrapper: RecoilRoot,
    });

    const expectedFyArray = [
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
    ];

    expect(result.current).toEqual(expectedFyArray);
  });
});
