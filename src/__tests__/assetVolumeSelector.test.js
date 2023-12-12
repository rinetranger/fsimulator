import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const assetValueState = atom({
  key: "assetValueState",
  default: [
    {"fy":"2022","accntCode":"19999","accntName":"資産合計","amt":"346245536728","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2022","accntCode":"19999","accntName":"資産合計","amt":"346245536728","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2022","accntCode":"19999","accntName":"資産合計","amt":"329987521313","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"19999","accntName":"資産合計","amt":"416755407072","growthRate":"26.3","version":"2022.4Q ver001"},{"fy":"2024","accntCode":"19999","accntName":"資産合計","amt":"528233280197","growthRate":"26.7","version":"2022.4Q ver001"},{"fy":"2025","accntCode":"19999","accntName":"資産合計","amt":"651465486590","growthRate":"23.3","version":"2022.4Q ver001"},{"fy":"2026","accntCode":"19999","accntName":"資産合計","amt":"797627702578","growthRate":"22.4","version":"2022.4Q ver001"},{"fy":"2027","accntCode":"19999","accntName":"資産合計","amt":"957077962554","growthRate":"20.0","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"19999","accntName":"資産合計","amt":"416755407072","growthRate":"20.4","version":"2023.1Q ver001"},{"fy":"2024","accntCode":"19999","accntName":"資産合計","amt":"528233280197","growthRate":"26.7","version":"2023.1Q ver001"},{"fy":"2025","accntCode":"19999","accntName":"資産合計","amt":"651465486590","growthRate":"23.3","version":"2023.1Q ver001"},{"fy":"2026","accntCode":"19999","accntName":"資産合計","amt":"797627702578","growthRate":"22.4","version":"2023.1Q ver001"},{"fy":"2027","accntCode":"19999","accntName":"資産合計","amt":"957077962554","growthRate":"20.0","version":"2023.1Q ver001"},{"fy":"2023","accntCode":"19999","accntName":"資産合計","amt":"416755407072","growthRate":"20.4","version":"2023.1Q ver002"},{"fy":"2024","accntCode":"19999","accntName":"資産合計","amt":"528233280197","growthRate":"26.7","version":"2023.1Q ver002"},{"fy":"2025","accntCode":"19999","accntName":"資産合計","amt":"651465486590","growthRate":"23.3","version":"2023.1Q ver002"},{"fy":"2026","accntCode":"19999","accntName":"資産合計","amt":"797627702578","growthRate":"22.4","version":"2023.1Q ver002"},{"fy":"2027","accntCode":"19999","accntName":"資産合計","amt":"957077962554","growthRate":"20.0","version":"2023.1Q ver002"}
  ],
});

const assetLabelSelector = selector({
  key: "assetValuelabels",
  get: ({ get }) => {
    const vdata = get(newvdSelector);
    const asset = get(assetValueState);

    const filteredData = asset.filter(
      (item) => String(item.version) === vdata.version
    );
    const fyArray = filteredData.map((obj) => Math.round(Number(obj.amt)/1000000));
    return fyArray;
  },
});

describe("assetLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(assetLabelSelector), {
      wrapper: RecoilRoot,
    });

    const expectedFyArray = [
        329988,
        416755,
        528233,
        651465,
        797628,
        957078,
    ];

    expect(result.current).toEqual(expectedFyArray);
  });
});
