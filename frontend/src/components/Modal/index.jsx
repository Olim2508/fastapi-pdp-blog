import React from 'react';

const Modal = ({header, text}) => {
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h1>{header}</h1>
          <p>{text}</p>
        </div>

      </div>
    </div>
  );
};

export default Modal;
