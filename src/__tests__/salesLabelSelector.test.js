import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const salesValueState = atom({
  key: "salesValueState",
  default: [
    {"fy":"2022","accntCode":"49999","accntName":"売上高合計","amt":"108264385451","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2022","accntCode":"49999","accntName":"売上高合計","amt":"110084498619","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"49999","accntName":"売上高合計","amt":"134979521000","growthRate":"22.6","version":"2022.4Q ver001"},{"fy":"2024","accntCode":"49999","accntName":"売上高合計","amt":"156732800000","growthRate":"16.1","version":"2022.4Q ver001"},{"fy":"2025","accntCode":"49999","accntName":"売上高合計","amt":"255791000000","growthRate":"63.2","version":"2022.4Q ver001"},{"fy":"2026","accntCode":"49999","accntName":"売上高合計","amt":"303776000000","growthRate":"18.8","version":"2022.4Q ver001"},{"fy":"2027","accntCode":"49999","accntName":"売上高合計","amt":"360460000000","growthRate":"18.7","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"49999","accntName":"売上高合計","amt":"134979521000","growthRate":"24.7","version":"2023.1Q ver001"},{"fy":"2024","accntCode":"49999","accntName":"売上高合計","amt":"156732800000","growthRate":"16.1","version":"2023.1Q ver001"},{"fy":"2025","accntCode":"49999","accntName":"売上高合計","amt":"255791000000","growthRate":"63.2","version":"2023.1Q ver001"},{"fy":"2026","accntCode":"49999","accntName":"売上高合計","amt":"303776000000","growthRate":"18.8","version":"2023.1Q ver001"},{"fy":"2027","accntCode":"49999","accntName":"売上高合計","amt":"360460000000","growthRate":"18.7","version":"2023.1Q ver001"}
  ],
});

const salesLabelSelector = selector({
  key: "salesValuelabels",
  get: ({ get }) => {
    const vdata = get(newvdSelector);
    const sales = get(salesValueState);

    const filteredData = sales.filter(
      (item) => String(item.version) === vdata.version
    );
    const fyArray = filteredData.map((obj) => obj.fy);
    return fyArray;
  },
});

describe("salesLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(salesLabelSelector), {
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
