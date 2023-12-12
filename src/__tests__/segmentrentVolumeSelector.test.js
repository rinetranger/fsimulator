import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const segmentValueState = atom({
  key: "segmentValueState",
  default:[{"fy":2022,"accntCode":"47999","accntName":"賃貸事業収益合計","amt":8110065449,"ratio":7.4,"version":"2022.4Q ver001"},{"fy":2023,"accntCode":"47999","accntName":"賃貸事業収益合計","amt":10434000000,"ratio":7.7,"version":"2022.4Q ver001"},{"fy":2024,"accntCode":"47999","accntName":"賃貸事業収益合計","amt":9975000000,"ratio":6.4,"version":"2022.4Q ver001"},{"fy":2025,"accntCode":"47999","accntName":"賃貸事業収益合計","amt":12078000000,"ratio":4.7,"version":"2022.4Q ver001"},{"fy":2026,"accntCode":"47999","accntName":"賃貸事業収益合計","amt":14288000000,"ratio":4.7,"version":"2022.4Q ver001"},{"fy":2027,"accntCode":"47999","accntName":"賃貸事業収益合計","amt":15444000000,"ratio":4.3,"version":"2022.4Q ver001"}]
});

const segmentLabelSelector = selector({
  key: "segmentValuelabels",
  get: ({ get }) => {
    const vdata = get(newvdSelector);
    const segment = get(segmentValueState);

    const filteredData = segment.filter(
      (item) => String(item.version) === vdata.version
    );
    const fyArray = filteredData.map((obj) => Math.round(Number(obj.amt)/1000000));
    return fyArray;
  },
});

describe("segmentLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(segmentLabelSelector), {
      wrapper: RecoilRoot,
    });

    const expectedFyArray = [
      8110,
      10434,
      9975,
      12078,
      14288,
      15444,
    ];
    expect(result.current).toEqual(expectedFyArray);
  });
});
