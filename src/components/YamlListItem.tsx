import * as React from "react";
import { db } from "../models/db";
import { TodoList } from "../models/TodoList";


interface Props {
  todoList: TodoList;
}
export function YamlListItem({ todoList }: Props) {

 
    return (
      <tr>
        <th scope="row">{todoList.id}</th>
        <td>{todoList.title}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Acciones">
            <button className="btn btn-primary">Editar</button>
            <button className="btn btn-dark" onClick={() => db.todoLists.delete(todoList.id)} title="Eliminar documento">Eliminar</button>
        </div>
        </td>
      </tr>
    );
}