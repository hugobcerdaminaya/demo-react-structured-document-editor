import * as React from "react";

export function YamlListItem() {
    return (
      <div className="btn-group" role="group" aria-label="Acciones">
          <button className="btn btn-primary">Editar</button>
          <button className="btn btn-dark">Eliminar</button>
      </div>
    );
}