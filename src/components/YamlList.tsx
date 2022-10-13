import { useLiveQuery } from "dexie-react-hooks";
import * as React from "react";
import { db } from "../models/db";
import { YamlListItem } from "./YamlListItem";



export function YamlList() {
  const lists = useLiveQuery(() => db.todoLists.toArray());

  if (!lists) return null;

    return (
      <div>
        <br/>
        <h1>Mis documentos</h1>
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
                  <tr>
                    <th scope="row">{list.id}</th>
                    <td>{list.title}</td>
                    <td><YamlListItem /></td>
                  </tr>
              ))}
            </tbody>
        </table>      
      </div>
    );
}