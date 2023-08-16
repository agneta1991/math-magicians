import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ButtonDiv from './buttonsdiv';

test('Test NavigationBar', () => {
  // const onButtonClick = jest.fn();
  const tree = render(
    <BrowserRouter>
      <ButtonDiv onButtonClick={jest.fn()} />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
