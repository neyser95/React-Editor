import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';

class App extends Component {
  // * Our App will be a class component and hanling all state
  state = {
    toolbarButtons: {
      underline: {
        icon: 'fas fa-underline',
        event: '',
        active: false
      },
      italic: {
        icon: 'fas fa-italic',
        event: '',
        active: false
      },
      bold: {
        icon: 'fas fa-bold',
        event: '',
        active: false
      },
      link: {
        icon: 'fas fa-link',
        event: '',
        active: false
      },
      cut: {
        icon: 'fas fa-cut',
        event: '',
        active: false
      },
      image: {
        icon: 'fas fa-file-image',
        event: '',
        active: false
      },
      undo: {
        icon: 'fas fa-undo',
        event: '',
        active: false
      },
      redo: {
        icon: 'fas fa-redo',
        event: '',
        active: false
      },
      color: {
        icon: 'fas fa-tint',
        event: '',
        active: false
      },
      crossText: {
        icon: 'fas fa-strikethrough',
        event: '',
        active: false
      },
      delete: {
        icon: 'fas fa-trash-alt',
        event: '',
        active: false
      },
      selectAll: {
        icon: 'fas fa-mouse-pointer',
        event: '',
        active: false
      },
      copy: {
        icon: 'fas fa-copy',
        event: '',
        active: false
      },
      alignCenter: {
        icon: 'fas fa-align-center',
        event: '',
        active: false
      },
      alignLeft: {
        icon: 'fas fa-align-left',
        event: '',
        active: false
      },
      alignRight: {
        icon: 'fas fa-align-right',
        event: '',
        active: false
      }
    }
  };

  render() {
    return (
      <div>
        <Toolbar toolbarButtons={this.state.toolbarButtons} />
      </div>
    );
  }
}

export default App;
