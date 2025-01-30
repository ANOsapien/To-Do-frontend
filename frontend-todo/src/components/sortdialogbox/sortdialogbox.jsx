import React, { useEffect, useRef, memo } from "react";
import priorityIcon from "../../assets/priority.png";
import dateIcon from "../../assets/date.png";
import "./sortdialogbox.css";

function Dialog({ isOpen, onClose, setOrder }){

    if (!isOpen) return null;

    const dialogRef = useRef(null);

    const updateSort = (txt) => {
        setOrder(txt);
        onClose();
        console.log(txt);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dialogRef.current && !dialogRef.current.contains(event.target)) {
            onClose();
          }
        };

        if (isOpen) {
            setTimeout(() => {
            document.addEventListener("click", handleClickOutside);
            }, 0);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };

    }, [isOpen, onClose]);

    return (
        <>
            <div
            ref={dialogRef}
            className="dialogbox"
            >
            <button className="firstop" onClick={() => updateSort("Date")}>
                <img src = {dateIcon} ></img>
                <span className="flexed">By Date</span>
            </button>

            <button className = 'secondop' onClick={() => updateSort("Priority")}>
                <img src = {priorityIcon} ></img>
                <span className="flexed">By Priority</span>
            </button>
            </div>
        </>
    )
}

export default Dialog;
