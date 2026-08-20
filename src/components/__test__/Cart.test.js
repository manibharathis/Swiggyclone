import { fireEvent, getByTestId, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import resItemsMock from "../mocks/resItemsMock.json";
import { Provider } from "react-redux";
import Cart from "../Cart";
import appStore from "../../utils/store";
import ResMenu from '../ResMenu'
import Header from "../Header";
import "@testing-library/jest-dom";
import {act} from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resItemsMock);
    }
  });
});
it("should add to cart", async () => {
  await act(async() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <ResMenu />
        </Provider>
      </BrowserRouter>,
    );
  });

  const accordianHeader = screen.getByText("Sides (2)")
  fireEvent.click(accordianHeader)
   expect(screen.getAllByTestId("foodItems").length).toBe(2);

  expect(screen.getByText("Cart -0")).toBeInTheDocument();
  const addbuttons = screen.getAllByRole('button',{name:"Add +"});
  fireEvent.click(addbuttons[0])
   expect(screen.getByText("Cart -1")).toBeInTheDocument();
  fireEvent.click(addbuttons[1])
  expect(screen.getByText("Cart -2")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(4);
})