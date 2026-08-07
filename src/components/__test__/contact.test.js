import Contact from "../Contact";
import {getByRole, render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import { describe } from "node:test";
describe("contact cart test cases ",()=>{
        test("should load two input box",()=>{
    render(<Contact />)

    const inputboxes = screen.getAllByRole("textbox");
    
 const inputName = screen.getByPlaceholderText("name");
 const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
    // Assertion
  //  expect(inputName).toBeInTheDocument();
    //expect(inputboxes.length).toBe(3)
})


})
