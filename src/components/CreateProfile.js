import React, { useState } from "react";
import { ethers } from "ethers";
import "./CreateProfile.css";

const profileAddress = "0xd97abe36f4948c9d8e617b21c5755b6c7978fb55"; // replace this
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
  }
];

export default function CreateProfile() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      setLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(profileAddress, profileAbi, signer);

      const tx = await contract.createProfile(username, parseInt(age), isPublic);
      await tx.wait();
      setTxHash(tx.hash);
      alert("✅ Profile created successfully!");
    } catch (err) {
      console.error("Profile creation failed:", err);
      alert("⚠️ Error creating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-profile-container">
      <h2>📝 Create Your Profile</h2>
      <form onSubmit={handleCreateProfile} className="profile-form">
        <label>
          Username:
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            required
            min="10"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          Visibility:
          <select value={isPublic} onChange={(e) => setIsPublic(e.target.value === "true")}>
            <option value="true">🌍 Public</option>
            <option value="false">🔒 Private</option>
          </select>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "⏳ Creating..." : "🚀 Create Profile"}
        </button>
      </form>

      {txHash && (
        <p className="tx-message">
          ✅ Transaction Hash: <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noreferrer">{txHash.slice(0, 10)}...</a>
        </p>
      )}
    </div>
  );
}
