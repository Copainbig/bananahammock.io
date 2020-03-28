import React from 'react';
import { render, cleanup } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import WelcomeLogo from 'Sources/components/WelcomeLogo';

afterEach(cleanup)

describe("<WelcomeLogo />", () => {
    it("ToDo", () => {
        const { getByTestId } = render(<WelcomeLogo />);
        const appDivTestId = "app-div";
        expect(getByTestId("welcome-logo-title")).toBeInTheDocument();
        expect(getByTestId("welcome-logo-icon")).toBeInTheDocument();
    })
})