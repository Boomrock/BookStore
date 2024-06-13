import React from 'react';
import "../../Assets/Styles/Style.module.scss"

const Modal = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const handleBackgroundClick = (e) => {
        if (e.target.className === 'modal display-block') {
            handleClose();
        }
    };

    return (
        <div className={showHideClassName} onClick={handleBackgroundClick}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Закрыть
                </button>
            </section>
        </div>
    );
};

export default Modal;