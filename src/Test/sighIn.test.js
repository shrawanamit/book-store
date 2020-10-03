import React from 'react';
import SignIn from '../Components/SignIn.jsx';
// import {shallow} from 'enzyme';
// // We're using our own custom render function and not RTL's render
// // our custom utils also re-export everything from RTL
// // so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './test-utils'


it('Renders the connected app with signin', () => {
    render(<SignIn />)
    expect(screen.getByPlaceholderText('@gmail.com')).toBeInTheDocument();
  })
  it('test label in input', () => {
    render(<SignIn />);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  })

  it('text sign in button', () => {
    render(<SignIn />);
    expect(screen.getByText('Create account')).toBeInTheDocument();
  })
  it('text sign in button', () => {
    render(<SignIn />);
    expect(screen.getByText('SignIn')).toBeInTheDocument();
  })