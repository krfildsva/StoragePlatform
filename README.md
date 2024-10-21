# Decentralized Storage Marketplace
A Web3-based decentralized marketplace where consumers can purchase storage from providers, with payments managed through Ethereum smart contracts. Users can connect their MetaMask wallet, browse available storage providers, and securely buy storage using cryptocurrency.

## Prerequisites
MetaMask: Ensure you have MetaMask installed in your browser to connect your wallet.
Node.js: Make sure you have Node.js installed on your machine to run the backend server.
MongoDB: The application uses MongoDB to store account information, so make sure MongoDB is running.
## Getting Started
npm install install express mongoose body-parser

Put your own MongoDB sever and Wallet ID.

## Open the frontend:
Start the server:
npm index.js

Open localhost:5000 in a browser with MetaMask installed.

Ensure MetaMask is connected to the correct network (e.g., Ethereum).

## Interact with the marketplace:

Connect Wallet: Click on "Connect Wallet" to connect your MetaMask account.
Search Storage: Enter the amount of storage you need and the maximum price you're willing to pay, then search for providers.
Buy Storage: Choose a provider and complete the purchase using MetaMask.
MongoDB Integration
Make sure MongoDB is connected properly and running. The server will save user account data (wallet address, storage bought, total spent) into the MongoDB database.

## Screenshots
Demo 1: Connecting MetaMask Wallet
![image](https://github.com/user-attachments/assets/ec8b1b55-d55e-4357-adf9-2cb09fa6685a)

Demo 2: Storage Search
![image](https://github.com/user-attachments/assets/53e5d3b0-edf8-4576-b8ff-c39265df9c22)

Demo 3: Buying Storage
![image](https://github.com/user-attachments/assets/5161c96a-bcdd-461f-9152-dcf110106e80)

