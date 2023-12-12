import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Simulate from "layouts/dashboards/simulate";
import { MaterialUIControllerProvider } from "context/index.js";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import React from "react";


jest.mock("../api/SaData", () => {
  return function Sadatas() {
    return <div>Sadatas</div>;
  };
});
jest.mock("../components/MDBox", () => {
  return function MDBox() {
    return <div>MDBox</div>;
  };
});

let mockmixedChartIndex = 0;

jest.mock("examples/Charts/MixedChart", () => {
  return function MixedChart({ mixedChartData }) {
    // 一意なdata-testidを生成
    const mockdataTestId = `mixed-chart-${mockmixedChartIndex}`;
    mockmixedChartIndex++;

    return (
      <div
        data-testid={mockdataTestId}
        data-data={JSON.stringify(mixedChartData)}
      >
        MixedChart
      </div>
    );
  };
});

let mockVerticalBarChartIndex = 0;

jest.mock("examples/Charts/BarCharts/VerticalBarChart", () => {
  return function VerticalBarChart({ data }) {
    // 一意なdata-testidを生成
    const mockdataTestId = `vertical-bar-chart-${mockVerticalBarChartIndex}`;
    mockVerticalBarChartIndex++;

    return (
      <div
        data-testid={mockdataTestId}
        data-data={JSON.stringify(data)}
      >
        VerticalBarChart
      </div>
    );
  };
});
  
it("renders chart data correctly", async () => {
  // Define the expected data here
  const expectedMixedChartData = {
    SalesGrowth:{
   labels:['2022', '2023', '2024', '2025', '2026', '2027'],
    datasets: [
      {
        chartType: "thick-bar",
        label: "売上高(百万円)",
        color: "primary",
        data: [1000,2000,3000,4000,5000,6000],
     
        yAxisID: "left-y-axis", // 追加
       
      },
      {
        chartType: "gradient-line",
        label: "成長率（％）",
        color: "info",
        data:[10,20,30,40,50,60],
        yAxisID: "right-y-axis", // 追加
       
        fill: false,
      },
    ],
    
  }};
  const expectedVerticalBarChartData =  {
    assetratios:{
     labels: ["2021", "2023", "2024", "2025", "2026", "2027"],
     datasets: [
       {
         label: "流動資産",
         color: "primary",
         data: [15, 20, 12, 60, 20, 15],
       },
       {
         label: "固定資産",
         color: "secondary",
         data: [15, 20, 12, 60, 20, 15],
       },
     ],
   }}


  render(
    <RecoilRoot>
      <MaterialUIControllerProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Simulate />
            </React.Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </MaterialUIControllerProvider>
    </RecoilRoot>
  );

  // Wait for the components to render
  await screen.findByText("MDBox");
  screen.queryByText("MixedChart");
  screen.queryByText("VerticalBarChart");

  // Check if the data is rendered correctly
  const mixedCharts = screen.queryAllByTestId(/mixed-chart-\d+/);

  // 各mixedChart要素に対してテスト処理を行う
  mixedCharts.forEach((mixedChart, index) => {
    // 例: mixedChartデータが正しいことを確認
    expect(JSON.parse(mixedChart.getAttribute("data-data"))).toEqual(expectedMixedChartData[index]);
  });
  const verticalBarCharts = screen.queryAllByTestId(/vertical-bar-chart-\d+/);
  verticalBarCharts.forEach((verticalBarChart, index) => {
    // 例: verticalBarChartデータが正しいことを確認
    expect(JSON.parse(verticalBarChart.getAttribute("data-data"))).toEqual(expectedVerticalBarChartData[index]);
  });
});