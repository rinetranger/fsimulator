import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const segmentValueState = atom({
  key: "segmentValueState",
  default: [{"fy":2022,"accntCode":"41000","accntName":"再生不動産売上","amt":27250400000,"ratio":24.8,"version":"2022.4Q ver001"},{"fy":2023,"accntCode":"41000","accntName":"再生不動産売上","amt":41368521000,"ratio":30.6,"version":"2022.4Q ver001"},{"fy":2024,"accntCode":"41000","accntName":"再生不動産売上","amt":58721800000,"ratio":37.5,"version":"2022.4Q ver001"},{"fy":2025,"accntCode":"41000","accntName":"再生不動産売上","amt":54550000000,"ratio":21.3,"version":"2022.4Q ver001"},{"fy":2026,"accntCode":"41000","accntName":"再生不動産売上","amt":57823000000,"ratio":19.0,"version":"2022.4Q ver001"},{"fy":2027,"accntCode":"41000","accntName":"再生不動産売上","amt":63278000000,"ratio":17.6,"version":"2022.4Q ver001"}],
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
      27250,
      41369,
      58722,
      54550,
      57823,
      63278,
    ];

    expect(result.current).toEqual(expectedFyArray);
  });
});
