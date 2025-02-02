async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const Token = await ethers.getContractFactory("UniversityGroupToken");
    const initialSupply = 1000000; // Пример начальногоSupply
    const token = await Token.deploy(initialSupply);
  
    console.log("UniversityGroupToken deployed to:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  