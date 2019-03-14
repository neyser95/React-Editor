import React from 'react';
import classNames from './Toolbar.css';

// * Made toolBar a functional component and will only handle rendering of the toolbar.
const toolBar = (props) => {
  const {toolbarButtons} = props;

  const buttons = Object.keys(props.toolbarButtons).map((button, i) => {
    return (
      <button key={button + i} className={classNames.Toolbar__btn}>
        <i className={toolbarButtons[button].icon}></i>
      </button>
    );
  });

  return (
    <div className={classNames.Toolbar}>
      {buttons}
    </div>
  );
}

export default toolBar;