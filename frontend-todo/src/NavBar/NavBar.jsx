import SearchIcon from './SearchIcon.png'
import NotifIcon from './NotificationIcon.png'
import CalenderIcon from './Calender.png'
import CourseIcon from './CourseReview.png'
import AddTask from './AddTask.png'
import UserIcon from './User.png'
import NightModeIcon from './NightMode.png'
import Option from "../../../To-Do-frontend/frontend-todo/src/NavBar/Options"
import CollapseIcon from "./Collapse.png"
import ProjectIcon from "./ProjectIcon.png"
import inboxicon from "./InboxIcon.png"
import "./NavBar.css";
function NavBar(props){

    return(
        <div className="NavBar">
            <img className="CollapseIcon" src={CollapseIcon}  alt="" />
            <img className="NightModeIcon" src={NightModeIcon} alt="" />
            <div className='Navchoice'>
                    <a className="UserIcon" href="#"> <img src={UserIcon}></img> <span>{props.name}</span></a><br></br>
                    <br />
                    <a className="AddTask" href="#"> <img src={AddTask}></img> <span>Add Task</span></a>
                    <br />
                    <a href="#"><Option name="Search" image={SearchIcon}></Option></a>
                    <a href="#"><Option name ="Inbox" image = {inboxicon}>Inbox</Option></a>
                    <a href="#"><Option name ="Notifications" image={NotifIcon}></Option></a>
                    <a href="#"><Option name = "Timetable" image={CalenderIcon}></Option></a>
                    <a href="#"><Option name ="Course Reviews" image ={CourseIcon}></Option></a>
                    <br />
                    <a href="#" style={{backgroundColor:'white', border:'20px', zIndex:'1000'}}><Option name = "My Project"></Option></a>
                    <a href="#"><Option name = "   Project 1" image={ProjectIcon} ></Option></a>
                    <a href="#"><Option name = "   Project 2" image ={ProjectIcon}></Option></a>

            </div>
        </div>



    )

}




export default NavBar