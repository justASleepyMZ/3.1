// test/UniversityGroupToken-test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UniversityGroupToken", function () {
  it("Should deploy the contract and mint initial tokens", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("UniversityGroupToken");
    const token = await Token.deploy(1000000, owner.address);  // 1 миллион токенов

    expect(await token.balanceOf(owner.address)).to.equal(1000000 * 10 ** 18);
  });

  it("Should transfer tokens", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("UniversityGroupToken");
    const token = await Token.deploy(1000000, owner.address);  // 1 миллион токенов

    await token.transfer(addr1.address, 1000);
    expect(await token.balanceOf(addr1.address)).to.equal(1000);
  });
});
