import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import Editor from './Editor/Editor';
import parseMarkdown from '../utils/parseMarkdown';

class App extends Component {
  // * Our App will be a class component and hanling all state
  state = {
    // * toolbarButtons will hold the class needed for button icon and also the function the button will invoke when clicked on.
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
      },
      bold: {
        icon: 'fas fa-bold',
        event: function () {
          document.execCommand('bold', false, '');
        }
      },
      link: {
        icon: 'fas fa-link',
        event: function () {
          const url = prompt('Enter the URL');
          document.execCommand('createLink', false, url);
        }
      },
      cut: {
        icon: 'fas fa-cut',
        event: function () {
          document.execCommand('cut', false, '');
        }
      },
      undo: {
        icon: 'fas fa-undo',
        event: function () {
          document.execCommand('undo', false, '');
        }
      },
      redo: {
        icon: 'fas fa-redo',
        event: function () {
          document.execCommand('redo', false, '');
        }
      },
      color: {
        icon: 'fas fa-tint',
        event: function () {
          const color = prompt('Enter your color in hex ex:#f1f233');
          document.execCommand('foreColor', false, color);
        }
      },
      crossText: {
        icon: 'fas fa-strikethrough',
        event: function () {
          document.execCommand('strikeThrough', false, '');
        }
      },
      delete: {
        icon: 'fas fa-trash-alt',
        event: function () {
          document.execCommand('delete', false, '');
        }
      },
      selectAll: {
        icon: 'fas fa-mouse-pointer',
        event: function () {
          document.execCommand('selectAll', false, '');
        }
      },
      copy: {
        icon: 'fas fa-copy',
        event: function () {
          document.execCommand('copy', false, '');
        }
      },
      alignCenter: {
        icon: 'fas fa-align-center',
        event: function () {
          document.execCommand('justifyCenter', false, '');
        }
      },
      alignLeft: {
        icon: 'fas fa-align-left',
        event: function () {
          document.execCommand('justifyLeft', false, '');
        }
      },
      alignRight: {
        icon: 'fas fa-align-right',
        event: function () {
          document.execCommand('justifyRight', false, '');
        }
      },
      markdown: {
        icon: 'fab fa-markdown',
      },
      export: {
        icon: 'fas fa-file-export',
        event: ''
      }
    },
    // * This will hold the all text within the editorBody
    editorBody: '',
    parsedMarkdown: '',
    markdownEnabled: false
  };

  // * Will handle all the changes made inside the editor and save it to state for later use.
  handleEditorChange = e => {
    const editorBody = e.target.innerHTML;
    if (this.state.markdownEnabled) {
      const parsedMarkdown = parseMarkdown(editorBody);
      this.setState({ editorBody, parsedMarkdown });
    } else {
      this.setState({ editorBody });
    }
  };

  // * Handles enabling and disabling markdown support
  handleMarkdownEnabled = () => {
    this.setState(prevState => {
      return { markdownEnabled: !prevState.markdownEnabled };
    });
  };

  render() {
    return (
      <div>
        <Toolbar
          toolbarButtons={this.state.toolbarButtons}
          handleMarkdownEnabled={this.handleMarkdownEnabled} />
        <p>
          Please press <i class="fab fa-markdown"></i> to enable markdown.
          Press cmd+b for <b>Bold</b>.
          Press cmd+i for <i>Italic</i>.
          Press control+u for <u>Underline</u>.
          Press cmd+a for Select All.
        </p>
        <Editor
          handleEditorChange={this.handleEditorChange}
          markdownEnabled={this.state.markdownEnabled} 
          parsedMarkdown={this.state.parsedMarkdown}/>
      </div>
    );
  }
}

export default App;
