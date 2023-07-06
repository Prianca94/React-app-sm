import React from "react";
import "../Leftbar/leftbar.scss";
import Friendsicon from "../../Assets/Images/friends.png";
import Coursesicon from "../../Assets/Images/courses.png";
import Eventicon from "../../Assets/Images/event.png";
import Fundicon from "../../Assets/Images/fund.png";
import Galleryicon from "../../Assets/Images/gallery.png";
import Gameicon from "../../Assets/Images/game.png";
import Groupsicon from "../../Assets/Images/groups.png";
import MarketPlaceicon from "../../Assets/Images/marketplace.png";
import Memoriesicon from "../../Assets/Images/memories.png";
import Messagesicon from "../../Assets/Images/messages.png";
import Tutorialicon from "../../Assets/Images/tutorial.png";
import Videosicon from "../../Assets/Images/videos.png";
import Watch from "../../Assets/Images/watch.png";

export default function Leftbar(props) {
  return (
      <div className="leftbar">
        <div className="container">
          <div className="menu">
            <div className="user">
              <img
                src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470"
                height="20"
                width="20"
                alt="pic"
              ></img>
              <span>Pri</span>
            </div>
            <div className="item">
              <img src={Friendsicon} alt="f" />
              <span>Friends</span>
            </div>
            <div className="item">
              <img src={Groupsicon} alt="f" />
              <span>Groups</span>
            </div>
            <div className="item">
              <img src={MarketPlaceicon} alt="f" />
              <span>MarketPlace</span>
            </div>
            <div className="item">
              <img src={Watch} alt="f" />
              <span>Watch</span>
            </div>
            <div className="item">
              <img src={Memoriesicon} alt="f" />
              <span>Memories</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <p>Your Shortcuts</p>
            <div className="item">
              <img src={Eventicon} alt="f" />
              <span>Event</span>
            </div>
            <div className="item">
              <img src={Galleryicon} alt="f" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={Gameicon} alt="f" />
              <span>Game</span>
            </div>
            <div className="item">
              <img src={Videosicon} alt="f" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Messagesicon} alt="f" />
              <span>Messages</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <p>Others</p>
            <div className="item">
              <img src={Fundicon} alt="f" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Coursesicon} alt="f" />
              <span>Courses</span>
            </div>
            <div className="item">
              <img src={Tutorialicon} alt="f" />
              <span>Tutorial</span>
            </div>
              <div className="item">
              <img src={Fundicon} alt="f" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Coursesicon} alt="f" />
              <span>Courses</span>
            </div>
            <div className="item">
              <img src={Tutorialicon} alt="f" />
              <span>Tutorial</span>
            </div>
          </div>
        </div>
      </div>
  );
}
