const {
    createWalletOnGoogle
}  = require('../services/wallet');

exports.createWallet = (req, res) => {
    return createWalletOnGoogle('test').then((response) => {
        res.json(response.data)
    })
}