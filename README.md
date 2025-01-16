# University Group Token (UGT) - ERC20 Implementation

## Overview

The **University Group Token (UGT)** is a custom ERC20 token that implements the standard ERC20 functions along with additional functionalities like minting, burning, and retrieving the latest block timestamp. This token is designed as part of a blockchain assignment to demonstrate an understanding of smart contract development and the ERC20 standard.

### Key Features:
- **ERC20 Functions**: The token supports standard ERC20 functionalities like transferring tokens, approving third-party transfers, and checking balances.
- **Minting & Burning**: The contract owner can mint new tokens and burn existing tokens to adjust the total supply.
- **Block Timestamp**: The contract includes a function that allows users to retrieve the latest block timestamp in a human-readable string format.

## Contract Functions

### 1. `transfer(address _to, uint256 _value)`

- Transfers `_value` tokens from the sender to the specified `_to` address.
- Emits a `Transfer` event.

### 2. `approve(address _spender, uint256 _value)`

- Approves the `_spender` to spend `_value` tokens on behalf of the sender.
- Emits an `Approval` event.

### 3. `transferFrom(address _from, address _to, uint256 _value)`

- Transfers `_value` tokens from `_from` to `_to` address on behalf of the sender.
- Requires that the sender has been approved by the `_from` address.
- Emits a `Transfer` event.

### 4. `mint(address _to, uint256 _value)`

- Mints new tokens and assigns them to the specified `_to` address.
- Increases the total supply of tokens.
- Emits a `Mint` event.

### 5. `burn(address _from, uint256 _value)`

- Burns `_value` tokens from the specified `_from` address.
- Reduces the total supply of tokens.
- Emits a `Burn` event.

### 6. `getLatestBlockTimestamp()`

- Returns the current block timestamp in a human-readable string format.
- Useful for retrieving the exact time a transaction took place or when a block was mined.

### 7. `uint2str(uint256 _i)`

- A helper function that converts a `uint256` value into a string. This is used to convert timestamps into a string format.

## How to Deploy and Use

### Prerequisites
- Install [Node.js](https://nodejs.org/) if you don't have it installed.
- Install [Hardhat](https://hardhat.org/) for smart contract development.

### Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/UniversityGroupToken.git
   cd UniversityGroupToken
