import React from "react";
import { render } from '@testing-library/react' 
;
import Display from "../display/Display"
import Controls from "../controls/Controls"
import '@testing-library/jest-dom/extend-expect' 


// Test away

test('Message renders correctly', () => {
    
    render(<Display />);
});


    test('Message renders correctly', () => {
    
    render(<Controls />);
    });




    