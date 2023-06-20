import React, { createContext, useState } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const MumbaiChainId = 80001;
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (walletAddress) {
      // Disconnect wallet
      setWalletAddress(null);
    } else if (typeof window.ethereum !== "undefined") {
      try {
        const chainId = `0x${MumbaiChainId.toString(16)}`; // Convert chainId to hexadecimal string with the 0x prefix
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId }],
        });
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        setWalletAddress(address);
      } catch (error) {
        console.log("Error connecting wallet:", error);
        if (error.code === 4902) {
          // If unsupported network switch error, add the network manually
          addMumbaiNetwork();
        }
      }
    } else {
      window.alert("No MetaMask!");
    }
  };
  

  const addMumbaiNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${MumbaiChainId.toString(16)}`, // Convert chainId to hexadecimal string
            chainName: "Mumbai Testnet",
            nativeCurrency: {
              name: "MATIC",
              symbol: "MATIC",
              decimals: 18,
            },
            rpcUrls: ["https://polygon-mumbai.g.alchemy.com/v2/-c9qzDrb0X8ooBkT-84zu3TLjUs3OxCe"], 
          },
        ],
      });
    } catch (error) {
      console.log("Error adding Polygon Mumbai network:", error);
    }
  };

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
