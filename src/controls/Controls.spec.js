import React from 'react';
import { toBeDisabled } from 'jest-dom';
import {render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Controls from '../controls/Controls';

expect.extend({ toBeDisabled });

describe('Control component tests', () => {
    it('should render button to toggle closed and locked states', () => {
        const { getByText } = render(<Controls />);

        getByText(/close gate/i);
        getByText(/lock gate/i);
    });

    it('should call toggleClosed to change on button click', () => {
        const toggleClosed = jest.fn();
        const { getByText } = render(
            <Controls toggleClosed={toggleClosed} />
        );

        const button = getByText(/close gate/i);
        fireEvent.click(button);
    });

    
});

// Test away!
