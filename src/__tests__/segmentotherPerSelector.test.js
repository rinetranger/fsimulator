import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const segmentValueState = atom({
  key: "segmentValueState",
  default:[{"fy":2022,"accntCode":"99999","accntName":"その他","amt":1870551977,"ratio":1.7,"version":"2022.4Q ver001"},{"fy":2023,"accntCode":"99999","accntName":"その他","amt":0,"ratio":0.0,"version":"2022.4Q ver001"},{"fy":2024,"accntCode":"99999","accntName":"その他","amt":0,"ratio":0.0,"version":"2022.4Q ver001"},{"fy":2025,"accntCode":"99999","accntName":"その他","amt":0,"ratio":0.0,"version":"2022.4Q ver001"},{"fy":2026,"accntCode":"99999","accntName":"その他","amt":0,"ratio":0.0,"version":"2022.4Q ver001"},{"fy":2027,"accntCode":"99999","accntName":"その他","amt":0,"ratio":0.0,"version":"2022.4Q ver001"}]
});

const segmentLabelSelector = selector({
  key: "segmentValuelabels",
  get: ({ get }) => {
    const vdata = get(newvdSelector);
    const segment = get(segmentValueState);

    const filteredData = segment.filter(
      (item) => String(item.version) === vdata.version
    );
    const fyArray = filteredData.map((obj) => obj.ratio);
    return fyArray;
  },
});

describe("segmentLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(segmentLabelSelector), {
      wrapper: RecoilRoot,
    });

    const expectedFyArray = [
      1.7,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
    ];

    expect(result.current).toEqual(expectedFyArray);
  });
});
