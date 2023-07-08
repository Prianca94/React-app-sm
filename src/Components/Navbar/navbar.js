import React, { useContext } from 'react';
import "../Navbar/navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../Context/darkModeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AuthContext } from '../../Context/authContext';

export default function Navbar(props) {

    const {toggle,darkMode}=useContext(DarkModeContext);
    const {login, currentUser}=useContext(AuthContext);
    
    return (
        
                <div className='navbar'>
                    <div className='left'>
                       <Link to="/" style={{textDecoration:"none"}}> <span>Make-A-Friend</span></Link>
                       <HomeIcon/>
                       {darkMode==true? <LightModeIcon onClick={toggle}/>:<DarkModeOutlinedIcon onClick={toggle}/>}
                       
                       <GridViewOutlinedIcon/>
                       <div className='search'>
                        <SearchOutlinedIcon/>
                        <input type="text" placeholder='...search'/>
                       </div>
                    </div>
                    <div className='right'>
                        <Person2OutlinedIcon/>
                        <MarkEmailUnreadOutlinedIcon/>
                        <NotificationsNoneOutlinedIcon/>
                        <div className='user'>
                        <img src={currentUser.ProfilePic} height="20" width="20" alt="pic"></img>
                        <span>{currentUser.name}</span>
                    </div>
                    </div>
                   
                    
                    </div>
    
    )
}
