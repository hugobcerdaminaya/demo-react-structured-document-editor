import * as React from "react";
import { db } from "../models/db";
import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

export function YamlEditor() {
  const [title, setTitle] = useState('');
  
    return (
      <div>
        <label className="form-label">Editor de contenido (al finalizar de ingresar el contenido presiona la tecla Enter)</label><br/>
            <textarea 
                className="form-control ta-editor" 
                rows={7} 
                autoComplete="off"
                id="name"
                placeholder="Escribe un Schema válido, con la siguiente estructura:
                name: string
                email: string
                password: string
              "
              onChange={ev => setTitle(ev.target.value)}
              onKeyUp={ev => {
                if (ev.key === 'Enter') {
                  db.todoLists.add({ title });
                  setTitle('');
                }
              }}
              >
                
            </textarea>
            
      </div>
    );
}