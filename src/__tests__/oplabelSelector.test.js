import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const opValueState = atom({
  key: "opValueState",
  default: [
    {"fy":"2022","accntCode":"69999","accntName":"営業利益","amt":"13946115474","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2022","accntCode":"69999","accntName":"営業利益","amt":"13946115474","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2022","accntCode":"69999","accntName":"営業利益","amt":"10635847835","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"69999","accntName":"営業利益","amt":"14387626631","growthRate":"35.3","version":"2022.4Q ver001"},{"fy":"2024","accntCode":"69999","accntName":"営業利益","amt":"12363992510","growthRate":"-14.1","version":"2022.4Q ver001"},{"fy":"2025","accntCode":"69999","accntName":"営業利益","amt":"19624090000","growthRate":"58.7","version":"2022.4Q ver001"},{"fy":"2026","accntCode":"69999","accntName":"営業利益","amt":"26375216000","growthRate":"34.4","version":"2022.4Q ver001"},{"fy":"2027","accntCode":"69999","accntName":"営業利益","amt":"34536260000","growthRate":"30.9","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"69999","accntName":"営業利益","amt":"14387626631","growthRate":"3.2","version":"2023.1Q ver001"},{"fy":"2024","accntCode":"69999","accntName":"営業利益","amt":"12363992510","growthRate":"-14.1","version":"2023.1Q ver001"},{"fy":"2025","accntCode":"69999","accntName":"営業利益","amt":"19624090000","growthRate":"58.7","version":"2023.1Q ver001"},{"fy":"2026","accntCode":"69999","accntName":"営業利益","amt":"26375216000","growthRate":"34.4","version":"2023.1Q ver001"},{"fy":"2027","accntCode":"69999","accntName":"営業利益","amt":"34536260000","growthRate":"30.9","version":"2023.1Q ver001"},{"fy":"2023","accntCode":"69999","accntName":"営業利益","amt":"14387626631","growthRate":"3.2","version":"2023.1Q ver002"},{"fy":"2024","accntCode":"69999","accntName":"営業利益","amt":"12363992510","growthRate":"-14.1","version":"2023.1Q ver002"},{"fy":"2025","accntCode":"69999","accntName":"営業利益","amt":"19624090000","growthRate":"58.7","version":"2023.1Q ver002"},{"fy":"2026","accntCode":"69999","accntName":"営業利益","amt":"26375216000","growthRate":"34.4","version":"2023.1Q ver002"},{"fy":"2027","accntCode":"69999","accntName":"営業利益","amt":"34536260000","growthRate":"30.9","version":"2023.1Q ver002"}
  ],
});

const opLabelSelector = selector({
  key: "opValuelabels",
  get: ({ get }) => {
    const vdata = get(newvdSelector);
    const oprfit = get(opValueState);

    const filteredData = oprfit.filter(
      (item) => String(item.version) === vdata.version
    );
    const fyArray = filteredData.map((obj) => obj.fy);
    return fyArray;
  },
});

describe("opLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(opLabelSelector), {
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
