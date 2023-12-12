import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";

const newvdSelector = atom({
    key: "newvdSelector",
    default: { version: "2022.4Q ver001" },
  });
  
  const TtlassetValueState = atom({
    key: "debtValueState",
    default: [{"FY":"2022","Qrs":"4","accntCode":"19999","accntName":"資産合計","amt":"329987521313","version":"2022.4Q ver001"},{"FY":"2023","Qrs":"1","accntCode":"19999","accntName":"資産合計","amt":"377007577411","version":"2023.1Q ver001"},{"FY":"2023","Qrs":"1","accntCode":"19999","accntName":"資産合計","amt":"377007577411","version":"2023.1Q ver002"}]
  });
  
  const TtlassetValueSelector = selector({
    key: 'ttlassetvalues',
    get: ({ get }) => {
      const ttlassetValueData = get(TtlassetValueState);
      const vdata = get(newvdSelector);
      const filterData =ttlassetValueData.filter((item) => String(item.version) === vdata.version);
      const ttlassetAmount = Math.round(parseInt(filterData[0].amt) / 1000000);
      return ttlassetAmount;
    },
  });

  describe("ttlassetValueSelector", () => {
    it("should return the correct fyArray based on the version", () => {
      const { result } = renderHook(() => useRecoilValue(TtlassetValueSelector), {
        wrapper: RecoilRoot,
      });
  
      const expectedFyArray = 329988;
  
      expect(result.current).toEqual(expectedFyArray);
    });
  });
  