
import { selector } from "recoil";
import { salesValueState} from "./atom";
import { oprofitValueState } from "./atom";
import { assetValueState } from "./atom";
import { debtValueState } from "./atom";
import { netValueState } from "./atom";
import { vdataState } from "./atom";
import {segmentValueState} from "./atom";
import {scratioValueState} from "./atom";
// import { assetratioValueState } from "./atom";
import { versiondataState } from "./atom";
import { CashValueState } from "./atom";
import { LtdebtValueState } from "./atom";
import { TtlassetValueState} from "./atom";
import { assetRatioState } from "./atom";
import {fixedratioValueState} from "./atom";
import { apidataState } from "./atom";
import dataTableData from "layouts/applications/data-tables/data/dataTableData";
import { newVdataState } from "./atom";
import { opratioValueState } from "./atom";
import {summaryValueState} from "./atom";

//getで取得したpersonsをfilter関数でmaleのみ抽出








export const vdataSelector = selector({
  key: "vdataselectors",
  get: ({ get }) => {
    const vdataset = get(vdataState);
    const versions = vdataset
      .filter((data) => data.displayflag === "1")
      .map((data) => {
        return {
          version: data.version,
        };
      });
    return versions;
  },
});
export const newvdSelector = selector({
  key: "newvdselectors",
  get: ({ get }) => {
    const vdataset= get(newVdataState);
   const vdatasets= get(vdataState);
    const newvdata = vdatasets.find((data) => data.version === vdataset.version)
    return newvdata;
  }
});


export const salesLabelSelector = selector({
  key: "salesValuelabels",
  get: ({ get }) => {
    const vdata= get(newvdSelector);
    const sales = get(salesValueState);
    
     const filteredData = sales.filter(
      (item) => String(item.version) === vdata.version
  );
   const fyArray = filteredData.map(obj => obj.fy);
    return fyArray;
    
  }

});

export const salesVolumeSelector = selector({
    key: "salesVolumes",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const sales = get(salesValueState);
      const filteredData = sales.filter(
        (item) => String(item.version) === vdata.version
    );
      const amtArray = filteredData.map(obj => Math.round(Number(obj.amt)/1000000));
      console.log(amtArray);
      console.log("amtArray");
      return amtArray;
      
    }
  
  });

  
export const salesPerSelector = selector({
    key: "salesPers",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const sales = get(salesValueState);
      const filteredData = sales.filter((item) => String(item.version) === vdata.version);
      const amtArray = filteredData.map(obj =>obj.growthRate);
      return amtArray;
    }
  });

  export const opLabelSelector = selector({
    key: "oplabels",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const oprfitlabels = get(oprofitValueState);
      const filteredData = oprfitlabels.filter((item) => String(item.version) === vdata.version);
      const oplabelArray = filteredData.map(obj =>obj.fy);
      return oplabelArray;
    }
  });

  export const opVolumeSelector = selector({
    key: "opVolumes",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const oprfit = get(oprofitValueState);
      const filteredData = oprfit.filter((item) => String(item.version) === vdata.version);
      const opamtArray = filteredData.map(obj => Math.round(Number(obj.amt)/1000000));
      return opamtArray;
    }
  
  });

  export const opPerSelector = selector({
    key: "opPers",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const oprfit = get(oprofitValueState);
      const filteredData = oprfit.filter((item) => String(item.version) === vdata.version);
      const opperArray = filteredData.map(obj => obj.growthRate);
      return opperArray;
    }
  
  });

  export const assetLabelSelector = selector({
    key: "assetLabels",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const assetValue = get(assetValueState);
      const filteredData =  assetValue.filter((item) => String(item.version) === vdata.version);
      const assetLabelArray = filteredData.map(obj => obj.fy);
      return assetLabelArray;
    }
  
  });

  export const assetVolumelSelector = selector({
    key: "assetVolumes",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const assetValue = get(assetValueState);
      const filteredData =  assetValue.filter((item) => String(item.version) === vdata.version);
      const assetVolumeArray = filteredData.map(obj => Math.round(Number(obj.amt)/1000000));
      return assetVolumeArray;
    }
  
  });

  export const assetPerSelector = selector({
    key: "assetPers",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const assetValue = get(assetValueState);
      const filteredData =  assetValue.filter((item) => String(item.version) === vdata.version);
      const assetPerArray = filteredData.map(obj => obj.growthRate);
      return assetPerArray;
    }
  
  });

  export const debtLabelSelector = selector({
    key: "debtLabels",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const debtValue = get(debtValueState);
      const filteredData = debtValue.filter((item) => String(item.version) === vdata.version);
      const debtLabelArray = filteredData.map(obj => obj.fy);
      return debtLabelArray;
    }
  
  });

  export const debtVolumelSelector = selector({
    key: "debtVolumes",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const debtValue = get(debtValueState);
      const filteredData = debtValue.filter((item) => String(item.version) === vdata.version);
      const debtVolumeArray = filteredData.map(obj => Math.round(Number(obj.amt)/1000000));
      return debtVolumeArray;
    }
  
  });

  export const debtPerSelector = selector({
    key: "debtPer",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const debtValue = get(debtValueState);
      const filteredData = debtValue.filter(
        (item) => String(item.version) === vdata.version
    );
      const debtPerArray = filteredData.map(obj => obj.growthRate);
      return debtPerArray;
    }
  
  });

  export const netLabelSelector = selector({
    key: "netLabels",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const netValue = get(netValueState);
      const filteredData = netValue.filter((item) => String(item.version) === vdata.version);
      const netLabelArray = filteredData.map(obj => obj.fy);
      return netLabelArray;
    }
  
  });

  export const netVolumelSelector = selector({
    key: "netVolumes",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const netValue = get(netValueState);
      const filteredData = netValue.filter((item) => String(item.version) === vdata.version);
      const netVolumeArray = filteredData.map(obj => Math.round(Number(obj.amt)/1000000));
      return netVolumeArray;
    }
  
  });

  export const netPerSelector = selector({
    key: "netPers",
    get: ({ get }) => {
      const vdata= get(newvdSelector);
      const netValue = get(netValueState);
      const filteredData = netValue.filter((item) => String(item.version) === vdata.version);
      const netPerArray = filteredData.map(obj => obj.growthRate);
      return netPerArray;
    }
  
  });


  export const segmentLabelSelector = selector({
    key: "segLabels",
    get: ({ get }) => {
      const vdata = get(newvdSelector);
      const segValue = get(segmentValueState);
      const filteredData = segValue.filter((item) => String(item.version) === vdata.version);
      let fyValues = {};

      // fyの値を集約する
      filteredData.forEach((item) => {
        if (fyValues[item.fy]) {
          fyValues[item.fy] += item.value;
        } else {
          fyValues[item.fy] = item.value;
        }
      });
      
      
      // 集約した値を小さい順に並べる
      const sortedValues = Object.entries(fyValues)
        .sort((a, b) => a[1] - b[1])
        .map((item) => ({
          fy: parseInt(item[0]),
          value: item[1]
        }));
        const seglabelArray =  sortedValues.map(obj => obj.fy);
        return seglabelArray;
    }
});


  export const segPerreproSelector = selector({
    key: "segreproperVolumes",
    get: ({ get }) => {
      const vdata = get(newvdSelector);
      const segValue = get(segmentValueState);
      const filteredData = segValue.filter((item) => String(item.version) === vdata.version);
      const filteredData2 = filteredData.filter(item => item.accntCode === '41000');
        const segreproPerArray = filteredData2.map(item => item.ratio);
     
      return segreproPerArray;
    }
  });

  export const segdevPerSelector = selector({
    key: "segdevpers",
    get: ({ get }) => {
      const vdata = get(newvdSelector);
      const segValue = get(segmentValueState);
      const filteredData = segValue.filter((item) => String(item.version) === vdata.version);
      const filteredData2 = filteredData.filter(item => item.accntCode === '40000');
        const segdevperArray = filteredData2.map(item => item.ratio);
     
      return segdevperArray;
    }
  });

  export const segdivPerSelector = selector({
    key: "segdivs",
    get: ({ get }) => {
      const vdata = get(newvdSelector);
      const segValue = get(segmentValueState);
      const filteredData = segValue.filter((item) => String(item.version) === vdata.version);
      const filteredData2 = filteredData.filter(item => item.accntCode === '42200');
        const segdivperArray = filteredData2.map(item => item.ratio);
     
      return segdivperArray;
    }
  });
  export const segrentPerSelector = selector({
    key: "segrentpers",
    get: ({ get }) => {
      const vdata = get(newvdSelector);
      const segValue = get(segmentValueState);
      const filteredData = segValue.filter((item) => String(item.version) === vdata.version);
      const filteredData2 =filteredData.filter(item => item.accntCode === '47999');
        const segrentperArray = filteredData2.map(item => item.ratio);
     
      return segrentperArray;
    }
  });
  export const segothPerSelector = selector({
    key: "segothpers",
    get: ({ get }) => {
      const vdata = get(newvdSelector);
      const segValue = get(segmentValueState);
      const filteredData = segValue.filter((item) => String(item.version) === vdata.version);
      const filteredData2 = filteredData.filter(item => item.accntCode === '99999');
        const segothperArray = filteredData2.map(item => item.ratio);
     
      return segothperArray;
    }
  });

  export const assetratioLabelSelector = selector({
    key: "assetratioLabels",
    get: ({ get }) => {
      const assetratioLabel = get(assetRatioState);
      const vdata = get(newvdSelector);
      const filteredData = assetratioLabel.filter((item) => String(item.version) === vdata.version);
      const assetratioLabelSet = new Set(filteredData.map(obj => obj.FY));
      const assetratioLabelArray = [...assetratioLabelSet];
  
      return assetratioLabelArray;
    }
  });

  export const currentassetratioSelector = selector({
    key: "currentassetratios",
    get: ({ get }) => {
      const assetratioV = get(assetRatioState);
      const vdata = get(newvdSelector);
      const assetratio = assetratioV.filter((item) => String(item.version) === vdata.version);
    
      // FY と Qrs 毎にグループ化する関数
      const groupByFYQrs = (array) => {
        const result = {};
        array.forEach((item) => {
          const fy = item.FY;
          const qrs = item.Qrs;
          if (!result[fy]) {
            result[fy] = {};
          }
          if (!result[fy][qrs]) {
            result[fy][qrs] = [];
          }
          result[fy][qrs].push(item);
        });
        return result;
      };
      // グループ化したオブジェクトを取得
      const groupedAssetratio = groupByFYQrs(assetratio);
      // 結果を格納する配列
      const ratios = [];
      // FY と Qrs 毎に計算するループ
      const sortedFys = Object.keys(groupedAssetratio).sort((a, b) => a - b);
      for (const fy of sortedFys) {
        const sortedQrs = Object.keys(groupedAssetratio[fy]).sort((a, b) => a - b);
        for (const qrs of sortedQrs) {
    // 各資産のデータを取得し、計算を実行する

          // 各資産のデータを取得
          const currentData =
            groupedAssetratio[fy][qrs].find((item) => item.accntCode === "14999") ||
            null;
          const fixedData =
            groupedAssetratio[fy][qrs].find((item) => item.accntCode === "18999") ||
            null;
          const defferedData =
            groupedAssetratio[fy][qrs].find((item) => item.accntCode === "19899") ||
            null;

            
          if (currentData && fixedData && defferedData) {
            // 各資産の金額を数値に変換
            const currentAmt = parseInt(currentData.amt);
            const fixedAmt = parseInt(fixedData.amt);
            const defferedAmt= parseInt(defferedData.amt);
            // 資産比率を計算して配列に追加
            const ratio = ((currentAmt / (currentAmt + fixedAmt + defferedAmt)) * 100).toFixed(2);
            ratios.push(ratio);
          } else {
            ratios.push(null);
          }
        }
      }
     
      return ratios;
    },
  });


  export const fixedassetratioSelector = selector({
    key: "fixedassetratios",
    get: ({ get }) => {
      const assetratioV = get(assetRatioState);
      const vdata = get(newvdSelector);
      const assetratio = assetratioV.filter((item) => String(item.version) === vdata.version);
    
      // FY と Qrs 毎にグループ化する関数
      const groupByFYQrs = (array) => {
        const result = {};
        array.forEach((item) => {
          const fy = item.FY;
          const qrs = item.Qrs;
          if (!result[fy]) {
            result[fy] = {};
          }
          if (!result[fy][qrs]) {
            result[fy][qrs] = [];
          }
          result[fy][qrs].push(item);
        });
        return result;
      };
      // グループ化したオブジェクトを取得
      const groupedAssetratio = groupByFYQrs(assetratio);
      // 結果を格納する配列
      const ratios = [];
      // FY と Qrs 毎に計算するループ
      for (const fy in groupedAssetratio) {
        for (const qrs in groupedAssetratio[fy]) {
          // 各資産のデータを取得
          const currentData =
            groupedAssetratio[fy][qrs].find((item) => item.accntCode === "14999") ||
            null;
          const fixedData =
            groupedAssetratio[fy][qrs].find((item) => item.accntCode === "18999") ||
            null;
          const defferedData =
            groupedAssetratio[fy][qrs].find((item) => item.accntCode === "19899") ||
            null;
          if (currentData && fixedData && defferedData) {
            // 各資産の金額を数値に変換
            const currentAmt = parseInt(currentData.amt);
            const fixedAmt = parseInt(fixedData.amt);
            const defferedAmt= parseInt(defferedData.amt);
            // 資産比率を計算して配列に追加
            const ratio = ((fixedAmt / (currentAmt + fixedAmt + defferedAmt)) * 100).toFixed(2);
            ratios.push(ratio);
          } else {
            ratios.push(null);
          }
        }
      }
     
      return ratios;
    },
  });


  export const dataTableDataSelector = selector({
    key: 'dataTableDatas',
    get: ({get}) => {
      const newData = get(versiondataState);
      console.log(newData);
      const filteredData = newData.filter((item) => item.displayflag === "1");
      return {
        columns: [
          {
            label: "Version",
            accessor: "version",
            sort: "asc",
            width: 150,
          },
          {
            label: "Remarks",
            accessor: "remarks",
            sort: "asc",
            width: 270,
          },
        ],
        rows: filteredData.map((item) => ({
          version: item.version,
          remarks: item.comment,
        })),
      };
    }
  });

  export const CashValueSelector = selector({
    key: 'cashvalues',
    get: ({ get }) => {
      const cashValueData = get(CashValueState);
      const vdata = get(newvdSelector);
      const filterData =cashValueData.filter((item) => String(item.version) === vdata.version);
      const cashAmount = Math.round(parseInt(filterData[0].amt) / 1000000);
      return cashAmount;
    },
  });
  //test用
  // export const cashValueDataState = selector({
  //   key: 'cashValueData',
  //   get: ({ get }) => {
  //     return get(CashValueState);
  //   }
  // })
  //test用
  export const newvdSelectorState = selector({
    key: 'newvdSelector',
    get: ({ get }) => {
      return get(newvdSelector);
    }
  })

  export const LtdebtValueSelector = selector({
    key: 'ltdebtValues',
    get: ({ get }) => {
      const LtdebtValueData = get(LtdebtValueState);
      const vdata = get(newvdSelector);
      const filterData = LtdebtValueData.filter((item) => String(item.version) === vdata.version);
      const ltdebtAmount = Math.round(parseInt(filterData[0].amt) / 1000000);
      return ltdebtAmount;
    },
  });

  export const TtlassetValueSelector = selector({
    key: 'ttlassetValues',
    get: ({ get }) => {
      const ttlassetValueData = get(TtlassetValueState);
      const vdata = get(newvdSelector);
      const filterData = ttlassetValueData.filter((item) => String(item.version) === vdata.version);
      const ttlassetAmount = Math.round(parseInt(filterData[0].amt) / 1000000);
      return ttlassetAmount;
    },
  });

export const ScratioSetSelector = selector({
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
  

  export const debtratioLabelSelector = selector({
    key: "debtratioLabels",
    get: ({ get }) => {
      const debtratioLabels = get(fixedratioValueState);
      const vdata = get(newvdSelector);
      const debtratioLabel = debtratioLabels.filter((item) => String(item.version) === vdata.version);
      
      const debtratioLabelSet = new Set(debtratioLabel.map(obj => obj.FY));
      const debtratioLabelArray = [...debtratioLabelSet];
      return debtratioLabelArray;
    }
  });
  


  export const currentdebtratioSelector = selector({
    key: "currentdebtratios",
    get: ({ get }) => {
      const debtratios = get(fixedratioValueState);
      const vdata = get(newvdSelector);
      const debtratio = debtratios.filter((item) => String(item.version) === vdata.version);
      // FY と Qrs 毎にグループ化する関数
      const groupByFYQrs = (array) => {
        const result = {};
        array.forEach((item) => {
          const fy = item.FY;
          const qrs = item.Qrs;
          if (!result[fy]) {
            result[fy] = {};
          }
          if (!result[fy][qrs]) {
            result[fy][qrs] = [];
          }
          result[fy][qrs].push(item);
        });
        return result;
      };
      // グループ化したオブジェクトを取得
      const groupedDebtratio = groupByFYQrs(debtratio);
      // 結果を格納する配列
      const ratios = [];
      // FY と Qrs 毎に計算するループ
      for (const fy in groupedDebtratio) {
        for (const qrs in groupedDebtratio[fy]) {
          // 各資産のデータを取得
          const currentData =
            groupedDebtratio[fy][qrs].find((item) => item.accntCode === "24999") ||
            null;
          const fixedData =
            groupedDebtratio[fy][qrs].find((item) => item.accntCode === "29998") ||
            null;
        
          if (currentData && fixedData) {
            // 各資産の金額を数値に変換
            const currentAmt = parseInt(currentData.amt);
            const fixedAmt = parseInt(fixedData.amt);
        
            // 資産比率を計算して配列に追加
            const ratio = ((currentAmt / (currentAmt + fixedAmt)) * 100).toFixed(2);
            ratios.push(ratio);
          } else {
            ratios.push(null);
          }
        }
      }
     
      return ratios;
    },
  });


  export const fixeddebtratioSelector = selector({
    key: "fixeddebtratios",
    get: ({ get }) => {
      const debtratios = get(fixedratioValueState);
      const vdata = get(newvdSelector);
      const debtratio = debtratios.filter((item) => String(item.version) === vdata.version);
      // FY と Qrs 毎にグループ化する関数
      const groupByFYQrs = (array) => {
        const result = {};
        array.forEach((item) => {
          const fy = item.FY;
          const qrs = item.Qrs;
          if (!result[fy]) {
            result[fy] = {};
          }
          if (!result[fy][qrs]) {
            result[fy][qrs] = [];
          }
          result[fy][qrs].push(item);
        });
        return result;
      };
      // グループ化したオブジェクトを取得
      const groupedDebtratio = groupByFYQrs(debtratio);
      // 結果を格納する配列
      const ratios = [];
      // FY と Qrs 毎に計算するループ
      for (const fy in groupedDebtratio) {
        for (const qrs in groupedDebtratio[fy]) {
          // 各資産のデータを取得
          const currentData =
          groupedDebtratio[fy][qrs].find((item) => item.accntCode === "24999") ||
            null;
          const fixedData =
          groupedDebtratio[fy][qrs].find((item) => item.accntCode === "29998") ||
            null;
          
          if (currentData && fixedData ) {
            // 各資産の金額を数値に変換
            const currentAmt = parseInt(currentData.amt);
            const fixedAmt = parseInt(fixedData.amt);
            
            // 資産比率を計算して配列に追加
            const ratio = ((fixedAmt / (currentAmt + fixedAmt)) * 100).toFixed(2);
            ratios.push(ratio);
          } else {
            ratios.push(null);
          }
        }
      }
    
      return ratios;
    },
  });
 

  
  export const SummaryLabelSelector = selector({
    key: "summaryValuelabels",
    get: ({ get }) => {
      const vdata = get(newvdSelector);
      const summary = get(summaryValueState);
  
      const filteredData = summary.filter(
        (item) => String(item.version) === vdata.version
      );
      const fyArray = filteredData.map(obj => Number(obj.fy_applied));
      const groupedFy = fyArray.reduce((result, value) => {
        if (!result[value]) {
          result[value] = [];
        }
        result[value].push(value);
        return result;
      }, {});
  
      // 結果を配列に変換
      const resultArray = Object.keys(groupedFy).map(key => {
        return {
          fy: Number(key),
          count: groupedFy[key].length,
          values: groupedFy[key]
        };
      });
      const fyValues = resultArray.map(obj => obj.fy);
        console.log(fyValues);
        return fyValues;
    },
    
  });
 
  
  export const summaryDVAmtSelector = selector({
      key: "summaDVAmts",
      get: ({ get }) => {
        const vdata= get(newvdSelector);
        const summary = get(summaryValueState);
        const filteredData = summary.filter(
          (item) => item.devPLCode === "Dv" && item.version === vdata.version
        );
        const amtArray = filteredData.map(obj => Math.round(Number(obj.Total_assetValue)/1000000));
        console.log(amtArray);
        return amtArray;
      }
    });
    export const summaryIRAmtSelector = selector({
      key: "summaIRAmts",
      get: ({ get }) => {
        const vdata= get(newvdSelector);
        const summary = get(summaryValueState);
        const filteredData = summary.filter(
          (item) => item.devPLCode === "IR" && item.version === vdata.version
        );
        const amtArray = filteredData.map(obj => Math.round(Number(obj.Total_assetValue)/1000000));
        console.log(amtArray);
        return amtArray;
      }
    });


  
    
  export const summaryDVVolumeSelector = selector({
      key: "summaryDVVolumes",
      get: ({ get }) => {
        const vdata= get(newvdSelector);
        const summary = get(summaryValueState);
        const filteredData = summary.filter(
          (item) => item.devPLCode === "Dv" && String(item.version) === vdata.version);

        const amtArray = filteredData.map(obj =>obj.assetCount);
        return amtArray;
      }
    });
    export const summaryIRVolumeSelector = selector({
      key: "summaryIRVolumes",
      get: ({ get }) => {
        const vdata= get(newvdSelector);
        const summary = get(summaryValueState);
        const filteredData = summary.filter(
          (item) => item.devPLCode === "IR" && String(item.version) === vdata.version);

        const amtArray = filteredData.map(obj =>obj.assetCount);
        return amtArray;
      }
    });