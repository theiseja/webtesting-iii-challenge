import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Dashboard from '../dashboard/Dashboard';

describe('Dashboard component tests', () => {
    it('should render controls and display', () => {
        const { getByText } = render(<Dashboard />);

        getByText(/unlocked/i);
        getByText(/open/i);
        getByText(/lock gate/i);
        getByText(/close gate/i);
    });
});



// Test away
