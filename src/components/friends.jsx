import React from "react";
import "./Friends.css";
import image from "../assets/C.png"; 
const friends = [
  { name: "Chandraveer", image: image, status: "Online" },
  { name: "ABCD", image: "", status: "Busy" },
  { name: "EFGH", image: "", status: "Offline" },
];

const FriendsList = () => {
  return (
    <>
    <h1 className="friends-title"><b>Friends List</b></h1>

    <div className="friends-container">
      {friends.map((friend, index) => (
        <div className="friend-card" key={index}>
          <div className="friend-card-inner">
            <div className="friend-card-front">
              <img src={friend.image} alt={friend.name} />
              <h3>{friend.name}</h3>
            </div>
            <div className="friend-card-back">
              <p>Status: {friend.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FriendsList;