import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { resetDatabase } from "../models/db";

export function ResetIndexedDbBtn() {
  return (
    <Fragment>
    <h3>Resetear listado</h3>
    <button
      className="btn btn-md btn-warning btn-reset"
      onClick={() => {
        resetDatabase();
      }}
    >
      <FontAwesomeIcon icon={faDatabase} /> Resetear
    </button>
    </Fragment>
  );
}
