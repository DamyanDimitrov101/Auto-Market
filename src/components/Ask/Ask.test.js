import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor, getByRole, getByLabelText } from "@testing-library/react";

import Ask from "./Ask";


describe('handleCheckboxChange function', function () {
    it('Should set state - checked', async () => {
        render(
            <BrowserRouter>
                <Ask />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByRole('checkbox'))

        await waitFor(() => screen.getByRole('checkbox'))

        expect(document.getElementsByName('checkBox')[0].checked).toBe(true);
    });
});

describe('onAskFormSubmitHandler function', function () {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Ask />
            </BrowserRouter>
        );

    });

    it('Should focus on email if such is not provided', async () => {

        
        const onAskFormSubmitHandler = jest.fn();
        const utils = render(<Ask onAskFormSubmitHandler={onAskFormSubmitHandler} />);
        const inputValue = "Test";
        
        fireEvent.change(getByLabelText("Your E-Mail*:"), { target: { value: inputValue } });
        await waitFor(() => getByRole('input', {name: "email"}), { target: { value: inputValue } });
        fireEvent.change(getByRole('input', {name: /name/i}), { target: { value: inputValue } });
        fireEvent.change(getByRole('input', {name: /text/i}), { target: { value: inputValue } });
        
        fireEvent.click(screen.getByRole('checkbox'))
        await waitFor(() => screen.getByRole('checkbox'));

        fireEvent.click(screen.getByTestId('submitAskForm'));        
        await waitFor(() => screen.getByTestId('submitAskForm'));

        expect(onAskFormSubmitHandler).toBeCalled();
    });
});