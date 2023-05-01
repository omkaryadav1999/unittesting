import Count from "./home"
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// check the component is render or not 

test("check the component render or not", () => {
    render(
        <Count />
    )
    const element = screen.getByText("counter")
    expect(element.textContent).toBe("counter")
})

//check the initial value is 0 or not.

test("check the inital value", () => {
    render(
        <Count />
    )
    const initalValue = screen.getByTestId("countervalue");
    expect(initalValue.textContent).toBe("0");
})


// check the value is increase by one or not.

test("check the value is increase or not", () => {
    render(
        <Count />
    )
    const element = screen.getByTestId("increment");
    fireEvent.click(element);
    const checkValue = screen.getByTestId("countervalue");
    expect(checkValue.textContent).toBe("1");
})

// check the value is substract or not

test("check the value is zero or not", () => {
    render(
        <Count />
    )
    const element = screen.getByTestId("decrement");
    fireEvent.click(element)
    const checkValue = screen.getByTestId("countervalue");
    expect(checkValue.textContent).toBe("-1");
})

// check the value is rest or not

test("value is reset ", () => {
    render(
        <Count />
    )
    const element = screen.getByTestId("rest");
    fireEvent.click(element);
    const checkValue = screen.getByTestId("countervalue");
    expect(checkValue.textContent).toBe("0");
})