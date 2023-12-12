import { renderHook } from '@testing-library/react-hooks';
import { useRecoilValue } from 'recoil';
import { RecoilRoot, atom, selector } from 'recoil';
// import { ScratioSetSelector } from 'Data/selector.js'; 
import dataTableData from 'layouts/applications/data-tables/data/dataTableData';

const apidataState = atom({
  key: 'apidataState',
  default: [{"FY":2022,"Qrs":4,"accntCode":"14999","accntName":"流動資産合計","amt":193224672762,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"19999","accntName":"資産合計","amt":329987521313,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"24999","accntName":"流動負債合計","amt":48411625352,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"39998","accntName":"純資産合計","amt":81862073790,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"49999","accntName":"売上高合計","amt":110084498619,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"59998","accntName":"売上原価合計","amt":90552823441,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"69999","accntName":"営業利益","amt":10635847835,"version":"2022.4Q ver001"},{"FY":2022,"Qrs":4,"accntCode":"95000","accntName":"当期純利益","amt":5689332565,"version":"2022.4Q ver001"}]
});

const newvdSelector = atom({
  key: 'newvdSelector',
  default: { version: '2022.4Q ver001' },
});

const ScratioSetSelector = selector({
    key: 'scratioSet',
    get: ({ get }) => {
      const apiDatas = get(apidataState);
      const vdata = get(newvdSelector);
        const apiData = apiDatas.filter((item) => String(item.version) === vdata.version);
  
      // FYごとにグループ化する
      const groupedData = {};
      apiData.forEach(row => {
        const fy = row.FY;
        const accntCode = row.accntCode;
        if (!groupedData[fy]) {
          groupedData[fy] = {};
        }
        if (accntCode === "49999") {
          groupedData[fy]["sales"] = parseFloat(row.amt);
        } else if (accntCode === "59998") {
          groupedData[fy]["cost"] = parseFloat(row.amt);
        } else if (accntCode === "69999") {
          groupedData[fy]["profit"] = parseFloat(row.amt);
        } else if (accntCode === "95000") {
          groupedData[fy]["netIncome"] = parseFloat(row.amt);
        } else if (accntCode === "19999") {
          groupedData[fy]["totalasset"] = parseFloat(row.amt);
        } else if (accntCode === "39998") {
          groupedData[fy]["totalEquity"] = parseFloat(row.amt);
        } else if (accntCode === "14999") {
          groupedData[fy]["currentAssets"] = parseFloat(row.amt);
        } else if (accntCode === "24999") {
          groupedData[fy]["currentLiabilities"] = parseFloat(row.amt);
        }
      });
  
      // FYデータを小さい順にソートする
      const fyList = Object.keys(groupedData).sort((a, b) => parseInt(a) - parseInt(b));
      
      const rows = [
        { index: "売上高原価率", fy01: "", fy02: "", fy03: "", fy04: "", fy05: "", fy06: "" },
        { index: "営業利益率", fy01: "", fy02: "", fy03: "", fy04: "", fy05: "", fy06: "" },
        { index: "ROA", fy01: "", fy02: "", fy03: "", fy04: "", fy05: "", fy06: "" },
        { index: "ROE", fy01: "", fy02: "", fy03: "", fy04: "", fy05: "", fy06: "" },
        { index: "流動比率", fy01: "", fy02: "", fy03: "", fy04: "", fy05: "", fy06: "" }
      ];
  
      fyList.forEach((fy, index) => {
        const data = groupedData[fy];
        const sales = data.sales || 0;
        const cost = data.cost || 0;
        const profit = data.profit || 0;
        const totalasset=data.totalasset||0;
        const currentAssets = data.currentAssets || 0;
        const currentLiabilities = data.currentLiabilities || 0;
        const totalEquity = data.totalEquity || 0;
  
        // 売上高原価率計算
        const srratio = Math.round(((cost / sales) * 100).toFixed(2)) + "%";
        rows[0]["fy" + (index + 1).toString().padStart(2, "0")] = srratio;
        //営業利益率計算
        const soratio = Math.round((( profit / sales) * 100).toFixed(2)) + "%";
        rows[1]["fy" + (index + 1).toString().padStart(2, "0")] = soratio;
        
        const netIncome = data.netIncome || 0;
        //ROA計算
        const roa =((netIncome /totalasset) * 100).toFixed(2) + "%";
        rows[2]["fy" + (index + 1).toString().padStart(2, "0")] = roa;
        //ROE計算
        const roe = ((netIncome / totalEquity) * 100).toFixed(2) + "%";
        rows[3]["fy" + (index + 1).toString().padStart(2, "0")] = roe;
        //流動比率計算
        const currentRatio =  Math.round(((currentAssets / currentLiabilities) * 100).toFixed(2) )+ "%";
        rows[4]["fy" + (index + 1).toString().padStart(2, "0")] = currentRatio;
      });
  
  
  
      const columns = dataTableData.columns.map((column, index) => {
        if (column.index) {
          return { ...column };
        }
        const fy = fyList[index - 1];
        if (fy) {
          return { Header: fy, accessor: `fy${(index).toString().padStart(2, "0")}`, width: `${(100 / (fyList.length + 1)).toFixed(2)}%` };
        }
        return column;
      });
      return { columns, rows };
    }
  });

describe('ScratioSetSelector', () => {
  it('should calculate ratios correctly for each FY', () => {
    const { result } = renderHook(() => useRecoilValue(ScratioSetSelector), {
      wrapper: RecoilRoot,
    });

    const expectedRatios = [
        { index: "売上高原価率", fy01: "82%" },
        { index: "営業利益率", fy01: "10%"},
        { index: "ROA", fy01: "1.72%"},
        { index: "ROE", fy01: "6.95%"},
        { index: "流動比率", fy01: "399%"}
      ];

      const calculatedRatios = result.current.rows.map(row => {
        // FYデータを抽出し、期待されるデータ形式に変換
        const rowData = {
          index: row.index,
          fy01: row.fy01
        };
        return rowData;
      });
      
    expect(calculatedRatios).toEqual(expectedRatios);
  });
});
