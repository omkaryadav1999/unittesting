import React from "react";
import Login from "./login";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// check the component is render or not by using the placeholder like email,password and btn 

test("should component is render or not", () => {
    render(
        <Login />
    )
    const email = screen.getByPlaceholderText(/email/i);
    expect(email).toBeInTheDocument()
})


test("check the password", () => {
    render(
        <Login />
    )
    const password = screen.getByPlaceholderText("password")
    expect(password).toBeInTheDocument()
})


test("check the submit", () => {
    render(
        <Login />
    )
    const submitbtn = screen.getByRole("button")
    expect(submitbtn).toBeInTheDocument()
})

// to loding should not render;
test("loding should not render",()=>{
    render(
        <Login/>
    )
    const checkEl = screen.getByRole("button")
    expect(checkEl).not.toHaveTextContent("palse wait")
})



// when the user viste the page the user excepting that all input are alredy empty

test("check email are empty", () => {
    render(
        <Login />
    )
    const email = screen.getByPlaceholderText("email")
    expect(email.value).toBe("")  // for to check the input field is alredy empty.put first value inside the input field and then check after that remove the value from there.
})

test("check email are empty", () => {
    render(
        <Login />
    )
    const email = screen.getByPlaceholderText("password");
    expect(email.value).toBe("");
})


// disabled the btn

test("button should disabled when the input is not exist ", () => {
    render(
        <Login />
    )
    const btnlogin = screen.getByRole("button")
    expect(btnlogin).toBeDisabled()
})


// error msg not to be visible

test("Error should be not visible", () => {
    render(
        <Login />
    )
    const error = screen.getByTestId("error");
    expect(error).not.toBeVisible()
})


// chek the input value of the email

test("check the email field should change", () => {
    render(
        <Login />
    )
    const emailElement = screen.getByPlaceholderText("email")
    const testValue = "";
    fireEvent.change(emailElement, { target: { value: testValue } });
    expect(emailElement.value).toBe(testValue);
})


// get the input value of the passowrd

test("check the email field should change", () => {
    render(
        <Login />
    )
    const password = screen.getByPlaceholderText("password");
    const testValue = "";
    fireEvent.change(password, { target: { value: testValue } });
    expect(password.value).toBe(testValue);
})


// btn should not be disabled when the user input exist;

test("button should not disabled when the input exsist", () => {
    render(
        <Login />
    )
    const btnlogin = screen.getByRole("button");
    const useremailElement = screen.getByPlaceholderText("email");
    const userpassword = screen.getByPlaceholderText("password");
    let testValue = ""
    fireEvent.change(useremailElement, { target: { value: testValue } })
    fireEvent.change(userpassword, { target: { value: testValue } })
    expect(btnlogin).not.toBeDisabled()
})



//loding should be re-render when click;

test("loding should not render",()=>{
    render(
        <Login/>
    )
    const checkEl = screen.getByRole("button")
    const useremailElement = screen.getByPlaceholderText("email");
    const userpassword = screen.getByPlaceholderText("password");
    let testValue = ""
    fireEvent.change(useremailElement, { target: { value: testValue } })
    fireEvent.change(userpassword, { target: { value: testValue } })
    fireEvent.click(checkEl)
    expect(checkEl).not.toHaveTextContent(/plase wait/i)
})