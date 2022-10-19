import { db } from "../models/db";
import { useState } from 'react';
import { List } from './List';
import { Error } from './Error';
import Markdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";


export function Editor() {
  const [title, setTitle] = useState('');
  const [id, setId] = useState(0);
  const [action, setAction] = useState(true);
  
  const createDocument = () => {
    
    if(action){
      db.Markdowns.add({ title });
      setTitle('');  
    }else{
      db.Markdowns.update(id,{
        title,
      });
      setId(0);
      setAction(true);
      setTitle('');
    }
  }

  


    return (
      <div>
        <div className="editor">
              <textarea 
                  className="form-control ta-editor textarea" 
                  rows={7} 
                  autoComplete="off"
                  id="name"
                  value={title}
                  placeholder="Escribe un Markdown válido
                "
                onChange={e => setTitle(e.target.value)}
                
                >
              </textarea>
              <Markdown className="form-control ta-editor markdown"
              components={{
                code({ style, node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={materialLight}
                      PreTag="div"
                      language={match[1]}
                      children={String(children).replace(/\n$/, "")}
                      {...props}
                    />
                  ) : (
                    <code className={className ? className : ""} {...props}>
                      {children}
                    </code>
                  );
                }
              }}>
                {title}
              </Markdown>  
              
        </div>
        <div>
        <button className="btn btn-success" onClick={() => createDocument()}>Guardar contenido</button>
              <Error />
              <List 
                recoveryTitle={ (title) => setTitle(title) }
                recoveryId={ (id) => setId(id) }
                recoveryAction={ (action) => setAction(action) }
              />
        </div>
      </div>
    );
}