import React from 'react';
import "../Navbar/navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    
    return (
        
                <div className='navbar'>
                    <div className='left'>
                       <Link to="/" style={{textDecoration:"none"}}> <span>Make-A-Friend</span></Link>
                       <HomeIcon/>
                       <DarkModeOutlinedIcon/>
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
                        <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470" height="20" width="20" alt="pic"></img>
                        <span>Pri</span>
                    </div>
                    </div>
                   
                    
                    </div>
    
    )
}
