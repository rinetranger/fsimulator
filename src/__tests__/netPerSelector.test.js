import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const debtValueState = atom({
  key: "debtValueState",
  default: [
    {"fy":"2022","accntCode":"39998","accntName":"自己資本","amt":"92739159137","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2022","accntCode":"39998","accntName":"自己資本","amt":"92739159137","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2022","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2024","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2025","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2026","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2027","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":"-11.7","version":"2023.1Q ver001"},{"fy":"2024","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2025","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2026","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2027","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2023","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":"-11.7","version":"2023.1Q ver002"},{"fy":"2024","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2025","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2026","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2027","accntCode":"39998","accntName":"自己資本","amt":"81862073790","growthRate":".0","version":"2023.1Q ver002"}
  ],
});

const debtLabelSelector = selector({
  key: "debtValuelabels",
  get: ({ get }) => {
    const vdata = get(newvdSelector);
    const debt = get(debtValueState);

    const filteredData = debt.filter(
      (item) => String(item.version) === vdata.version
    );
    const fyArray = filteredData.map((obj) => obj.growthRate);
    return fyArray;
  },
});

describe("debtLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(debtLabelSelector), {
      wrapper: RecoilRoot,
    });

    const expectedFyArray = [
        ".0",
        ".0",
        ".0",
        ".0",
        ".0",
        ".0",
    ];

    expect(result.current).toEqual(expectedFyArray);
  });
});
