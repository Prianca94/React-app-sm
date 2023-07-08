import { Link } from "react-router-dom";
import "../Posts/post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import React, { useState } from "react";
import Comment from "../Comments/comment";

export default function Post(props) {
  const liked = false;
  const [commentOpen, setCommentOpen] = useState(false);

  const posts = [
    {
      is: 1,
      name: "Pri",
      userId: 1,
      ProfilePic:
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470",
      img: "https://images.pexels.com/photos/6280942/pexels-photo-6280942.jpeg",
      Desc: "",
    },
    {
      is: 2,
      name: "Pri",
      userId: 2,
      ProfilePic:
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470",
      img: "https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      Desc: "",
    },
    {
      is: 3,
      name: "Pri",
      userId: 3,
      ProfilePic:
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470",
      img: "https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      Desc: "",
    },
    {
      is: 4,
      name: "Pri",
      userId: 4,
      ProfilePic:
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470",
      img: "https://images.pexels.com/photos/4350282/pexels-photo-4350282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      Desc: "",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post">
          <div className="container">
            <div className="user">
              <div className="userInfo">
                <img src={post.ProfilePic}></img>
                <div className="details">
                  <Link
                    to={`/profile/${post.userId}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span className="name">{post.name}</span>
                    <span className="date">1 min ago</span>
                  </Link>
                </div>
              </div>
              <MoreHorizIcon />
            </div>
            <div className="content">
              <p>{post.Desc}</p>
              <img src={post.img}></img>
            </div>
            <div className="info">
              <div className="item">
                {liked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                12 Likes
              </div>
              <div
                className="item"
                onClick={() => setCommentOpen(!commentOpen)}
              >
                <ChatBubbleOutlineIcon />
                12 Comments
              </div>
              <div className="item">
                <ShareIcon />
                12 Shares
              </div>
            </div>
            {commentOpen && <Comment />}
          </div>
        </div>
      ))}
    </div>
  );
}
