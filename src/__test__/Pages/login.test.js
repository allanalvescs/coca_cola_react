import React from "react";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import Login from "../../Page/Login"

import api from "../../Service/api"
import MockAdapter from "axios-mock-adapter";

import { UserProvider } from "../../Providers/modules/User";

const mockHistoryPush = jest.fn()

const apiMock = new MockAdapter(api)

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: ({ children }) => children,
    useHistory: () => ({
        push: mockHistoryPush
    })
}))


describe("Login Page", () => {
    test("Should be possible to acess acount of user", async () => {

        apiMock.onPost("/sessions").replyOnce(200, {});

        render(
            <UserProvider>
                <Login />
            </UserProvider>
        );

        const inputEmail = screen.getByPlaceholderText(/insert your email/i);
        const inputPassword = screen.getByPlaceholderText(/password/i);

        const button = screen.getByText("sing in");

        fireEvent.change(inputEmail, { target: { value: "user@gmail.com" } });
        fireEvent.change(inputPassword, { target: { value: "323456" } });

        fireEvent.click(button);

        await waitFor(() => {

            expect(inputEmail).toHaveValue("user@gmail.com")
            expect(inputPassword).toHaveValue("323456")
            expect(mockHistoryPush).toHaveBeenCalledWith("/whatsnew")
        })

    })
})

describe("Page Login error", () => {
    test("should apppear an error of form", async () => {
        apiMock.onPost("/sessions").replyOnce(200, {});

        render(
            <UserProvider>
                <Login />
            </UserProvider>
        );

        const inputEmail = screen.getByPlaceholderText(/insert your email/i);
        const inputPassword = screen.getByPlaceholderText(/password/i);


        const button = screen.getByText("sing in");

        fireEvent.change(inputEmail, { target: { value: "user@gmail" } });
        fireEvent.change(inputPassword, { target: { value: "" } });

        fireEvent.click(button)

        const errorInputEmail = await screen.findByText(/invalid Email/i);
        const errorInputPassword = await screen.findByText(/Request your password/i)

        await waitFor(() => {
            expect(inputEmail).toHaveValue("user@gmail");

            expect(inputPassword).toHaveValue("");

            expect(errorInputEmail).toBeInTheDocument();

            expect(errorInputPassword).toBeInTheDocument();

            expect(mockHistoryPush).not.toHaveBeenCalledWith("/whatsnew");
        })

    })
})