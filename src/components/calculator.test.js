import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from './calculator';

test('Test NavigationBar', () => {
  const tree = render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
