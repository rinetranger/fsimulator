import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
    key: "newvdSelector",
    default: { version: "2022.4Q ver001" },
  });
  
  const LtdebtValueState = atom({
    key: "debtValueState",
    default: [{"FY":"2022","Qrs":"4","accntCode":"25200","accntName":"長期借入金","amt":"163336646523","version":"2022.4Q ver001"},{"FY":"2023","Qrs":"1","accntCode":"25200","accntName":"長期借入金","amt":"222607304976","version":"2023.1Q ver001"},{"FY":"2023","Qrs":"1","accntCode":"25200","accntName":"長期借入金","amt":"222607304976","version":"2023.1Q ver002"}]
  });
  
  const LtdebtValueSelector = selector({
    key: 'ltdebtvalues',
    get: ({ get }) => {
      const ltdebtValueData = get(LtdebtValueState);
      const vdata = get(newvdSelector);
      const filterData =ltdebtValueData.filter((item) => String(item.version) === vdata.version);
      const ltdebtAmount = Math.round(parseInt(filterData[0].amt) / 1000000);
      return ltdebtAmount;
    },
  });

  describe("ltdebtValueSelector", () => {
    it("should return the correct fyArray based on the version", () => {
      const { result } = renderHook(() => useRecoilValue(LtdebtValueSelector), {
        wrapper: RecoilRoot,
      });
  
      const expectedFyArray = 163337;
  
      expect(result.current).toEqual(expectedFyArray);
    });
  });
  