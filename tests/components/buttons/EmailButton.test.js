import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import EmailButton from 'Sources/components/buttons/EmailButton';

afterEach(cleanup)

describe("<EmailButton />", () => {
    it("Renders properly", () => {
        const { getByTestId } = render(<EmailButton />);
        expect(getByTestId("emailbutton-div")).toBeInTheDocument();
        expect(getByTestId("envelope-icon")).toBeInTheDocument();
    });

    it("Icon changes when mouse over", () => {
        const { getByTestId } = render(<EmailButton />);
        const image = getByTestId("envelope-icon");
        expect(image.src).toContain("envelope_closed");
        fireEvent.mouseOver(image);
        expect(image.src).toContain("envelope_open");
        fireEvent.mouseOut(image);
        expect(image.src).toContain("envelope_closed");
    });

})