import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, atom, selector, useRecoilValue } from "recoil";
// import { currentassetratioSelector } from "./path/to/your/currentassetratioSelector/file";


const newvdSelector = atom({
    key: "newvdSelector",
    default: { version: "2022.4Q ver001" },
});
  
const assetRatioState = atom({
  key: 'assetRatioState',
  default:  [{"FY":2022,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":193224672762,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2023,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":296772558521,"version":"2022.4Q ver001"},{"FY":2023,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2023,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2024,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":433122431646,"version":"2022.4Q ver001"},{"FY":2024,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2024,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2025,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":556354638039,"version":"2022.4Q ver001"},{"FY":2025,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2025,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2026,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":702516854027,"version":"2022.4Q ver001"},{"FY":2026,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2026,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"},{"FY":2027,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":861967114003,"version":"2022.4Q ver001"},{"FY":2027,"Qrs":4,"accntCode":"18999","accntName":"固定資産合計","amt":136845680810,"version":"2022.4Q ver001"},{"FY":2027,"Qrs":4,"accntCode":"19899","accntName":"繰延資産合計","amt":117167741,"version":"2022.4Q ver001"}],
});

  


 const currentAssetRatioSelector = selector({
    key: "currentAssetRatios",
    get: ({ get }) => {
      const assetRatioV = get(assetRatioState);
      const vdata = get(newvdSelector);
      const assetRatio = assetRatioV.filter((item) => String(item.version) === vdata.version);
  
      const sortedAssetRatio = assetRatio.sort((a, b) => {
        if (a.FY !== b.FY) {
          return a.FY - b.FY;
        } else {
          return a.accntCode.localeCompare(b.accntCode);
        }
      });
  
      const ratios = [];
      for (let i = 0; i < sortedAssetRatio.length; i += 3) {
        const currentData = sortedAssetRatio[i];
        const fixedData = sortedAssetRatio[i + 1];
        const deferredData = sortedAssetRatio[i + 2];
        
  
        if (currentData && fixedData && deferredData) {
          const currentAmt = parseInt(currentData.amt);
          const fixedAmt = parseInt(fixedData.amt);
          const deferredAmt = parseInt(deferredData.amt);
            
          
          const ratio = ((currentAmt / (currentAmt + fixedAmt + deferredAmt)) * 100).toFixed(2);
          ratios.push(parseFloat(ratio));
        } else {
          ratios.push(null);
        }
      }
  
      return ratios;
    },
  });
  
  


  

  describe("currentaAsetRatioSelector", () => {
    it("should return the correct asset ratios based on the version", () => {
      const { result } = renderHook(() => useRecoilValue(currentAssetRatioSelector), {
        wrapper: RecoilRoot,
      });
  
      const expectedRatios = [
        58.52,
        68.42,
        75.98,
        80.25,
        83.68,
        86.29,
      ];
  
      expect(result.current).toEqual(expectedRatios.map((ratio) => parseFloat(ratio.toFixed(2))));
    });
  });