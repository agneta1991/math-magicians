import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './navigationbar';

test('Test NavigationBar', () => {
  const tree = render(
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
