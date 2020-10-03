import React from 'react';
import AdminDashBord from '../Components/AdminDashBord';
// import {shallow} from 'enzyme';
// // We're using our own custom render function and not RTL's render
// // our custom utils also re-export everything from RTL
// // so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './test-utils'


it('Renders the connected app with signin', () => {
    render(<AdminDashBord />)
    expect(screen.getByPlaceholderText('Search book by title')).toBeInTheDocument();
  })
