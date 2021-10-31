import React from 'react';
import Counter from '../Counter';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Counter app', () => {
    let getByTestId;
    beforeEach(() => {
        const component = render(<Counter />);
        getByTestId = component.getByTestId;
    })

    test('should header text match with given text', () => {
        const heading = screen.getByText('Counter App 1');
        expect(heading).toBeInTheDocument();
    })

    test('should subtitle test text match with given text', () => {
        expect(screen.getByTestId('subtitle')).toBeInTheDocument();
        expect(screen.getByTestId('subtitle').textContent).toBe('Counter Subtitle');
    })
    // TDD
    test('should counter initially start with text of 0', () => {
        const counterEl = screen.getByTestId('counter');
        expect(counterEl.textContent).toBe('0');
    })

    test('should input contains initial value of 1', () => {
        const inputEl = getByTestId('input');
        expect(inputEl.value).toBe('1');
    })

    test('should add button renders with +', () => {
        const addBtn = getByTestId('add-btn');
        expect(addBtn.textContent).toBe('+');
    })

    test('should subtract button renders with -', () => {
        const subtractBtn = getByTestId('subtract-btn');
        expect(subtractBtn.textContent).toBe('-');
    });

    test('change value of input works correctly', () => {
        const inputEl = getByTestId('input');
        fireEvent.change(inputEl, { target: { value: '5' } });
        expect(inputEl.value).toBe('5');
    });

    test('click on plus btn add 1 to counter', () => {
        const btnEl = getByTestId('add-btn');
        const counterEl = getByTestId('counter');
        fireEvent.click(btnEl);
        expect(counterEl.textContent).toBe('1');
    });

    test('click on plus btn subtracts 1 to counter', () => {
        const btnEl = getByTestId('subtract-btn');
        const counterEl = getByTestId('counter');
        expect(counterEl.textContent).toBe('0');
        fireEvent.click(btnEl);
        expect(counterEl.textContent).toBe('-1');
    });

    test('changing input value then clicking on add btn works correctly', () => {
        const btnEl = getByTestId('add-btn');
        const counterEl = getByTestId('counter');
        const inputEl = getByTestId('input');
        fireEvent.change(inputEl, { target: { value: '5' } });
        fireEvent.click(btnEl);
        expect(counterEl.textContent).toBe('5');
    });

    test('counter contains correct className', () => {
        const addBtnEl = getByTestId('add-btn');
        const subtractBtnEl = getByTestId('subtract-btn');
        const counterEl = getByTestId('counter');
        const inputEl = getByTestId('input');

        expect(counterEl.className).toBe('');
        fireEvent.change(inputEl, { target: { value: '50' } });
        fireEvent.click(addBtnEl);
        fireEvent.click(addBtnEl);
        expect(counterEl.className).toBe('green');
        fireEvent.click(subtractBtnEl);
        fireEvent.click(subtractBtnEl);
        fireEvent.click(subtractBtnEl);
        expect(counterEl.className).toBe('red');
    });
})
