import React from 'react';
import classNames from './Editor.css';

const editor = (props) => {
  return (
    // * Will create a div whose content will be editable.
    <div
      className={classNames.Editor}
      onInput={(e) => props.handleEditorChange(e)} 
      contentEditable>
    </div>
  );
}

export default editor;