import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const debtValueState = atom({
  key: "debtValueState",
  default: [
    {"fy":"2022","accntCode":"29999","accntName":"負債合計","amt":"253506377591","growthRate":".0","version":"2023.1Q ver001"},{"fy":"2022","accntCode":"29999","accntName":"負債合計","amt":"253506377591","growthRate":".0","version":"2023.1Q ver002"},{"fy":"2022","accntCode":"29999","accntName":"負債合計","amt":"239306057240","growthRate":".0","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"29999","accntName":"負債合計","amt":"331797139576","growthRate":"38.6","version":"2022.4Q ver001"},{"fy":"2024","accntCode":"29999","accntName":"負債合計","amt":"459810109632","growthRate":"38.6","version":"2022.4Q ver001"},{"fy":"2025","accntCode":"29999","accntName":"負債合計","amt":"600659905879","growthRate":"30.6","version":"2022.4Q ver001"},{"fy":"2026","accntCode":"29999","accntName":"負債合計","amt":"763409905867","growthRate":"27.1","version":"2022.4Q ver001"},{"fy":"2027","accntCode":"29999","accntName":"負債合計","amt":"938009905843","growthRate":"22.9","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"29999","accntName":"負債合計","amt":"331797139576","growthRate":"30.9","version":"2023.1Q ver001"},{"fy":"2024","accntCode":"29999","accntName":"負債合計","amt":"459810109632","growthRate":"38.6","version":"2023.1Q ver001"},{"fy":"2025","accntCode":"29999","accntName":"負債合計","amt":"600659905879","growthRate":"30.6","version":"2023.1Q ver001"},{"fy":"2026","accntCode":"29999","accntName":"負債合計","amt":"763409905867","growthRate":"27.1","version":"2023.1Q ver001"},{"fy":"2027","accntCode":"29999","accntName":"負債合計","amt":"938009905843","growthRate":"22.9","version":"2023.1Q ver001"},{"fy":"2023","accntCode":"29999","accntName":"負債合計","amt":"331797139576","growthRate":"30.9","version":"2023.1Q ver002"},{"fy":"2024","accntCode":"29999","accntName":"負債合計","amt":"459810109632","growthRate":"38.6","version":"2023.1Q ver002"},{"fy":"2025","accntCode":"29999","accntName":"負債合計","amt":"600659905879","growthRate":"30.6","version":"2023.1Q ver002"},{"fy":"2026","accntCode":"29999","accntName":"負債合計","amt":"763409905867","growthRate":"27.1","version":"2023.1Q ver002"},{"fy":"2027","accntCode":"29999","accntName":"負債合計","amt":"938009905843","growthRate":"22.9","version":"2023.1Q ver002"}
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
        "38.6",
        "38.6",
        "30.6",
        "27.1",
        "22.9",
    ];

    expect(result.current).toEqual(expectedFyArray);
  });
});
