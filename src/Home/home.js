import React from 'react';
import "./home.scss";
import Stories from '../Components/Stories/stories';
import Post from '../Components/Posts/post';


export default function Home(props) {
    

    return (
        <>
        <div className='home'>
            <Stories/>
            <Post/>
          
        </div>
            
        </>
    )
}
