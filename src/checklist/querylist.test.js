import List from "./querylist";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";


// check that component is are in the dom or not

test("check the component", () => {

    render(
        <List />
    )

    const checkComponent = screen.getByText(/ul list/i) //RGX for to case senstive if you wite the small or capital letter then also it will check it.
    expect(checkComponent).toBeInTheDocument()
})



// check the li item length

test("render the 4 list item", () => {
    render(<List />)
    const listitem = screen.getAllByRole("listitem")
    // expect(listitem).toHaveLength(4)

    // OR
    expect(listitem.length).toBe(4);

    //OR 
    // expect(listitem.length).toEqual(4)
})


// get by the title;

test("get by the title", () => {
    render(
        <List />
    )
    const checktitle = screen.getByTitle("mytile")
    expect(checktitle.textContent).toBe("title")
})


// get by the testid

test("get by test id", () => {
    render(
        <List />
    )
    const getByTestId = screen.getByTestId("sum");
    expect(getByTestId.textContent).toBe("30")
})


// get by the lable

test("get by the lable", () => {
    render(
        <List />
    )
    const getElement = screen.getByLabelText("username", { selector: 'input' })
})


// get by the placeholder

test("test by the placeholder", () => {
    render(
        <List />
    )
    const getByplaceholder = screen.getByPlaceholderText("username")
})