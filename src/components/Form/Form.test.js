import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import From from '../Form/Form';

describe('Tests labels', () => {
    it('has <label>', () => {
      render(<From />);
      expect(screen.getByLabelText(/Имя/i)).toBeInTheDocument();
    });
    it('render <button>', () => {
      render(<From />);
      expect(screen.getByLabelText(/Фамилия/i)).toBeInTheDocument();
    });
    it('render <button>', () => {
      render(<From />);
      expect(screen.getByLabelText(/Возраст:/i)).toBeInTheDocument();
    });
});
