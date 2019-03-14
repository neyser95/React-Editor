import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import Editor from './Editor/Editor';

class App extends Component {
  // * Our App will be a class component and hanling all state
  state = {
    toolbarButtons: {
      underline: {
        icon: 'fas fa-underline',
        event: ''
      },
      italic: {
        icon: 'fas fa-italic',
        event: ''
      },
      bold: {
        icon: 'fas fa-bold',
        event: ''
      },
      link: {
        icon: 'fas fa-link',
        event: ''
      },
      cut: {
        icon: 'fas fa-cut',
        event: ''
      },
      image: {
        icon: 'fas fa-file-image',
        event: ''
      },
      undo: {
        icon: 'fas fa-undo',
        event: ''
      },
      redo: {
        icon: 'fas fa-redo',
        event: ''
      },
      color: {
        icon: 'fas fa-tint',
        event: ''
      },
      crossText: {
        icon: 'fas fa-strikethrough',
        event: ''
      },
      delete: {
        icon: 'fas fa-trash-alt',
        event: ''
      },
      selectAll: {
        icon: 'fas fa-mouse-pointer',
        event: ''
      },
      copy: {
        icon: 'fas fa-copy',
        event: ''
      },
      alignCenter: {
        icon: 'fas fa-align-center',
        event: ''
      },
      alignLeft: {
        icon: 'fas fa-align-left',
        event: ''
      },
      alignRight: {
        icon: 'fas fa-align-right',
        event: ''
      },
      export: {
        icon: 'fas fa-file-export',
        event: ''
      }
    },
    editorBody: ''
  };

  // * Will handle all the changes made inside the editor
  handleEditorChange = (e) => {
    const editorBody = e.target.innerHTML;
    this.setState({editorBody}); 
  }

  render() {
    return (
      <div>
        <Toolbar toolbarButtons={this.state.toolbarButtons} />
        <Editor handleEditorChange={this.handleEditorChange} />
      </div>
    );
  }
}

export default App;
