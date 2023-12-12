import React from "react";
import { ThemeProvider } from '@emotion/react'
import { render, fireEvent, screen } from "@testing-library/react";
import ProductInfo from "layouts/ecommerce/products/product-page/components/ProductInfo";
import MDButton from "components/MDButton"; // 追加
import { RecoilRoot } from "recoil";
import { MaterialUIControllerProvider } from "context/index.js";
import { palette, functions, typography,} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import linearGradient from "assets/theme/functions/linearGradient";

jest.mock("components/MDBox", () => {
    return ({ children }) => <div data-testid="mdbox-mock">{children}</div>;
  });
  
  jest.mock("@mui/material/Grid", () => {
    return ({ children }) => <div data-testid="grid-mock">{children}</div>;
  });
  
  
  const color = 'blue'; // あるいは他の任意の色
  const gradients = {
    blue: {
      main: 'linear-gradient(0deg, #1CB5E0 0%, #000851 100%)',
      state: 'linear-gradient(0deg, #1CB5E0 0%, #000851 100%)',
    },
    // 他の色に対する定義も追加できます。
  };
  

 
  
  const mockTheme = {
    palette: {
      gradients: {
        primary: {
          main: "#FFFFFF",
          state: "#000000",
        },
        secondary: { // secondary を追加
          main: "#CCCCCC",
          state: "#AAAAAA",
        },
      },
      white: {
        main: "#FFFFFF",
      },
      transparent: {
        main: "transparent",
      }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
      },
      functions:{
        linearGradient: {
            main: 'linear-gradient(0deg, #1CB5E0 0%, #000851 100%)',
        }
      }
  };
//    const  linearGradient=(main, state)=> {
//     return `background-image: linear-gradient(${main}, ${state});` || [];
//   }
  const backgroundValue = color === "white" || !gradients[color]
  ? white.main
  : gradients[color].main
      ? linearGradient(gradients[color].main, gradients[color].state)
      : "default-value";


  test("renders the correct data and sets data correctly on button click", () => {
    
    // テスト用のデータをセットアップします
    const testData = {
      title: "Test Product",
      description: "This is a test product.",
    };
  
    // テスト対象のコンポーネントをレンダリングします
    const { getByText } = render(
        <RecoilRoot>
            <MaterialUIControllerProvider>
                <ThemeProvider theme={mockTheme}>
                    <ProductInfo />
                </ThemeProvider>
            </MaterialUIControllerProvider>
        </RecoilRoot>
    );
  
    // 以下の部分は、実際のコンポーネントの動作に合わせて、適切な確認方法を実装してください。

  
    // データが正しくレンダリングされているかを確認します
    expect(screen.getByText(testData.title)).toBeInTheDocument();
    expect(screen.getByText(testData.description)).toBeInTheDocument();
    // データが正しくレンダリングされているかを確認します
expect(screen.getByText("Version")).toBeInTheDocument();

  
    // MDBoxとGridのモックが正しく表示されていることを確認
    expect(screen.getByTestId("mdbox-mock")).toBeInTheDocument();
    expect(screen.getByTestId("grid-mock")).toBeInTheDocument();
  
    // ボタンを取得し、クリックイベントを発火させます
    const button = screen.getByRole("button");
    fireEvent.click(button);
  
    // ボタンを押した後、正しいデータがセットされるかを確認します
    // 例: ステートが更新されたり、コールバック関数が実行されるなど
    // この部分は、実際のコンポーネントの動作に合わせて、適切な確認方法を実装してください
  });
