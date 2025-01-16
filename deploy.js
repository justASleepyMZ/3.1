require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Load .env variables

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract factory for UniversityGroupToken
    const Token = await ethers.getContractFactory("UniversityGroupToken");

    // Deploy the contract with an initial supply of 2000 tokens
    const token = await Token.deploy(ethers.utils.parseUnits("2000", 18)); // 2000 tokens with 18 decimals
    console.log("Token deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
