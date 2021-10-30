import React from 'react';
import Counter from '../Counter';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Counter app', () => {
    test('should header text match with given text', () => {
        render(<Counter />);
        const heading = screen.getByText('Counter App 1');

        expect(heading).toBeInTheDocument();
    })

    test('should subtitle test text match with given text', () => {
        render(<Counter />);
        expect(screen.getByTestId('subtitle')).toBeInTheDocument();
        expect(screen.getByTestId('subtitle').textContent).toBe('Counter Subtitle');
    })
    // TDD
    test('should counter initially start with text of 0', () => {
        render(<Counter />);
        const counterEl = screen.getByTestId('counter');
        expect(counterEl.textContent).toBe('0');
    })

    test('should input contains initial value of 1', () => {
        const { getByTestId } = render(<Counter />);
        const inputEl = getByTestId('input');
        expect(inputEl.value).toBe('1');
    })

    test('should add button renders with +', () => {
        const { getByTestId } = render(<Counter />);
        const addBtn = getByTestId('add-btn');
        expect(addBtn.textContent).toBe('+');
    })

    test('should subtract button renders with -', () => {
        const { getByTestId } = render(<Counter />);
        const subtractBtn = getByTestId('subtract-btn');
        expect(subtractBtn.textContent).toBe('-');
    })
})
