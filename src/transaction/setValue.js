require('dotenv').config({ path: '../../.env' });
var ethers = require('ethers');
var abi = require('../abi');
let url = process.env.URL;
let provider = new ethers.providers.JsonRpcProvider(url);
let contractAddress = process.env.CONTRACT_ADDRESS;
let contract = new ethers.Contract(contractAddress, abi, provider);
let privateKey = process.env.PRIVATE_KEY;
let wallet = new ethers.Wallet(privateKey, provider);
let contractWithSigner = contract.connect(wallet);
module.exports = function setValue(_value) {
    const connectContract = async () => {
        let tx = await contractWithSigner.store(_value);
        await tx.wait();
        let value = await contract.retrieve();
        return value.toNumber();
    }
    return connectContract();
}


