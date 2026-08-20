import Body from "../Body";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//import { act } from "react-dom/test-utils";
//mport { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
// ✅ Correct import
import { act } from "react";
import mockResListData from "../mocks/mockResListData.json";
import { click } from "@testing-library/user-event/dist/cjs/convenience/click.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockResListData);
    },
  });
});
it("testing search button present", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  const searchButton = screen.getByRole("button", { name: "Search" });
  expect(searchButton).toBeInTheDocument();
});

it("testing filter", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const totalItems = await screen.findAllByTestId("resCard");
  expect(totalItems.length).toBe(9);
  const searchButton = screen.getByRole("button", { name: "Search" });
  console.log(searchButton);
  const searchInput = screen.getByTestId("searchinput");
  // fireEvent.change(searchInput,{target:{value:"Sushi"}})
  const user = userEvent.setup();

  await user.type(searchInput, "Sushi");
  //expect(searchInput).toHaveValue('Sushi');
  await fireEvent.click(searchButton);
  const aftertotalItems = await screen.findAllByTestId("resCard");
  expect(aftertotalItems.length).toBe(1);
});

it("should filter top rated",async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        )
    })

    const filterButton = screen.getByRole('button',{name:"Top Rated Restraunts"})
    await fireEvent.click(filterButton)
    const totalItems = await screen.findAllByTestId("resCard")
    expect(totalItems.length).toBe(5)
})