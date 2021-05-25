require('dotenv').config({ path: '../../.env' });
let ethers = require('ethers');
let abiBox2 = require('../../abiBoxV2');
let url = process.env.URL;
let provider = new ethers.providers.JsonRpcProvider(url);
let contractAddress = process.env.CONTRACT_ADDRESS;
let contractV2 = new ethers.Contract(contractAddress, abiBox2, provider);
module.exports = function getValue2() {
    const connectContract = async () => {
        let value = await contractV2.retrieve();
        return value.toNumber();
    }
    return connectContract();
}


