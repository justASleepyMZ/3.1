# University Group Token (UGT) - ERC20 Implementation

## Overview

The **University Group Token (UGT)** is a custom ERC20 token built on the Ethereum blockchain. This token implements all the standard ERC20 functionalities along with additional features such as minting, burning, and retrieving the latest block timestamp. The contract is designed as part of a blockchain project to demonstrate an understanding of smart contract development and the ERC20 standard.

### Key Features:
- **ERC20 Functions**: Includes functions like transferring tokens, approving third-party transfers, and checking balances.
- **Minting & Burning**: The contract owner has the ability to mint new tokens and burn existing tokens to adjust the total supply.
- **Block Timestamp**: A function that allows retrieving the current block's timestamp in a human-readable format.

## Contract Functions

### 1. `transfer(address _to, uint256 _value)`
- **Purpose**: Transfers `_value` tokens from the sender to the specified `_to` address.
- **Event**: Emits a `Transfer` event.

### 2. `approve(address _spender, uint256 _value)`
- **Purpose**: Approves the `_spender` to spend `_value` tokens on behalf of the sender.
- **Event**: Emits an `Approval` event.

### 3. `transferFrom(address _from, address _to, uint256 _value)`
- **Purpose**: Transfers `_value` tokens from `_from` to `_to` address on behalf of the sender.
- **Event**: Emits a `Transfer` event.

### 4. `mint(address _to, uint256 _value)`
- **Purpose**: Mints new tokens and assigns them to the specified `_to` address, increasing the total supply.
- **Event**: Emits a `Mint` event.

### 5. `burn(address _from, uint256 _value)`
- **Purpose**: Burns `_value` tokens from the specified `_from` address, reducing the total supply.
- **Event**: Emits a `Burn` event.

### 6. `getLatestBlockTimestamp()`
- **Purpose**: Returns the current block timestamp in a human-readable string format.
- **Use**: Useful for tracking the exact time a transaction took place or when a block was mined.

### 7. `uint2str(uint256 _i)`
- **Purpose**: Converts a `uint256` value to a string. This helper function is used to convert timestamps into a string format.

## How to Deploy and Use

### Prerequisites
- Install [Node.js](https://nodejs.org/) (if not already installed).
- Install [Hardhat](https://hardhat.org/) for smart contract development.

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/UniversityGroupToken.git
   cd UniversityGroupToken

Install Dependencies: Run the following command to install the necessary dependencies:

bash

npm install
Configure the .env File:

Create a .env file in the root directory of the project.
Add your private key, Infura API key, and Alchemy API key to the .env file:
text

PRIVATE_KEY=your_private_key
INFURA_API_KEY=your_infura_api_key
ALCHEMY_API_KEY=your_alchemy_api_key
Deploy the Contract: Deploy your contract to the Sepolia or Goerli network using Hardhat:

bash

npx hardhat run --network sepolia scripts/deploy.js
Interact with the Contract: After deploying the contract, you can interact with it using Hardhat’s console:

bash

npx hardhat console --network sepolia
Example Usage:
javascript

const token = await UniversityGroupToken.deploy(initialSupply, ownerAddress);

// Mint new tokens to a specific address
await token.mint(recipientAddress, amount);

// Burn tokens from a specific address
await token.burn(addressToBurn, amount);

// Transfer tokens to another address
await token.transfer(recipientAddress, amount);
