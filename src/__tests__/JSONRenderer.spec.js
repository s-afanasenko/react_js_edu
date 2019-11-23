import React from 'react';
import { render } from '@testing-library/react';
import JSONRenderer from '../JSONRenderer';

const objProp = {
	key01: 'value01',
	key02: {
		nestedKey01: 123
	},
	key03: [1, 'string', { key: true }]
}

const stringProp = JSON.stringify(objProp);

describe('<JSONRenderer />', () => {
	it('should match snapshot with string prop', () => {
		const { container } = render(
			<JSONRenderer JSONString={stringProp} />
		);

		expect(container).toMatchSnapshot(); 
	});

	it('should match snapshot with object prop', () => {
		const { container } = render(
			<JSONRenderer JSONString={objProp} />
		);

		expect(container).toMatchSnapshot(); 
	});
});
