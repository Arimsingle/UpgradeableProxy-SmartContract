require('dotenv').config({ path: '../.env' });
let express = require('express')
let app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let getValue = require('./transaction/getValue');
let setValue = require('./transaction/setValue');

app.get('/', async (req, res) => {
    try {
        res.send({
            message: "Proxy SmartContract"
        })
    } catch (error) {
        res.send({
            status: 400,
            message: "Call method faild",
            result: error.reason
        })
    }
})

app.get('/retrieve', async (req, res) => {
    try {
        res.send({
            status: 200,
            message: "Call method success",
            mathod: "retrieve()",
            result: await getValue()
        })
    } catch (error) {
        res.send({
            status: 400,
            message: "Call method faild",
            mathod: "retrieve()",
            result: error.reason
        })
    }
})
app.post('/store', async (req, res) => {
    try {
        let input = (req.body.value || req.body.number);
        res.send({
            status: 200,
            message: "Call method success",
            mathod: "store()",
            result: await setValue(input)
        })
    } catch (error) {
        res.send({
            status: 400,
            message: "Call method faild",
            mathod: "store()",
            result: error.reason
        })
    }
})

app.listen(process.env.PORT_EXPRESS, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT_EXPRESS}`)
})