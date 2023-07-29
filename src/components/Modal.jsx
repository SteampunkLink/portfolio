const Modal = ({ modalClass, dismissMenu }) => {
  return (
    <div className={modalClass}>
      <div className="modal-content">
        {/* <h2>{project.title}</h2>
        <p>{project.moreInfo}</p> */}
        <button onClick={dismissMenu}>Close</button>
      </div>
    </div>
  );
};

export default Modal;