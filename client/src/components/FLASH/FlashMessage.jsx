import React from "react";
import "./FlashMessage.css"; // Add styles for flash messages

export default function FlashMessage({ message, type, onClose }) {
    if (!message) return null;

    return (
        <div className={`flash-message ${type}`} >
            <span>{message}</span>
            <button onClick={onClose} className="close-btn">X</button>
        </div>
    );
}
