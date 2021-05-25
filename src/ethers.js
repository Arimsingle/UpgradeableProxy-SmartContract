require('dotenv').config({ path: '../.env' });

var ethers = require('ethers');
var abi = require('./abi/abiBox');
let url = "http://127.0.0.1:9545/";
let provider = new ethers.providers.JsonRpcProvider(url);
let contractAddress = "0xe49106E4E96f448D548e160bf43e7718Ec290FDD";
let contract = new ethers.Contract(contractAddress, abi, provider);

// A Signer from a private key
let privateKey = '0x1cd354dc5dc01a25139e313aecc0a1e12686e46231709fecd00a93f1efd08de1';
let wallet = new ethers.Wallet(privateKey, provider);

// Create a new instance of the Contract with a Signer, which allows
// update methods
let contractWithSigner = contract.connect(wallet);
// ... OR ...
// let contractWithSigner = new Contract(contractAddress, abi, wallet)



const connectContract = async () => {
    // let currentValue = await contract.retrieve();
    // console.log(currentValue._hex);
    // Call the Contract's getValue() method again
    // Set a new Value, which returns the transaction
    let tx = await contractWithSigner.store(10);

    // See: https://ropsten.etherscan.io/tx/0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364
    console.log(tx.hash);
    // "0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364"

    // The operation is NOT complete yet; we must wait until it is mined
    await tx.wait();
    let newValue = await contract.retrieve();
    console.log(newValue.toNumber());
}

connectContract()

