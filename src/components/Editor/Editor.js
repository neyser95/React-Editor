import React from 'react';
import classNames from './Editor.css';

const editor = (props) => {
  return (
    <div
      className={classNames.Editor}
      onInput={(e) => props.handleEditorChange(e)} 
      contentEditable>
    </div>
  );
}

export default editor;