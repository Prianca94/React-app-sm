import React from 'react';
import "./profile.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Post from '../Components/Posts/post';

export default function Profile(props) {
    

    return (
        <div className='profile'> 
        <div className='images'>
            <img src="https://i.etsystatic.com/17254828/r/il/0e58fb/3428873939/il_1588xN.3428873939_oxw9.jpg" className='cover'></img>
            <img src="data:image/jpeg;base64,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" className='profilepic'></img>

        </div>
        <div className='profilecontainer'>
            <div className='uInfo'>
                <div className='left'>

                    <a href=""><FacebookIcon/></a>
                    <a href=""><InstagramIcon/></a>
                    <a href=""><TwitterIcon/></a>
                    <a href=""><WhatsAppIcon/></a>
                </div>
                <div className='center'>
                    <span>Pri</span>
                    <div className='info'>
                        <div className='item'>
                         <LocationOnIcon/>
                         <span>India</span>
                        
                        </div>
                        <div className='item'>
                        <LanguageIcon/>
                         <span>Hindi</span>                      
                        </div>
                       
                        
                    </div>
                    <button>Follow</button>
                </div>
                <div className='right'>

                    <MailOutlineIcon/>
                    <MoreVertIcon/>

                </div>
               


            </div>

            <Post/>
        </div>
       
        </div>
    )
}
