import React from "react";

import { screen, render } from "@testing-library/react"

import Input from "../../Components/Input";

describe("Input Component", () => {
    test("should render input component", () => {
        render(<Input name="user" register={() => { }} placeholder="nome de usuario" />)

        const usernameField = screen.getByPlaceholderText("nome de usuario");

        expect(usernameField).toBeTruthy()
    })
})

