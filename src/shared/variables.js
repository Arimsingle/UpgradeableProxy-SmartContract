require('dotenv').config({ path: '../../.env' });
let url = process.env.URL;
let contractAddress = process.env.CONTRACT_ADDRESS;
let privateKey = process.env.PRIVATE_KEY;
module.exports = {
    contractAddress,
    url, privateKey
}