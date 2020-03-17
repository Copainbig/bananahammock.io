import React from 'react';
import { render, cleanup } from '@testing-library/react'
import App from '../../src/components/App';

afterEach(cleanup)

describe("<WelcomeLogo />", () => {
    it("ToDo", () => {
        const { getByTestId } = render(<App />);
        const appDivTestId = "app-div";
        expect(true).toBe(true);
    })
})