import { expect } from "chai";
import hre from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers.js";

describe("AITU2314modif", function () {
  async function deployAITU2314modifFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();
    
    const initialValue = 10000;  
    const aitu2314modif = await hre.ethers.deployContract("AITU2314modif", [owner.address, initialValue]);

    return { aitu2314modif, owner, otherAccount, initialValue };
  }

  it("Should deploy with the correct initial supply", async function () {
    const { aitu2314modif, owner, initialValue } = await loadFixture(deployAITU2314modifFixture);

    const ownerBalance = await aitu2314modif.balanceOf(owner.address);
    expect(ownerBalance).to.equal(BigInt(initialValue) * BigInt(10) ** BigInt(18)); 
  });

  it("Should emit TransactionDetails event", async function () {
    const { aitu2314modif, owner, otherAccount } = await loadFixture(deployAITU2314modifFixture);

    const amount = 1000;
    const tx = await aitu2314modif.getTransactionDetails(owner.address, otherAccount.address, amount);

    await expect(tx)
      .to.emit(aitu2314modif, "TransactionDetails")
      .withArgs(owner.address, otherAccount.address, amount, await time.latest());
  });

  it("Should return the latest transaction timestamp as a string", async function () {
    const { aitu2314modif } = await loadFixture(deployAITU2314modifFixture);

    const timestamp = await time.latest();
    const expectedTimestampString = `Timestamp: ${timestamp}`;

    expect(await aitu2314modif.getLatestTransactionTimestamp()).to.equal(expectedTimestampString);
  });

  it("Should return the transaction sender", async function () {
    const { aitu2314modif, owner } = await loadFixture(deployAITU2314modifFixture);

    expect(await aitu2314modif.getTransactionSender()).to.equal(owner.address);
  });

  it("Should return the transaction receiver", async function () {
    const { aitu2314modif, otherAccount } = await loadFixture(deployAITU2314modifFixture);

    const receiver = otherAccount.address;
    expect(await aitu2314modif.getTransactionReceiver(receiver)).to.equal(receiver);
  });

  it("Should store the correct initialValue", async function () {
    const { aitu2314modif, initialValue } = await loadFixture(deployAITU2314modifFixture);

    const storedInitialValue = await aitu2314modif.initialValue();
    expect(storedInitialValue).to.equal(initialValue);
  });
});
