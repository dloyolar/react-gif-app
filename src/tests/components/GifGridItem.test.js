import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('test <GifGridItem />', () => {
  const title = 'Titulo';
  const url = 'https://localhost/image.png';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test('should mount <GifGridItem />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a parragraph with title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('should get a img = url and alt props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should have animation class', () => {
    const div = wrapper.find('div');
    expect(div.prop('className')).toContain('animate__fadeInDow');
  });
});
