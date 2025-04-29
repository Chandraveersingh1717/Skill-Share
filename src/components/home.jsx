// import React from 'react'
// import './home.css'

// function home() {
//   return (
//     <div>
//       <button className="connect-wallet-btn">🔗 Connect</button>
//       <p id="learn"><b><i>Learn, Teach and Grow </i></b></p>
//       <p>LOGO</p>
//       <button className="signUp">Sign Up 🚀</button>

//       <h1 id="des">DESCRIPTION</h1>
//       <p>deSk is a unique platform where people can share knowledge and services directly, like tutoring, coding help, or creative lessons. Built with Blockchain and WEB3 technology, it gives users full control over their profiles, skill listings, and transactions. Ratings and reviews are securely stored to ensure honesty, and payments are handled through smart contracts for safety and fairness. Users can connect globally, verify skills, join mentorship networks, and earn rewards for teaching or referring others. With deSk, sharing and learning skills has never been easier or more rewarding!</p>

//     </div>
//   )
// }

// export default home
import React, { useState } from 'react';
import './home.css';
import { ethers } from 'ethers';
import Footer from './footer';
import InstallApp from './InstallApp';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const walletAddress = "0xd97abe36f4948c9d8e617b21c5755b6c7978fb55";

const walletAbi = [
  {
    inputs: [{ internalType: "uint256", name: "x", type: "uint256" }],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  }
];

function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState('');
  const [contracts, setContracts] = useState({ readContract: null, writeContract: null });
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum); // ethers v6
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        const readContract = new ethers.Contract(walletAddress, walletAbi, provider);
        const writeContract = new ethers.Contract(walletAddress, walletAbi, signer);

        setContracts({ readContract, writeContract });
        setWalletConnected(true);
        setAccount(address);
        navigate('/dashboard'); // Redirect to dashboard after connection

        console.log("Wallet connected:", address);
      } catch (err) {
        console.error("Connection error:", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <>
      <span><img src='./src/assets/logo.png' alt="Logo" className="logo" /></span>
      <div>
        <button className="connect-wallet-btn" onClick={connectWallet}>
          🔗 {walletConnected ? `Connected: ${account.slice(0, 6)}...` : "Connect"}
        </button>
        <span><img src='./src/assets/img.png' alt="Visual" className="image1" /></span>

        <p id="learn"><b><i>Learn, Teach and Grow</i></b></p>
        <button className="signUp">Sign Up 🚀</button>

        <h1 id="des">DESCRIPTION</h1>
        <p id="desc">
          deSk is a unique platform where people can share knowledge and services directly, like tutoring, coding help, or creative lessons.
          Built with Blockchain and WEB3 technology, it gives users full control over their profiles, skill listings, and transactions.
          Ratings and reviews are securely stored to ensure honesty, and payments are handled through smart contracts for safety and fairness.
          Users can connect globally, verify skills, join mentorship networks, and earn rewards for teaching or referring others.
          With deSk, sharing and learning skills has never been easier or more rewarding!
        </p>

        <InstallApp />
        <Footer />
      </div>
    </>
  );
}

export default Home;
