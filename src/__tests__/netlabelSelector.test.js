import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const netValueState = atom({
  key: "netValueState",
  default: [
    {"fy":"2022","accntCode":"39998","accntName":"自己資本","amt":"92739159137","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2022","accntCode":"39998","accntName":"自己資本","amt":"92739159137","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2022","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2024","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2025","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2026","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2027","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":"-11.7","version":"2023.1Q ver001"},{"fy":"2024","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2025","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2026","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2027","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2023","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":"-11.7","version":"2023.1Q ver002"},{"fy":"2024","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2025","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2026","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2027","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver002"}
  ],
});

const netLabelSelector = selector({
  key: "netValuelabels",
  get: ({ get }) => {
    const vdata = get(newvdSelector);
    const net = get(netValueState);

    const filteredData = net.filter(
      (item) => String(item.version) === vdata.version
    );
    const fyArray = filteredData.map((obj) => obj.fy);
    return fyArray;
  },
});

describe("netLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(netLabelSelector), {
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
