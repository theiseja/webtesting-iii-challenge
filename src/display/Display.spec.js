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

    it('should display Closed if closed props is true', () => {
        const { getByText } = render(<Display closed={true} />);

        getByText(/closed/i);
    });

    it('should display Locked if the locked prop is true', () => {
        const { getByText } = render(<Display locked={true} />);

        getByText(/locked/i);
    });
});
// Test away!
