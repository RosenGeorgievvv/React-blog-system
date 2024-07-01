import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="header">F2F Chat</span>
      <div className="user">
        <img src="https://media.licdn.com/dms/image/D4D03AQFt0Phvs79Lvg/profile-displayphoto-shrink_200_200/0/1712508041785?e=2147483647&v=beta&t=TV9CggKT-83KBKn0QLsRisVdJTZreKgmrecOsuHjabQ" alt="" />
        <span>Rosen</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
