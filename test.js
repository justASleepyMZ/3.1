const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UniversityGroupToken", function () {
  let Token, token, deployer, addr1, addr2;

  beforeEach(async function () {
    [deployer, addr1, addr2] = await ethers.getSigners();
    Token = await ethers.getContractFactory("UniversityGroupToken");
    token = await Token.deploy(ethers.utils.parseUnits("2000", 18), deployer.address);
  });

  it("should have the correct name and symbol", async function () {
    expect(await token.name()).to.equal("University_Group_Token");
    expect(await token.symbol()).to.equal("UGT");
  });

  it("should assign the total supply to the deployer", async function () {
    expect(await token.balanceOf(deployer.address)).to.equal(ethers.utils.parseUnits("2000", 18));
  });

  it("should transfer tokens correctly", async function () {
    await token.transfer(addr1.address, ethers.utils.parseUnits("500", 18));
    expect(await token.balanceOf(addr1.address)).to.equal(ethers.utils.parseUnits("500", 18));
  });

  it("should mint tokens", async function () {
    await token.mint(addr1.address, ethers.utils.parseUnits("1000", 18));
    expect(await token.balanceOf(addr1.address)).to.equal(ethers.utils.parseUnits("1000", 18));
  });

  it("should burn tokens", async function () {
    await token.burn(deployer.address, ethers.utils.parseUnits("500", 18));
    expect(await token.balanceOf(deployer.address)).to.equal(ethers.utils.parseUnits("1500", 18));
  });

  it("should approve and transferFrom correctly", async function () {
    await token.approve(addr1.address, ethers.utils.parseUnits("500", 18));
    await token.connect(addr1).transferFrom(deployer.address, addr2.address, ethers.utils.parseUnits("500", 18));
    expect(await token.balanceOf(addr2.address)).to.equal(ethers.utils.parseUnits("500", 18));
  });
});
