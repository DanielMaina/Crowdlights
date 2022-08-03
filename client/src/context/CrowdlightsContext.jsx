import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const CrowdlightsContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

//   return transactionsContract;
  console.log({
    provider,
    signer,
    transactionsContract,
  });  
};

export const TransactionsProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({ addressTo: "", first: "", second: "", third: "", fourth: "", fifth: "", total: ""});

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
        
            //getAllTransactions();
            } else {
            console.log("No accounts found");
            }
        } catch (error){
            console.log(error);

            throw new Error("No ethereum object");
        } 
    }
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_requestAccounts", });

            setCurrentAccount(accounts[0]);
            window.location.reload();
            } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");  
            
            const { addressTo, first, second, third, fourth, fifth, total } = formData;
            createEthereumContract();
        } catch (error) {
        console.log(error);

        throw new Error("No ethereum object");
        }
    };

    useEffect(() => {
        checkIfWalletIsConnect();
    }, []);

    return (
        <CrowdlightsContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </CrowdlightsContext.Provider>
    )
};