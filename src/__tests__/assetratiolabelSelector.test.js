import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const assetRatioState = atom({
  key: 'assetratio',
  default:  [{"FY":2022,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":193224672762,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2023,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":296772558521,"version":"2022.4Q ver001"},{"FY":2023,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2023,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2024,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":433122431646,"version":"2022.4Q ver001"},{"FY":2024,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2024,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2025,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":556354638039,"version":"2022.4Q ver001"},{"FY":2025,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2025,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2026,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":702516854027,"version":"2022.4Q ver001"},{"FY":2026,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2026,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2027,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":861967114003,"version":"2022.4Q ver001"},{"FY":2027,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2027,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"}],
});

const assetratioLabelSelector = selector({
  key: "assetratioValuelabels",
  get: ({ get }) => {
    const vdata = get(newvdSelector);
    const assetratio = get(assetRatioState);

    const filteredData = assetratio.filter(
      (item) => String(item.version) === vdata.version
    );
    const fyArray = filteredData.map((obj) => String(obj.FY));
    const uniqueFyArray = Array.from(new Set(fyArray)); // 重複を削除する
    return uniqueFyArray;
  },
});
describe("assetratioLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(assetratioLabelSelector), {
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
