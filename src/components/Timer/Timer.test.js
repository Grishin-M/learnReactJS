import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from '../Timer/Timer';

describe('Tests for Timer', () => {
    it('render <h1>', () => {
      render(<Timer />);
      expect(screen.getByText(/Секундомер/i)).toBeInTheDocument();
    });
    it('render <button>', () => {
      render(<Timer />);
      const button = screen.getByText(/Перезапустить/i)
      fireEvent.click(button)
    })
});
