import Header from "../Header";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import userContext from "../../utils/userContext";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/store";
test("login button present or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

 // const login = screen.getByText('/login/i');
   const login = screen.getByRole('button',{name:"Login"})

  expect(login).toBeInTheDocument();
});

test("login button present or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

 // const login = screen.getByText('/login/i');
   const login = screen.getByRole('button',{name:"Login"})

  expect(login).toBeInTheDocument();
});

test("logout button coming or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

 // const login = screen.getByText('/login/i');
   const login = screen.getByRole('button',{name:"Login"})
   fireEvent.click(login)
   const logout = screen.getByRole('button',{name:"Logout"})

  expect(logout).toBeInTheDocument();
});