import React from "react";
import { render,fireEvent } from '@testing-library/react';
import Controls from "../controls/Controls"

// Test away!


test('renders Controls correctly', () => {
    
    render(<Controls />);
    });


    test("close gate button toggle", () => {
        const closeGate = jest.fn();
        const closed =jest.fn();
        const locked=jest.fn();

        const {getByText} = render(
            <Controls  toggleClosed={closeGate}
            closed={!closed} locked={!locked} />
        );
        const closeButton = getByText(/close gate/i)
        fireEvent.click(closeButton);
        expect(closeGate).toHaveBeenCalled();
    })



    test("lock gate button toggle", () => {
        const lockGate = jest.fn();
        const closed =jest.fn();
        const locked=jest.fn();
        
        
        const {getByText} = render(
            <Controls toggleLocked={lockGate} 
            closed={closed} locked={!locked}/>
        );



            const lockButton = getByText(/lock gate/i);
        fireEvent.click(lockButton);
        expect(lockGate).toHaveBeenCalled();

    })



    test("open gate button toggle", () => {
        const openGate = jest.fn();
        const closed =jest.fn();
        const locked=jest.fn();

        const {getByText} = render(
            <Controls  toggleClosed={openGate}
            closed={closed} locked={!locked} />
        );
        const openButton = getByText(/open gate/i)
        fireEvent.click(openButton);
        expect(openGate).toHaveBeenCalled();
    })



    test("unlock gate button toggle", () => {
        const unlockGate = jest.fn();
        const closed =jest.fn();
        const locked=jest.fn();
        
        
        const {getByText} = render(
            <Controls toggleLocked={unlockGate} 
            closed={closed} locked={locked}/>
        );



            const unlockButton = getByText(/unlock gate/i);
        fireEvent.click(unlockButton);
        expect(unlockGate).toHaveBeenCalled();

    })
    