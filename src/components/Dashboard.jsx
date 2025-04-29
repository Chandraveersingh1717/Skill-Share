// import React, { useState } from "react";
// import "./Dashboard.css";

// const SkillCard = ({ title, university, status, statusType }) => {
//   const getStatusColor = () => {
//     switch (statusType) {
//       case "ended":
//         return "#ffe6e6";
//       case "upcoming":
//         return "#fff6cc";
//       case "completed":
//         return "#e6fff2";
//       default:
//         return "#f2f2f2";
//     }
//   };

//   return (
//     <div className="skill-card" style={{ backgroundColor: getStatusColor() }}>
//       <h3>{title}</h3>
//       {/* <p className="university">{university}</p> */}
//       <div className="rating-row">
//         {/* <div className="stars">★★★★★</div> */}
//         <div className="status-text">
//           {/* <span className={`status ${statusType}`}>⏺ {status}</span> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function Dashboard() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={`dashboard-container ${darkMode ? "dark-mode" : ""}`}>
//       <header className="dashboard-header">
//         <img src="./src/assets/logo.png" alt="Logo" className="logo" />
//         <h1 className="dashboard-title">SkillShare Network</h1>
//         <div className="header-actions">
//           <button className="help-btn">❓ Help</button>
//           <button
//             className="toggle-darkmode-btn"
//             onClick={() => setDarkMode(!darkMode)}
//           >
//             {darkMode ? "☀️ Light" : "🌙 Dark"}
//           </button>
//         </div>
//       </header>

//       <div className="dashboard-grid responsive-grid">
//         <aside className="sidebar-card">
//           <h2>👤 Profile</h2>
//           <div className="profile-details">
//             <p><strong>ABCD</strong></p>
//             <p>⭐ Rating: 4.8</p>
//             <p>🎟️ Tokens: <span className="token-counter">120</span></p>
//             <p>👥 Friends</p>
//             <p>🏆 Achievements</p>
// <p>📜 Certificates</p>

//             <button className="edit-profile-btn">✏️ Edit Profile</button>
//           </div>
//         </aside>

//         <main className="main-content">
//           <section className="skills-section">
//             <div className="skills-header">
//               <h2>🧠 Explore Skills</h2>
//             </div>
//             <input
//   type="text"
//   className="search-bar"
//   placeholder="🔍 Search for skills..." />

//             <div className="skills-grid">
//               <SkillCard
//                 title="Blockchain Basics"
//                 university=" ABCD"
//                 status="Ends May 01"
//                 statusType="ended"
//               />
//               <SkillCard
//                 title=" Science"
//                 university=" "
//                 status="Ends Jul 01"
//                 statusType="upcoming"
//               />
//               <SkillCard
//                 title=" Arts"
//                 university=" "
//                 status="Ends Jun 20"
//                 statusType="upcoming"
//               />
//               <SkillCard
//                 title=" Psycology"
//                 university=" "
//                 status="Completed"
//                 statusType="completed"
//               />
//               <SkillCard
//                 title="Design "
//                 university=""
//                 status="Completed"
//                 statusType="completed"
//               />
//               <SkillCard
//                 title="Data Science"
//                 university=" ABCD"
//                 status="Ends May 01"
//                 statusType="ended"
//               />
//               <SkillCard
//                 title=" Deep Learning"
//                 university=" "
//                 status="Ends Jul 01"
//                 statusType="upcoming"
//               />
//               <SkillCard
//                 title="Statics "
//                 university=""
//                 status="Completed"
//                 statusType="completed"
//               />
              
//             </div>
//           </section>

//           <section className="mentor-card">
//             <div>
//               <h2>🌟 Become a Mentor</h2>
//               <p>Empower others & earn rewards by teaching.</p>
//             </div>
//             <button className="join-mentor-btn">🤝 Join Now</button>
//           </section>
//         </main>
//       </div>

//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./Dashboard.css";

// === Contract Info ===
const profileAddress = "0xYourDeployedContractAddressHere"; // Replace with actual address
const profileAbi = [
  {
    "inputs": [
      { "internalType": "string", "name": "_username", "type": "string" },
      { "internalType": "uint16", "name": "_age", "type": "uint16" },
      { "internalType": "bool", "name": "_isPublic", "type": "bool" }
    ],
    "name": "createProfile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_id", "type": "address" }],
    "name": "getProfile",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "username", "type": "string" },
          { "internalType": "uint16", "name": "age", "type": "uint16" },
          { "internalType": "uint256", "name": "likes", "type": "uint256" },
          { "internalType": "bool", "name": "isPublic", "type": "bool" }
        ],
        "internalType": "struct Profile.ProfileData",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "string", "name": "_skill", "type": "string" }],
    "name": "getAddressWithSkill",
    "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const SkillCard = ({ title, statusType }) => {
  const getStatusColor = () => {
    switch (statusType) {
      case "ended": return "#ffe6e6";
      case "upcoming": return "#fff6cc";
      case "completed": return "#e6fff2";
      default: return "#f2f2f2";
    }
  };

  return (
    <div className="skill-card" style={{ backgroundColor: getStatusColor() }}>
      <h3>{title}</h3>
    </div>
  );
};

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [searchSkill, setSearchSkill] = useState("");
  const [matchingUsers, setMatchingUsers] = useState([]);

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAccount = await signer.getAddress();
        const contractInstance = new ethers.Contract(profileAddress, profileAbi, signer);

        setAccount(userAccount);
        setContract(contractInstance);

        try {
          const profile = await contractInstance.getProfile(userAccount);
          setProfileData(profile);
        } catch (err) {
          console.log("No profile found. Create one first.");
        }
      } else {
        alert("Please install MetaMask!");
      }
    };

    loadBlockchainData();
  }, []);

  const handleSearch = async () => {
    if (contract && searchSkill.trim()) {
      try {
        const users = await contract.getAddressWithSkill(searchSkill);
        setMatchingUsers(users);
      } catch (err) {
        console.error("Error fetching users with skill:", err);
      }
    }
  };

  return (
    <div className={`dashboard-container ${darkMode ? "dark-mode" : ""}`}>
      <header className="dashboard-header">
        <img src="./src/assets/logo.png" alt="Logo" className="logo" />
        <h1 className="dashboard-title">SkillShare Network</h1>
        <div className="header-actions">
          <button className="help-btn">❓ Help</button>
          <button className="toggle-darkmode-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      <div className="dashboard-grid responsive-grid">
        <aside className="sidebar-card">
          <h2>👤 Profile</h2>
          <div className="profile-details">
            <p><strong>{profileData?.username || "Loading..."}</strong></p>
            <p>👤 Age: {profileData?.age || "--"}</p>
            <p>❤️ Likes: {profileData?.likes || 0}</p>
            <p>🔐 Visibility: {profileData?.isPublic ? "Public" : "Private"}</p>
            <p>⭐ Rating: 4.8</p>
            <p>🎟️ Tokens: <span className="token-counter">120</span></p>
            <button className="edit-profile-btn">✏️ Edit Profile</button>
          </div>
        </aside>

        <main className="main-content">
          <section className="skills-section">
            <div className="skills-header">
              <h2>🧠 Explore Skills</h2>
            </div>
            <input
              type="text"
              className="search-bar"
              placeholder="🔍 Search for skills..."
              value={searchSkill}
              onChange={(e) => setSearchSkill(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            <div className="skills-grid">
              <SkillCard title="Blockchain Basics" statusType="ended" />
              <SkillCard title="Science" statusType="upcoming" />
              <SkillCard title="Arts" statusType="upcoming" />
              <SkillCard title="Psychology" statusType="completed" />
              <SkillCard title="Design" statusType="completed" />
              <SkillCard title="Data Science" statusType="ended" />
              <SkillCard title="Deep Learning" statusType="upcoming" />
              <SkillCard title="Statistics" statusType="completed" />
            </div>

            {matchingUsers.length > 0 && (
              <div className="search-results">
                <h4>👥 Users with "{searchSkill}":</h4>
                <ul>
                  {matchingUsers.map((addr, idx) => (
                    <li key={idx}>{addr}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section className="mentor-card">
            <div>
              <h2>🌟 Become a Mentor</h2>
              <p>Empower others & earn rewards by teaching.</p>
            </div>
            <button className="join-mentor-btn">🤝 Join Now</button>
          </section>
        </main>
      </div>
    </div>
  );
}
