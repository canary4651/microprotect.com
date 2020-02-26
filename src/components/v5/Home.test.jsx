import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';

jest.mock('../../assets');
jest.mock('../../assets/v5');

describe('Home', () => {
  it('renders slogan', () => {
    const t = {
      v5_slogan1: 'Slogan',
    };

    render(
      <Router>
        <Home t={t} />
      </Router>,
    );

    expect(screen.getByText(/Slogan/))
      .toBeInTheDocument();
  });
});
