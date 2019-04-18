import React from 'react';
import { toHaveClass } from 'jest-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './display/display';

expect.extend({ toHaveClass });

describe('Display component tests', () => {
    it('should display component', () => {
        render(<Display />);
    });

    it('should display if gate is unlocked and open by default', () => {
        const { getByText } = render(<Display />);

        getByText(/unlocked/i);
        getByText(/open/i);
    });
});
// Test away!
