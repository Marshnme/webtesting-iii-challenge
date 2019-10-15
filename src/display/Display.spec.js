import React from "react";
import { render, fireEvent, wait } from '@testing-library/react';
import Display from "../display/Display"
import Controls from "../controls/Controls"
import '@testing-library/jest-dom/extend-expect' 

// Test away!


test('Message renders correctly', () => {
    
    render(<Display />);
});


test("if displays closed if prop is true",  () => {
    const closed =jest.fn();
    const locked=jest.fn();
    
    const {queryByText, findByText, getByText} = render(
        <Display  
        closed={true} locked={false} />);
        const closedText = queryByText(/closed/i);
        expect(closedText).toBeInTheDocument();
        

})

test("if displays open if prop is false",  () => {
    const closed =jest.fn();
    const locked=jest.fn();
    
    const {queryByText, findByText, getByText} = render(
        <Display  
        closed={false} locked={false} />);
        const openText = queryByText(/open/i);
        expect(openText).toBeInTheDocument();
})







test("if displays locked if prop is true",  () => {
    const closed =jest.fn();
    const locked=jest.fn();
    
    const {queryByText, findByText, getByText} = render(
        <Display  
        closed={true} locked={true} />);
        const lockedText = queryByText(/locked/i);
        expect(lockedText).toBeInTheDocument();
        

})

test("if displays unlocked if prop is false",  () => {
    const closed =jest.fn();
    const locked=jest.fn();
    
    const {queryByText, findByText, getByText} = render(
        <Display  
        closed={true} locked={false} />);
        const unlockedText = queryByText(/unlocked/i);
        expect(unlockedText).toBeInTheDocument();
})