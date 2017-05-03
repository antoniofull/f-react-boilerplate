import HelloWorld from '../src/components/HelloWorld';
import React from 'react';
import { mount, shallow } from 'enzyme';

test('HelloWorld component will render the text Hello World!', () => {
  const hello = {text: 'Hello World!'};
  const wrapper = shallow(
    <HelloWorld text={hello.text} />
  );

  const title = wrapper.find('h1');
  expect(title.text()).toBe('Hello World!');
});
