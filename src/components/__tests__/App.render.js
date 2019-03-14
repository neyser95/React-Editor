import React from 'react';
import renderer from 'react-test-renderer';
import Editor from '../App';
import App from '../App';

//* Tests to make sure that comopnent does not change unexpectdly.
describe('<App />', () => {
  it('will render with Toolbar and Editor', () => {
    const app = renderer.create(
      <App />
    );

    let appComponent = app.toJSON();
    expect(appComponent).toMatchSnapshot();
  })
});
