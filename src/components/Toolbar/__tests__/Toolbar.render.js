import React from 'react';
import renderer from 'react-test-renderer';
import Toolbar from '../Toolbar';

const state = {
  toolbarButtons: {
    underline: {
      icon: 'fas fa-underline',
      event: function () {
        document.execCommand('underline', false, '');
      }
    },
    italic: {
      icon: 'fas fa-italic',
      event: function () {
        document.execCommand('italic', false, '');
      }
    }
  }
};

//* Tests to make sure that comopnent does not change unexpectdly.
test('Toolbar will render will all the underline and italic buttons passed as props', () => {
  const toolbar = renderer.create(
    <Toolbar toolbarButtons={state.toolbarButtons}/>
  );

  let toolComponent = toolbar.toJSON();
  expect(toolComponent).toMatchSnapshot();
});