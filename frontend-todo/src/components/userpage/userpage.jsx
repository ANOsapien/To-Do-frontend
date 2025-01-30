import React, { useState } from 'react';
import "./userpage.css"
import profile from "../../assets/Generic avatar.png";
import DonutChart from "../doughnutchart/doughnutchart";
import EditProfileModal from "../editprofile/editprofile";

function UserPage(){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [userData, setUserData] = useState({
        firstName: "Ananya",
        lastName: "Priyaroop",
        email: "ap123@gmail.com",
        institute: "IIT Bombay",
    });

    return(
    <>
    <div className = "firstdiv">
        <div className='profileanduser'>
            <img src = {profile} alt="profile oicture" className='profilepicture'/>
            <h1 className='Username'>{userData.firstName}</h1>
        </div>
        <hr className = "line" />
        <div className='user-details'>
            <div className="user-row">
                <span className="user-label">first name</span>
                <span className="user-value">{userData.firstName}</span>
            </div>
            <div className="user-row">
                <span className="user-label">last name</span>
                <span className="user-value">{userData.lastName}</span>
            </div>
            <div className="user-row">
                <span className="user-label">email</span>
                <span className="user-value">{userData.email}</span>
            </div>
            <div className="user-row">
                <span className="user-label">institute</span>
                <span className="user-value">{userData.institute}</span>
            </div>
        </div>
    </div>
    <div className="donut-container">
        <DonutChart />
    </div>
    <button className='button' onClick={() => setIsModalOpen(true)}>Edit Profile</button>
    {isModalOpen && (
        <EditProfileModal
          userData={userData}
          setUserData={setUserData}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
)}

export default UserPage;