import React, { useContext } from 'react';
import "../Comments/comment.scss";
import { AuthContext } from '../../Context/authContext';

export default function Comment(props) {

    const {currentUser}=useContext(AuthContext)

    const comments=[{
        is:1,
        name:"Priya",
        userId:1,
        ProfilePic:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470",
        img:"https://images.pexels.com/photos/6280942/pexels-photo-6280942.jpeg",
        Desc:"All my focus is on the good.All my focus is on the good."
    },
    {
        is:2,
        name:"Komal",
        userId:2,
        ProfilePic:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470",
        img:"https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        Desc:"I always wear my smile like a sword.I always wear my smile like a sword."
    },
    {
        is:3,
        name:"Gauri",
        userId:3,
        ProfilePic:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470",
        img:"https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        Desc:"I always wear my smile like a sword.I always wear my smile like a sword.I always wear my smile like a sword."
    },
    {
        is:4,
        name:"Karan",
        userId:4,
        ProfilePic:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470",
        img:"https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        Desc:""
    }]   
    
    return (
        <div className='comments'>
            <div className='write'>
            <img src={currentUser.ProfilePic}></img>
            <input type="text" placeholder='write a comment'/>
            <button>Send</button>

            </div>
            {comments.map((comment)=>(<div className='comment'>

                <img src={comment.ProfilePic}></img>
                <div className='info'>
                    <span>{comment.name}</span>
                    <p>{comment.Desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
            </div>))}
            
        </div>
    )
}
