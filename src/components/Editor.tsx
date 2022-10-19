import { db } from "../models/db";
import { useState } from 'react';
import { List } from './List';
import { Error } from './Error';

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
        <label className="form-label">Editor de contenido</label><br/>
            <textarea 
                className="form-control ta-editor" 
                rows={7} 
                autoComplete="off"
                id="name"
                value={title}
                placeholder="Escribe un Markdown válido
              "
              onChange={ev => setTitle(ev.target.value)}
              onKeyUp={ev => {
                if (ev.key === 'Enter') {

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
              }}
              >
            </textarea>
            <button className="btn btn-success" onClick={() => createDocument()}>Guardar contenido</button>
            <Error />
            <List 
              recoveryTitle={ (title) => setTitle(title) }
              recoveryId={ (id) => setId(id) }
              recoveryAction={ (action) => setAction(action) }
            />
      </div>
    );
}