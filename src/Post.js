import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./Post.css";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Gandalf</h2>
          <p>description</p>
        </div>
      </div>

      <div className="post__body">
        <p>message</p>
      </div>

      <div className="post__button">
        <InputOption Icon={ThumbUpAltIcon} title="Like" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" />
        <InputOption Icon={SendOutlinedIcon} title="Send" />
      </div>
    </div>
  );
}

export default Post;
