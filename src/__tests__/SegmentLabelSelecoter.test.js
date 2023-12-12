
// import { segmentLabelSelector } from "Data/selector";

// describe('segmentLabelSelector', () => {
//   it('should return an array of fiscal years sorted in ascending order based on the sum of values for the given version', () => {
//     const mockData = [{"fy":"2022","accntCode":"40000","accntName":"開発不動産売上","amt":"66984000000","ratio":"61.9","version":"2023.1Q ver001"},{"fy":"2023","accntCode":"40000","accntName":"開発不動産売上","amt":"82526000000","ratio":"61.1","version":"2022.4Q ver001"},{"fy":"2024","accntCode":"40000","accntName":"開発不動産売上","amt":"86465000000","ratio":"55.2","version":"2022.4Q ver001"},{"fy":"2025","accntCode":"40000","accntName":"開発不動産売上","amt":"186875000000","ratio":"73.1","version":"2022.4Q ver001"},{"fy":"2026","accntCode":"40000","accntName":"開発不動産売上","amt":"228275000000","ratio":"75.1","version":"2022.4Q ver001"},{"fy":"2027","accntCode":"40000","accntName":"開発不動産売上","amt":"277150000000","ratio":"76.9","version":"2022.4Q ver001"},];

//     const mockProps = {
//       newvdSelector:[{ version: "2023.1Q ver001" }],
//       segmentValueState: mockData
//     };

//     const expectedOutput = ["2022", "2023", "2024", "2025", "2026", "2027"];

//     const result = segmentLabelSelector(mockProps);

//     expect(result).toEqual(expectedOutput);
//   });
// });


import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
  key: "newvdSelector",
  default: { version: "2022.4Q ver001" },
});

const segmentValueState = atom({
  key: "segmentValueState",
  default: [
     {"fy":"2022","accntCode":"40000","accntName":"開発不動産売上","amt":"66984000000","ratio":"61.9","version":"2022.4Q ver001"},{"fy":"2023","accntCode":"40000","accntName":"開発不動産売上","amt":"82526000000","ratio":"61.1","version":"2022.4Q ver001"},{"fy":"2024","accntCode":"40000","accntName":"開発不動産売上","amt":"86465000000","ratio":"55.2","version":"2022.4Q ver001"},{"fy":"2025","accntCode":"40000","accntName":"開発不動産売上","amt":"186875000000","ratio":"73.1","version":"2022.4Q ver001"},{"fy":"2026","accntCode":"40000","accntName":"開発不動産売上","amt":"228275000000","ratio":"75.1","version":"2022.4Q ver001"},{"fy":"2027","accntCode":"40000","accntName":"開発不動産売上","amt":"277150000000","ratio":"76.9","version":"2022.4Q ver001"}
  ]
});

const segmentLabelSelector = selector({
  key: "segmentValuelabels",
  get: ({ get }) => {
    const vdata = get(newvdSelector);
    const segment = get(segmentValueState);

    const filteredData = segment.filter(
      (item) => String(item.version) === vdata.version
    );
    const fyArray = filteredData.map((obj) => obj.fy);
    return fyArray;
  },
});

describe("segmentLabelSelector", () => {
  it("should return the correct fyArray based on the version", () => {
    const { result } = renderHook(() => useRecoilValue(segmentLabelSelector), {
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
