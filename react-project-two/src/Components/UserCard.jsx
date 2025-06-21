import React from "react";
import nitinpic from '../assets/nitinpic.jpeg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className="user-container">
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={nitinpic} alt="Rao"></img>
      <p id="user-desc">{props.desc}</p>
    </div>
  );
};

export default UserCard;
