import "../Stories/stories.scss";
import {AuthContext} from "../../Context/authContext";

import React, { useContext } from 'react'

export default function Stories(props) {

    const {currentUser} = useContext(AuthContext);

    const stories=[{
        is:1,
        name:"Pri",
        ProfilePic:"https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        is:2,
        name:"Pri",
        ProfilePic:"https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        is:3,
        name:"Pri",
        ProfilePic:"https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        is:4,
        name:"Pri",
        ProfilePic:"https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }]
    

    return (
        <div className="stories">
        <div className="story">
            <img src={currentUser.ProfilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
          </div>
        {stories.map(story=>(
          <div className="story" key={story.id}>
            <img src={story.ProfilePic} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
      </div>
    )
}
