import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { GifApp } from '../GifApp';

describe('test <GifApp />', () => {
  test('should mount <GifApp />', () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a list of categories', () => {
    const categories = ['One Punch', 'Haikyuu'];

    const wrapper = shallow(<GifApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
