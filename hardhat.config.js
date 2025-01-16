require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Load private key from .env

module.exports = {
  solidity: "0.8.0", // Match the version with your contract's version
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/9ec4208d64384795ad6d3cf19b1e556e`, // Replace with your Infura Project ID
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Private key from the .env file
    },
  },
};
