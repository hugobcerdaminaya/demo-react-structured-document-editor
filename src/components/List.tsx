import { useLiveQuery } from "dexie-react-hooks";
import {FC, Fragment} from "react";
import { db } from "../models/db";


interface Props {
  recoveryTitle: ( title: string ) => void;
  recoveryId: ( id: number ) => void;
  recoveryAction: ( action: boolean ) => void;
}

export const List:FC<Props> = ({recoveryTitle, recoveryId, recoveryAction}) => {
  
  const editDocument = (list: any) => {
    recoveryTitle(list.title);
    recoveryId(list.id);
    recoveryAction(false);
  }

  const lists = useLiveQuery(() => db.Markdowns.toArray());
  if (!lists) return null;
    return (
      <div>
        <br/>
        <h1>Mis Markdowns</h1>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Contenido</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {lists.map(list => (
                <Fragment key={list.id}>
                <tr>
                  <th scope="row">{list.id}</th>
                  <td>{list.title}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Acciones">
                      <button className="btn btn-primary" onClick={() => editDocument(list)} title="Editar documento">Editar</button>
                      <button className="btn btn-dark" onClick={() => db.Markdowns.delete(list.id)} title="Eliminar documento">Eliminar</button>
                  </div>
                  </td>
                </tr>
                </Fragment>
              ))}
            </tbody>
        </table>      
      </div>
    );
}