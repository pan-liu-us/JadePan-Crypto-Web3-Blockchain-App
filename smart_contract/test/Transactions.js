const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Transactions", function () {
  it("Should return the right transaction count", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();

    await transactions.deployed();

    expect(await transactions.getAllTransactionCounts()).to.equal(0);
  });
});
