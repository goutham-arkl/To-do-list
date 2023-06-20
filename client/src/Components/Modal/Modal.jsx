import './Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null; // If the modal is not open, don't render anything
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
