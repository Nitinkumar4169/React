import React from "react";
import nitinpic from '../assets/nitinpic.jpeg'


const UserCard = () => {
  return (
    <div className="user-container">
      <p id="user-name">Nitin bhaiya</p>
      <img id="user-img" src={nitinpic} alt="Rao"></img>
      <p id="user-desc">Description of Nitin bhaiya</p>
    </div>
  );
};

export default UserCard;
