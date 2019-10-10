import React from 'react';
import Order from './Order.js';
import {sortTypes} from '../utils/sortOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders} from "../mock/fakeOrders";

configure({ adapter: new Adapter() });

describe('Order component', () => {
  it('render', () => {
    const order = fakeOrders[0];
    const index = 0;
    const wrapper = shallow(<Order key={index} order={order}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders write items number', function () {
    const order = fakeOrders[0];
    const index = 0;
    const wrapper = shallow(<Order key={index} order={order}/>);

    expect(wrapper.find('.Order-item')).toHaveLength(order.items.length);
  });
});