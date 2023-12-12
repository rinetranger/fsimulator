import { render, screen, waitFor } from "@testing-library/react";
import GptioDatas from "../api/gpratio";
import axios from "axios";
import { RecoilRoot } from "recoil";
jest.mock("axios");

// Create a helper function to set up axios mock
const setupAxiosMock = (response, error = false) => {
  axios.get.mockImplementation(() => {
    if (error) {
      return Promise.reject(response);
    } else {
      return Promise.resolve({ data: response });
    }
  });
};

describe("GptioDatas component", () => {
  afterEach(() => {
    // Reset any request made using axios
    axios.get.mockReset();
  });

  test("fetches and displays data when axios request is successful", async () => {
    const mockData = [
      { id: 1, name: "Test Data 1" },
      { id: 2, name: "Test Data 2" },
    ];

    // Set up the axios mock
    setupAxiosMock(mockData);

    // ...the rest of your test code
  });

  test("handles axios request error", async () => {
    // Set up the axios mock to simulate an error
    const errorMessage = "Request failed with status code 500";
    setupAxiosMock(errorMessage, true);

    // ...the rest of your test code
  });
 
  
});
