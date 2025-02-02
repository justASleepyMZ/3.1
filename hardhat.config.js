require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Load .env variables

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`, // или ваш Alchemy API ключ
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Приватный ключ в правильном формате
    },
  },
};
