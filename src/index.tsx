import * as React from 'react';
import { render } from 'react-dom';
import { ResetIndexedDbBtn } from './components/ResetIndexedDbBtn';
import { Editor } from './components/Editor';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';



function App() {
  return (
    <div className="container">
      <div className="starter-template">
        <h1>App One con React</h1>
        <Editor />
        <hr/>
        <ResetIndexedDbBtn />
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
