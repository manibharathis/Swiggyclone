import RestrauntCard from '../RestrauntCard'
import resCardMock from '../mocks/resCardMock.json'
import { render,screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PromotedRestroCard } from '../RestrauntCard'
import "@testing-library/jest-dom";
it("should render res menu",()=>{
    render(
    
    <BrowserRouter><RestrauntCard res={resCardMock}/></BrowserRouter>)
    const name = screen.getByText("Pizza Paradise")
    expect(name).toBeInTheDocument()
})

it("should render res menu with veg",()=>{

    const PromotedRes = PromotedRestroCard(RestrauntCard)
    render(
    <BrowserRouter><PromotedRes res={resCardMock}/></BrowserRouter>)
    const name = screen.getByText("Veg")
    expect(name).toBeInTheDocument()
})


