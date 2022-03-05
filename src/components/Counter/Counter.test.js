import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../Counter/Counter';

describe('Tests for Timer', () => {
    it('render <h1>', () => {
      render(<Counter />);
      expect(screen.getByTestId("counter-text")).toHaveTextContent("0");
    });
    it('render <button>', () => {
      render(<Counter />);
      const btnIncrement = screen.getByTestId("btn-increment");
      fireEvent.click(btnIncrement);
 
      expect(screen.getByTestId("counter-text")).toHaveTextContent("1");
    });
    it('render <button>', () => {
      render(<Counter />);
      const btnDecrement  = screen.getByTestId("btn-decrement");
      fireEvent.click(btnDecrement);
 
      expect(screen.getByTestId("counter-text")).toHaveTextContent("-1");
    });
    it('render <button>', () => {
      render(<Counter />);
      const btnClear  = screen.getByTestId("btn-clear");
      fireEvent.click(btnClear);
 
      expect(screen.getByTestId("counter-text")).toHaveTextContent("0");
    });
});