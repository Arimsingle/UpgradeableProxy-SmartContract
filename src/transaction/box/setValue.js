let ethers = require('ethers');
let abi = require('../../abiBox');
let { contractAddress, url, privateKey } = require('../../shared/variables');
let provider = new ethers.providers.JsonRpcProvider(url);
let contract = new ethers.Contract(contractAddress, abi, provider);
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


