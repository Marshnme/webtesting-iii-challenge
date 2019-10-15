import React from "react";
import { render, fireEvent, wait } from '@testing-library/react';
import Display from "../display/Display"
import Controls from "../controls/Controls"

// Test away!


test('Message renders correctly', () => {
    
    render(<Display />);
});


test("if displays closed if prop is true",  () => {
    const closed =jest.fn();
    const locked=jest.fn();
    
    const {queryByText, findByText, getByText} = render(
        <Display  
        closed={false} locked={false} />);
        const closedText = queryByText(/closed/i);
        expect(closedText).toBe();
        

})

// test("if displays open if prop is false",  () => {
//     const closed =jest.fn();
//     const locked=jest.fn();
    
//     const {queryByText, findByText, getByText} = render(
//         <Display  
//         closed={false}  />);
//         const closedText = queryByText(/closed/i);
//         expect(findByText(/closed/i));

// })