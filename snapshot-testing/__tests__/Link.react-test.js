import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

('use strict');

test('It renderes correctly', () => {
  const tree = renderer
    .create(<Link page="satyambnsal.com">Author site</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders as an anchor when no page is set', () => {
  const tree = renderer.create(<Link>Author site</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('change the class when hovered', () => {
  const component = renderer.create(
    <Link page="satyambnsal.com">Author site</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
