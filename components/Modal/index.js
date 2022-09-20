import React from "react";
import { Calendar } from "react-calendar";

import Button from "../Button";
import styles from "./index.module.scss";

const Modal = ({ name, ButtonComponent = () => {}, children }) => {
  return (
    <div
      className={`modal fade`}
      tabIndex="-1"
      role="dialog"
      id={name}
      aria-labelledby={name}
      aria-hidden="true"
    >
      <div
        className={`modal-dialog modal-dialog-centered ${styles.module}`}
        role="document"
      >
        <div className="modal-content pt-1">
          <button
            type="button"
            className={`${styles.close} py-0`}
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body d-flex flex-column align-items-center justify-content-center w-100 m-0 px-2 p-0">
            {children}
          </div>
          {ButtonComponent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
