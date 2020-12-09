
const gretting = (req, res) => {
    res.json({
        message: 'Hello since API in Node JS'
    })
}

const test = (req, res) => {
    res.json({
        message: 'Hello at Test'
    })
}


module.exports = {
    gretting,
    test
}




