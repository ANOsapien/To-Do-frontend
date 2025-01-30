import { useState } from "react";
import React from "react";
import "./editprofile.css";

function EditProfileModal({userData, setUserData, closeModal}){

    const [tempData, setTempData] = useState({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        institute: userData.institute,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempData(prevState => ({
          ...prevState,
          [name]: value,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(tempData);
        closeModal();
    }

    return(
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <label>First Name:</label>
              <input type="text" name="firstName" value={tempData.firstName} onChange={handleChange}/>
    
              <label>Last Name:</label>
              <input type="text" name="lastName" value={tempData.lastName}  onChange={handleChange}/>
    
              <label>Email:</label>
              <input type="email" name="email" value={tempData.email} onChange={handleChange} />
    
              <label>Institute:</label>
              <input type="text" name="institute" value={tempData.institute} onChange={handleChange} />
              <div id="buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      );
}


export default EditProfileModal;