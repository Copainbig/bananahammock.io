import React from 'react';
import { render, cleanup } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import App from 'Sources/components/App';

afterEach(cleanup)

describe("<App />", () => {
    it("Should contains the main App div", () => {
        const { getByTestId } = render(<App />);
        const appDivTestId = "app-div";
        expect(getByTestId(appDivTestId)).toBeInTheDocument();
    })
})