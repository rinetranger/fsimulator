import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Top from "layouts/dashboards/top";

jest.mock("examples/LayoutContainers/DashboardLayout", () => ({ children }) => <div>{children}</div>);
jest.mock("examples/Navbars/DashboardNavbar", () => () => <div>DashboardNavbar</div>);
jest.mock("layouts/pages/profile/components/Header", () => () => <div>Header</div>);
jest.mock("layouts/ecommerce/products/product-page/components/ProductInfo", () => () => <div>ProductInfo</div>);
jest.mock("examples/Tables/DataTable", () => () => <div>DataTable</div>);
jest.mock("api/Assetdata", () => () => <div>AssetDatas</div>);
jest.mock("api/Segmentdata", () => () => <div>SegmentDatas</div>);
jest.mock("api/Sadata", () => () => <div>SaDatas</div>);
jest.mock("api/vdata", () => () => <div>VDatas</div>);
jest.mock("api/Opdata", () => () => <div>OpDatas</div>);
jest.mock("api/Debtdata", () => () => <div>DebtDatas</div>);
jest.mock("api/sacratio", () => () => <div>ScratioDatas</div>);
jest.mock("api/gpratio", () => () => <div>GpratioDatas</div>);
jest.mock("api/Apidata", () => () => <div>ApiDatas</div>);
jest.mock("api/Cash", () => () => <div>CashDatas</div>);
jest.mock("api/Assetratio", () => () => <div>AssetratioDatas</div>);
jest.mock("api/Fixedratio", () => () => <div>FixedratioDatas</div>);
jest.mock("api/Ltdebt", () => () => <div>LtdebtDatas</div>);
jest.mock("api/Netdata", () => () => <div>NetDatas</div>);
jest.mock("api/Ttlasset", () => () => <div>TtlassetDatas</div>);
jest.mock("api/versiondata", () => () => <div>VersionDatas</div>);
jest.mock("components/MDBox", () => ({ children }) => <div>{children}</div>);
jest.mock("components/MDTypography", () => ({ children }) => <div>{children}</div>);
jest.mock("@mui/material/Card", () => ({ children }) => <div>{children}</div>);
jest.mock("@mui/material/Grid", () => ({ children }) => <div>{children}</div>);
// 他の依存関係も同様にモック化してください。

describe("Top component", () => {
  it("renders information correctly", () => {
    render(
      <RecoilRoot>
        <Top />
      </RecoilRoot>
    );

    expect(screen.getByText("DashboardNavbar")).toBeInTheDocument();
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("シミュレート開始四半期・バージョン選択")).toBeInTheDocument();
    expect(screen.getByText("・シミュレート開始期とバージョンを設定してください。")).toBeInTheDocument();
    expect(screen.getByText("・バージョンのアップデート内容については右記をご参照ください。")).toBeInTheDocument();
    expect(screen.getByText("ProductInfo")).toBeInTheDocument();
    expect(screen.getByText("DataTable")).toBeInTheDocument();
    expect(screen.getByText("AssetDatas")).toBeInTheDocument();
    expect(screen.getByText("SegmentDatas")).toBeInTheDocument();   
    expect(screen.getByText("SaDatas")).toBeInTheDocument();
    expect(screen.getByText("VDatas")).toBeInTheDocument();
    expect(screen.getByText("OpDatas")).toBeInTheDocument();
    expect(screen.getByText("DebtDatas")).toBeInTheDocument();
    expect(screen.getByText("ScratioDatas")).toBeInTheDocument();
    expect(screen.getByText("ApiDatas")).toBeInTheDocument();
    expect(screen.getByText("CashDatas")).toBeInTheDocument();
    expect(screen.getByText("AssetratioDatas")).toBeInTheDocument();
    expect(screen.getByText("FixedratioDatas")).toBeInTheDocument();
    expect(screen.getByText("LtdebtDatas")).toBeInTheDocument();
    expect(screen.getByText("NetDatas")).toBeInTheDocument();
    expect(screen.getByText("TtlassetDatas")).toBeInTheDocument();
    expect(screen.getByText("VersionDatas")).toBeInTheDocument();
  });
});
