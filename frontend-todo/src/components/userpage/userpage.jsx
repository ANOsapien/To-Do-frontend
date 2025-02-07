import React, { useEffect, useState } from 'react';
import "./userpage.css"
import profile from "../../assets/Generic avatar.png";
import DonutChart from "../doughnutchart/doughnutchart";
import EditProfileModal from "../editprofile/editprofile";

function UserPage({userId}){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [userData, setUserData] = useState({
        firstname: "Ananya",
        lastname: "Priyaroop",
        email: "ap123@gmail.com",
        institute: "IIT Bombay",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
              const response = await fetch(`http://127.0.0.1:8000/User/get/${userId}/`);
              const data = await response.json();
              setUserData(data);
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          };
          fetchUserData();
        },[userId])

    return(
    <>
    <div className = "firstdiv">
        <div className='profileanduser'>
            <img src = {profile} alt="profile oicture" className='profilepicture'/>
            <h1 className='Username'>{userData.firstname}</h1>
        </div>
        <hr className = "line" />
        <div className='user-details'>
            <div className="user-row">
                <span className="user-label">first name</span>
                <span className="user-value">{userData.firstname}</span>
            </div>
            <div className="user-row">
                <span className="user-label">last name</span>
                <span className="user-value">{userData.lastname}</span>
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
          UserID = {userId}
        />
      )}
    </>
)}

export default UserPage;