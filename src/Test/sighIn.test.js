// import React from 'react';
// import SignIn from '../Components/SignIn.jsx';
// import {shallow} from 'enzyme';
// // We're using our own custom render function and not RTL's render
// // our custom utils also re-export everything from RTL
// // so we can import fireEvent and screen here as well
// import { render, fireEvent, screen } from './test-utils'




// describe('Test case for testing login', () => {
//     let wrapper;
//     beforeEach(() => {
//         wrapper =  shallow(<SignIn />);
//     })

//     test('heading cheack',()=>
//     {
//     expect(wrapper.find('.title').text()).toContain("Sign in");
//     })

//     test('password check', () => {
//         wrapper.find('TextField[type="password"]').simulate('change', { target: { name: 'password', value: 'Amit@123' } });
//         expect(wrapper.state('password')).toEqual('Amit@123');
//     })

//     test('login check with right data', () => {
//         wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'amitstudent2017@gmail.com' } });
//         wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'Amit@123' } });
//         wrapper.find('button').simulate('click');
//         expect(wrapper.state('isLogined')).toBe(true);
//     })


//     test('login check with wrong data', () => {
//         wrapper.find('input[type="email"]').simulate('change', { target: { name: 'username', value: 'krishankantsinghal' } });
//         wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'krishankant1234' } });
//         wrapper.find('button').simulate('click');
//         expect(wrapper.state('isLogined')).toBe(false);
//     })
// })