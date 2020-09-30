import React from 'react';
import { mount } from 'enzyme';
import SignIn from '../Components/SignIn.jsx';


describe('Test case for testing login', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SignIn />);
    })

    test('email check', () => {
        wrapper.find('TextField[type="email"]').simulate('change', { target: { name: 'email', value: 'amitstudent2017@gmail.com' } });
        expect(wrapper.state('email')).toEqual('amitstudent2017@gmail.com');
    })

    test('password check', () => {
        wrapper.find('TextField[type="password"]').simulate('change', { target: { name: 'password', value: 'Amit@123' } });
        expect(wrapper.state('password')).toEqual('Amit@123');
    })

    test('login check with right data', () => {
        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'amitstudent2017@gmail.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'Amit@123' } });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(true);
    })


    test('login check with wrong data', () => {
        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'username', value: 'krishankantsinghal' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'krishankant1234' } });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(false);
    })
})