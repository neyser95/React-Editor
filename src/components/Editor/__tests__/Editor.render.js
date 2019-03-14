import React from 'react';
import renderer from 'react-test-renderer';
import Editor from '../Editor';

describe('<Editor/>', () => {
  //* Tests to make sure that comopnent does not change unexpectdly.
  it('will render with regular editor', () => {
    const editor = renderer.create(
      <Editor
        markdownEnabled={false}
      />
    );

    let editorComponent = editor.toJSON();
    expect(editorComponent).toMatchSnapshot();
  });

  it('will render with markup editor and editor display', () => {
    const editor = renderer.create(
      <Editor
        markdownEnabled={true}
        parsedMarkdown={'<h1>Hello</h1>'}
      />
    );

    let editorComponent = editor.toJSON();
    expect(editorComponent).toMatchSnapshot();
  });
});
