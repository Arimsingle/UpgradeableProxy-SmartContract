var ethers = require('ethers');
let abiBox2 = require('../../abiBoxV2');
let { contractAddress, url, privateKey } = require('../../shared/variables');
let provider = new ethers.providers.JsonRpcProvider(url);
let contract = new ethers.Contract(contractAddress, abiBox2, provider);
let wallet = new ethers.Wallet(privateKey, provider);
let contractWithSigner = contract.connect(wallet);
module.exports = function setValue2(_value) {
    const connectContract = async () => {
        let tx = await contractWithSigner.store(_value);
        await tx.wait();
        let value = await contract.retrieve();
        return value.toNumber();
    }
    return connectContract();
}
module.exports = function Increment() {
    const connectContract = async () => {
        let tx = await contractWithSigner.increment();
        await tx.wait();
        let value = await contract.retrieve();
        return value.toNumber();
    }
    return connectContract();
}


