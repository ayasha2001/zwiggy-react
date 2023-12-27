import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backrop = (props) => {
  return <div className="backdrop" />;
};
const ModalOveray = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOveray>{props.children}</ModalOveray>,
        portalElement
      )}
    </>
  );
};

export default Modal;
