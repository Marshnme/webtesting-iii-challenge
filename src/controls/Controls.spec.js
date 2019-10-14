import React from "react";
import { render,fireEvent } from '@testing-library/react';
import Controls from "../controls/Controls"

// Test away!


test('renders Controls correctly', () => {
    
    render(<Controls />);
    });



    test("buttons provided for toggle", () => {
        const lockGate = jest.fn();
        const closeGate = jest.fn();
        const locked=jest.fn();
        const closed =jest.fn();
        const {getByText} = render(
            <Controls toggleLocked={lockGate} toggleClosed={closeGate}
            closed={closed} locked={locked} disabled={!closed}/>
        );

        const closeButton = getByText(/close gate/i)
        fireEvent.click(closeButton);
        expect(closeGate).toHaveBeenCalled();


            const lockButton = getByText(/lock gate/i);
        fireEvent.click(lockButton);
        expect(lockGate).toHaveBeenCalled();

    })