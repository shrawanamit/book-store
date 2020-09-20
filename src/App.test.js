import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
configure({ adapter: new Adapter() });
import SignIn from '../src/Components/SignIn';


describe('Test case for testing login',() =>{
  // let wrapper;
  test('email check',()=>
  {
  const wrapper = shallow(<SignIn/>);
  wrapper.find('TextField[type="email"]').simulate('change', {target: {name: 'email', value: 'amitstudent2017@gmail.com'}});
  expect(wrapper.state('email')).toEqual('amitstudent2017@gmail.com');
  })

  it('password check',()=>{
    const wrapper = shallow(<SignIn/>);
    wrapper.find('TextField[type="password"]').simulate('change', {target: {name: 'password', value: 'Amit@123'}});
    expect(wrapper.state('password')).toEqual('Amit@123');
    })

    it('login check with right data',()=>{
     const wrapper = shallow(<SignIn/>);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'amitstudent2017@gmail.com'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'Amit@123'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toBe(true);
    })


    it('login check with wrong data',()=>{
    const wrapper = shallow(<SignIn/>);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'username', value: 'krishankantsinghal'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant1234'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toBe(false);
    })
})