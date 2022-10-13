import * as React from 'react';
import { render } from 'react-dom';
import { ResetDatabaseButton } from './components/ResetDatabaseButton';
import { YamlEditor } from './components/YamlEditor';
import { YamlList } from './components/YamlList';
import { Error } from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';



function App() {
  return (
    <div className="container">
      <div className="starter-template">
        <h1>App One con React</h1>
        <YamlEditor />
        <Error />
        <YamlList />
        <hr/>
        <h3>Resetear indexedDB</h3>
        <ResetDatabaseButton />
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
