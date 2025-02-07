import { useState } from "react";
import React from "react";
import "./editprofile.css";

function EditProfileModal({userData, setUserData, closeModal, UserID}){
    const [tempData, setTempData] = useState({
        firstname: userData.firstname,
        lastname: userData.lastname,
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

    const getCsrfToken = () => {
      return document.cookie
          .split("; ")
          .find(row => row.startsWith("csrftoken="))
          ?.split("=")[1];
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`http://127.0.0.1:8000/User/edit/${UserID}/`, {
              method: "PUT",  // Use PUT or PATCH depending on your backend
              headers: {
                  "Content-Type": "application/json",
                  "X-CSRFToken": getCsrfToken(),
              },
              body: JSON.stringify(tempData),
          });
          if (response.ok) {
            const updatedUser = await response.json();
            setUserData(updatedUser);
            closeModal();
        } else {
            console.error("Failed to update user data.");
        } 
      }
      catch (error) {
        console.error("Error updating user:", error);
      }

    }

    return(
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <label>First Name:</label>
              <input type="text" name="firstname" value={tempData.firstname} onChange={handleChange}/>
    
              <label>Last Name:</label>
              <input type="text" name="lastname" value={tempData.lastname}  onChange={handleChange}/>
    
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