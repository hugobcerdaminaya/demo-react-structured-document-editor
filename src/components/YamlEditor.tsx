import { db } from "../models/db";
import { useState } from 'react';
import Ajv, {JSONSchemaType} from "ajv";
import { YamlList } from '../components/YamlList';
import { Error } from '../components/Error';

export function YamlEditor() {
  const [title, setTitle] = useState('');
  const [id, setId] = useState(0);
  const [action, setAction] = useState(true);
  const ajv = new Ajv();
  //AJV
  interface MyData {
    name: string
    email: string
    password: string
  }
  const schema: JSONSchemaType<MyData> = {
    type: 'object',
    properties:{
      name: {type:'string'},
      email: {type:'string'},
      password: {type:'string'}
    },
    required: ["name","email",'password'],
    additionalProperties: false
  }

  const createDocument = () => {
    if(action){
      db.todoLists.add({ title });
      setTitle('');  
    }else{
      db.todoLists.update(id,{
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
                placeholder="Escribe un Schema válido, con la siguiente estructura:
                name: string
                email: string
                password: string
              "
              onChange={ev => setTitle(ev.target.value)}
              onKeyUp={ev => {
                if (ev.key === 'Enter') {
                  if(action){
                    db.todoLists.add({ title });
                    setTitle('');  
                  }else{
                    db.todoLists.update(id,{
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
            <button className="btn btn-success" onClick={() => createDocument()}>Guardar schema</button>
            <Error />
            <YamlList 
              recoveryTitle={ (title) => setTitle(title) }
              recoveryId={ (id) => setId(id) }
              recoveryAction={ (action) => setAction(action) }
            />
      </div>
    );
}