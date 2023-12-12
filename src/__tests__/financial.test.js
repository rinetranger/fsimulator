import {render,screen} from "@testing-library/react";
import Financial from "../layouts/dashboards/financial";
import { cashValueDataState, newvdState } from "../Data/atom";
import { RecoilRoot } from "recoil";


function mockinitializeState({ set }) {
    // Provide mock data for the cashValueDataState and newvdSelectorState
    set(cashValueDataState, [
      {
        version: "1",
        amt: "1000000",
      },
    ]);
  
    set(newvdState, [
        {
      version: "1",
      amt: "1000000",
        }
    ]);
  }

  

test("renders multiple Steps components", () => {
  render(
    <RecoilRoot initializeState={mockinitializeState}>
    <Financial />
  </RecoilRoot>
  );
  const stepCaElement = screen.getByTestId("step-ca");
  const stepLtdElement = screen.getByTestId("step-ltd");
  const stepTtlaElement = screen.getByTestId("step-ttla");
  
  expect(stepCaElement).toBeInTheDocument();
  expect(stepLtdElement).toBeInTheDocument();
  expect(stepTtlaElement).toBeInTheDocument();
});

test("renders DataTables component", () => {
  render(
    <RecoilRoot initializeState={mockinitializeState}>
    <Financial />
  </RecoilRoot>
  );
  const dataTablesElement = screen.getByTestId("data-tables");
  expect(dataTablesElement).toBeInTheDocument();
});
