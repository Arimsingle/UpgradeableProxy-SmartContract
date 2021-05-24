require('dotenv').config({ path: '../../.env' });
var ethers = require('ethers');
var abi = require('../abi');
let url = process.env.URL;
let provider = new ethers.providers.JsonRpcProvider(url);
let contractAddress = process.env.CONTRACT_ADDRESS;
let contract = new ethers.Contract(contractAddress, abi, provider);
module.exports = function getValue() {
    const connectContract = async () => {
        let value = await contract.retrieve();
        return value.toNumber();
    }
    return connectContract();
}


