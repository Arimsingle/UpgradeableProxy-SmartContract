// migrations/4_upgrade_box.js
const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Box = artifacts.require('Box');
const BoxV2 = artifacts.require('BoxV2');

module.exports = async function (deployer) {
  const existing = await Box.deployed();
  // const _boxV2 = await BoxV2.at(existing.address)
  // console.log(_boxV2);
  await upgradeProxy(existing.address, BoxV2, { deployer });
};