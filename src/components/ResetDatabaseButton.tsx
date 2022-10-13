import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { resetDatabase } from "../models/db";

export function ResetDatabaseButton() {
  return (
    <button
      className="btn btn-md btn-warning btn-reset"
      onClick={() => {
        resetDatabase();
      }}
    >
      <FontAwesomeIcon icon={faDatabase} /> Resetear base de datos
    </button>
  );
}
