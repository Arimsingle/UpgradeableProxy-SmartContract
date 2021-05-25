
require('dotenv').config({ path: '../.env' });
let express = require('express')
let app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let getValue = require('./transaction/box/getValue');
let getValue2 = require('./transaction/box2/getValue');
let setValue = require('./transaction/box/setValue');
let setValue2 = require('./transaction/box2/setValue');
let Increment = require('./transaction/box2/setValue');

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

app.get('/box/retrieve', async (req, res) => {
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
app.get('/box2/retrieve', async (req, res) => {
    try {
        res.send({
            status: 200,
            message: "Call method success",
            mathod: "retrieve()",
            result: await getValue2()
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
app.post('/box/store', async (req, res) => {
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
app.post('/box2/store', async (req, res) => {
    try {
        let input = (req.body.value || req.body.number);
        res.send({
            status: 200,
            message: "Call method success",
            mathod: "store()",
            result: await setValue2(input)
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
app.post('/box2/increment', async (req, res) => {
    try {
        res.send({
            status: 200,
            message: "Call method success",
            mathod: "store()",
            result: await Increment()
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
    console.log(`Server listening at http://localhost:${process.env.PORT_EXPRESS}`)
})