import * as React from "react";

export function Error() {
    return (
      <div className="alert alert-danger" role="alert" style={{'display': 'none'}}>
        Ha ocurrido un error al validar el texto ingresado.
      </div>
    );
}