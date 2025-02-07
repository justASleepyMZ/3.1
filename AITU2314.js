import { expect } from "chai";
import hre from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers.js";

describe("AITU2314", function () {
  async function deployAITU2314Fixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();
    
    const aitu2314 = await hre.ethers.deployContract("AITU2314", [owner.address]);

    return { aitu2314, owner, otherAccount };
  }

  it("Should deploy with the correct initial supply", async function () {
    const { aitu2314, owner } = await loadFixture(deployAITU2314Fixture);

    const ownerBalance = await aitu2314.balanceOf(owner.address);
    expect(ownerBalance).to.equal(BigInt(10000) * BigInt(10) ** BigInt(18)); 
  });

  it("Should emit TransactionDetails event", async function () {
    const { aitu2314, owner, otherAccount } = await loadFixture(deployAITU2314Fixture);

    const amount = 1000;
    const tx = await aitu2314.getTransactionDetails(owner.address, otherAccount.address, amount);

    await expect(tx)
      .to.emit(aitu2314, "TransactionDetails")
      .withArgs(owner.address, otherAccount.address, amount, await time.latest());
  });

  it("Should return the latest transaction timestamp as a string", async function () {
    const { aitu2314 } = await loadFixture(deployAITU2314Fixture);

    const timestamp = await time.latest();
    const expectedTimestampString = `Timestamp: ${timestamp}`;

    expect(await aitu2314.getLatestTransactionTimestamp()).to.equal(expectedTimestampString);
  });

  it("Should return the transaction sender", async function () {
    const { aitu2314, owner } = await loadFixture(deployAITU2314Fixture);

    expect(await aitu2314.getTransactionSender()).to.equal(owner.address);
  });

  it("Should return the transaction receiver", async function () {
    const { aitu2314, otherAccount } = await loadFixture(deployAITU2314Fixture);

    const receiver = otherAccount.address;
    expect(await aitu2314.getTransactionReceiver(receiver)).to.equal(receiver);
  });

  it("Should store the correct initial balance", async function () {
    const { aitu2314 } = await loadFixture(deployAITU2314Fixture);

    const storedBalance = await aitu2314.balanceOf(await aitu2314.owner());
    expect(storedBalance).to.equal(BigInt(10000) * BigInt(10) ** BigInt(18));
  });
});
