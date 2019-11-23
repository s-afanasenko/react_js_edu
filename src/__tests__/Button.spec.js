import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('<Button />', () => {
	it('should render with default props and match snapshot', () => {
		const { container } = render(
			<Button>Click Me!</Button>
		);

		expect(container).toMatchSnapshot(); 
	});

	it('should execute callback on click', () => {
		const callback = jest.fn();
		const { getByText } = render(
			<Button clickHundler={callback}>Click Me!</Button>
		);

		fireEvent.click(getByText('Click Me!'));

		expect(callback).toBeCalledTimes(1);
	});

	it('should be disabled with disabled="true"', () => {
		const { getByText } = render(
			<Button disabled={true}>Click Me!</Button>
		);

		expect(getByText('Click Me!')).toBeDisabled();
	});
});
