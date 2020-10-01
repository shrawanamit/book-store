import React from 'react';
import {shallow} from 'enzyme';
import Registration from '../Components/Registration'

describe('registration tesing',() =>{
  let wrapper ;
    beforeEach(()=>{
        wrapper = shallow(<Registration />);
    })

    test('Register button check',()=>
    {
    expect(wrapper.find('.button2').text()).toContain("Register");
    })


    test('go to signin button test',()=>
    {
    expect(wrapper.find('.button1').text()).toBe("sign in Insted");
    })


    test('first name check', () => {
        wrapper.find({name:"firstName"}).simulate('change', {target: {name: 'firstName', value: 'Amit'}});
        expect(wrapper.state('firstName')).toEqual('Amit');
    })

    test('last name check', () => {
        wrapper.find({name:"lastName"}).simulate('change', {target: {name: 'lastName', value: 'Kumar'}});
        expect(wrapper.state('lastName')).toEqual('Kumar');
    })

    test('email check', () => {
        wrapper.find({name:"email"}).simulate('change', {target: {name: 'email', value: 'amitstudent2017@gmail.com'}});
        expect(wrapper.state('email')).toEqual('amitstudent2017@gmail.com');
    })
    test('city check', () => {
        wrapper.find({name:'city'}).simulate('change', {target: {name: 'city', value: 'patna'}});
        expect(wrapper.state('patna')).toEqual('patna');
    })
    test('phoneNumber check', () => {
        wrapper.find({name:"phoneNumber"}).simulate('change', {target: {name: 'phoneNumber', value: 9122460175}});
        expect(wrapper.state(9122460175)).toEqual(9122460175);
    })
    test('password check', () => {
        wrapper.find({name:"password"}).simulate('change', {target: {name: 'password', value: 'Amit@123'}});
        expect(wrapper.state('password')).toEqual('Amit@123');
    })
    test('confirm Password check', () => {
        wrapper.find({name:"confirmPassword"}).simulate('change', {target: {name: 'confirmPassword', value: 'Amit@123'}});
        expect(wrapper.state('confirmPassword')).toEqual('Amit@123');
    })
    test('address check', () => {
        wrapper.find({name:"address"}).simulate('change', {target: {name: 'address', value: 'patna'}});
        expect(wrapper.state('patna')).toEqual('patna');
    })
})