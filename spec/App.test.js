import React from 'react';
import {
  shallow,
  mount
} from 'enzyme';
// import toJson from 'enzyme-to-json';
import PhotoGallery from '../client/src/components/PhotoGallery.jsx';

describe('PhotoGallery', () => {
  it('should exist', () => {
    const tree = shallow( < PhotoGallery / > );
    // expect(toJson(tree)).toMatchSnapshot();
  });
});

test('Fake Test', () => {
  expect(true).toBeTruthy();
});