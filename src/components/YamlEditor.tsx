import * as React from "react";

export function YamlEditor() {
    return (
      <div>
        <label className="form-label">Editor de contenido</label><br/>
            <textarea 
                className="form-control ta-editor" 
                rows={7} 
                autoComplete="off"
                id="name"
                placeholder="Escribe un Schema válido, con la siguiente estructura:
                name: string
                email: string
                password: string
              ">
            </textarea>
            <button type="submit" 
                    id="btn-add-content" 
                    className="btn btn-md btn-success btn-submit">
                        Agregar contenido a la tabla
            </button>  
      </div>
    );
}