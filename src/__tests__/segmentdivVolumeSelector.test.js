import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const segmentValueState = atom({
  key: "segmentValueState",
  default: [{"fy":2022,"accntCode":"42200","accntName":"受取配当金.売上高","amt":531481193,"ratio":0.5,"version":"2022.4Q ver001"},{"fy":2023,"accntCode":"42200","accntName":"受取配当金.売上高","amt":651000000,"ratio":0.5,"version":"2022.4Q ver001"},{"fy":2024,"accntCode":"42200","accntName":"受取配当金.売上高","amt":1571000000,"ratio":1.0,"version":"2022.4Q ver001"},{"fy":2025,"accntCode":"42200","accntName":"受取配当金.売上高","amt":2288000000,"ratio":0.9,"version":"2022.4Q ver001"},{"fy":2026,"accntCode":"42200","accntName":"受取配当金.売上高","amt":3390000000,"ratio":1.1,"version":"2022.4Q ver001"},{"fy":2027,"accntCode":"42200","accntName":"受取配当金.売上高","amt":4588000000,"ratio":1.3,"version":"2022.4Q ver001"}],
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
      531,
      651,
      1571,
      2288,
      3390,
      4588,
    ];

    expect(result.current).toEqual(expectedFyArray);
  });
});
