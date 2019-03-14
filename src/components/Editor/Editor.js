import React, { Fragment } from 'react';
import classNames from './Editor.css';

const editor = (props) => {
  return (
    // * Will create a div whose content will be editable.
    <div className={classNames.EditorLayout}>
      {!props.markdownEnabled ?
        <div
          className={classNames.Editor}
          onInput={(e) => props.handleEditorChange(e)}
          contentEditable>
        </div> :
        <Fragment>
          <div
            className={classNames.MarkupEditor}
            onInput={(e) => props.handleEditorChange(e)}
            contentEditable>
          </div>
          <div
            className={classNames.Editor__Split}
            onInput={(e) => props.handleEditorChange(e)}
            dangerouslySetInnerHTML={{__html: '' + props.parsedMarkdown}}>
          </div>
        </Fragment>
      }
    </div>
  );
}

export default editor;