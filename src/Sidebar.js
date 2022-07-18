import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => {
    return <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.eea.europa.eu/highlights/world-water-day-attention-on/@@images/81c11d4a-9f04-46b0-914a-8829f0736da8.jpeg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Gandalf</h2>
        <h4>gandalf.theWhite@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">3900</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">6900</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
