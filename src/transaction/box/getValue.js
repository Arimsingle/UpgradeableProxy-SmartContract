var ethers = require('ethers');
var abi = require('../../abi/abiBox');
let { contractAddress, url } = require('../../shared/variables');
let provider = new ethers.providers.JsonRpcProvider(url);
let contract = new ethers.Contract(contractAddress, abi, provider);
module.exports = function getValue() {
    const connectContract = async () => {
        let value = await contract.retrieve();
        return value.toNumber();
    }
    return connectContract();
}


