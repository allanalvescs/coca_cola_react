import React from "react";

import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import Subscribe from "../../Page/Subscribe";
import MockAdapter from "axios-mock-adapter";


import api from "../../Service/api";
import { UserProvider } from "../../Providers/modules/User";

const Mockapi = new MockAdapter(api)

const MockHistoryPush = jest.fn()

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: (children) => children,
    useHistory: () => ({
        push: MockHistoryPush
    })
}))

describe("Subscribe Page", () => {
    test("should be able to subscribe a new user, if sucess guide user to login page", async () => {
        Mockapi.onPost("/users").replyOnce(200, {})

        render(
            <UserProvider>
                <Subscribe />
            </UserProvider>
        );

        const emailField = screen.getByPlaceholderText(/insert your best email/i);
        const nameField = screen.getByPlaceholderText(/insert your username/i)
        const contactField = screen.getByPlaceholderText(/insert your contact/i)
        const passwordField = screen.getByPlaceholderText(/created a password/i)
        const confirmField = screen.getByPlaceholderText(/confirm your password/i)
        const TermsField = screen.getByRole("checkbox")

        fireEvent.change(emailField, { target: { value: "testUser@gmail.com" } })
        fireEvent.change(nameField, { target: { value: "testUser" } })
        fireEvent.change(contactField, { target: { value: "145682483" } })
        fireEvent.change(passwordField, { target: { value: "myPassword123" } })
        fireEvent.change(confirmField, { target: { value: "myPassword123" } })
        fireEvent.change(TermsField, { target: { value: "true" } })


        const buttonElement = screen.getByText("Subscribe");

        fireEvent.click(buttonElement)

        await waitFor(() => {
            expect(emailField).toHaveValue("testUser@gmail.com");
            expect(passwordField).toHaveValue("myPassword123");

            expect(MockHistoryPush).toHaveBeenCalledWith("/login")
        })

    })

    test("should not be able to subscribe a user", async () => {
        Mockapi.onPost("/users").replyOnce(200, {})

        render(
            <UserProvider>
                <Subscribe />
            </UserProvider>
        );

        const emailField = screen.getByPlaceholderText(/insert your best email/i);
        const nameField = screen.getByPlaceholderText(/insert your username/i)
        const contactField = screen.getByPlaceholderText(/insert your contact/i)
        const passwordField = screen.getByPlaceholderText(/created a password/i)
        const confirmField = screen.getByPlaceholderText(/confirm your password/i)
        const TermsField = screen.getByRole("checkbox")

        fireEvent.change(emailField, { target: { value: "testUser@gmail" } })
        fireEvent.change(nameField, { target: { value: "testUser" } })
        fireEvent.change(contactField, { target: { value: "145682483" } })
        fireEvent.change(passwordField, { target: { value: "myPassword123" } })
        fireEvent.change(confirmField, { target: { value: "myPassword123" } })
        fireEvent.change(TermsField, { target: { value: "false" } })


        const buttonElement = screen.getByText("Subscribe");

        fireEvent.click(buttonElement)

        const errorEmail = await screen.findByText(/email invalid/i);
        //const falseCheckBox = await screen.findByText(/please accept the terms of use!/i)

        await waitFor(() => {
            expect(errorEmail).toBeInTheDocument();
            // expect(falseCheckBox)

            expect(MockHistoryPush).not.toHaveBeenCalledWith("/login")
        })
    })
})