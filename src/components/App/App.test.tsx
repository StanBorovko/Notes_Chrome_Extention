import React from 'react';
import { render, screen } from '@testing-library/react';
import * as chrome from "sinon-chrome";
import App from './App';

describe("App testing", () => {
  beforeAll(() => {
    // @ts-ignore
    global.chrome = chrome
  })

  test('render app', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello to Notes chrome extension/i);
    expect(linkElement).toBeInTheDocument();
  });
})
