import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";



const Sidebar = () => {
   const {dispatch} = useContext(DarkModeContext);
   return (
       <div className="sidebar">
           <div className="top">
            <Link to="/" className="linkStyle">
                <span className="logo">Medical</span>
            </Link> 
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" className="linkStyle">
                        <li>
                            <DashboardIcon className="icon"/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    
                    <p className="title">LISTS</p>
                    <Link to="/Users" className="linkStyle">
                        <li>
                            <PersonOutlineIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/Products" className="linkStyle">
                        <li>
                        <AddBusinessIcon className="icon"/>
                        <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/Orders" className="linkStyle">
                        <li>
                        <CreditCardIcon className="icon"/>
                        <span>Orders</span>
                        </li>
                    </Link>
                    <Link to="/Deliveries" className="linkStyle">
                        <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                        </li>
                    </Link>
                    
                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxIcon className="icon"/>
                        <span>Profiles</span>
                    </li> 
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span>Logout</span>
                    </li>     
                </ul>

            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
       </div>
   )
}

export default Sidebar
