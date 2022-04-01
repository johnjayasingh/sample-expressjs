const axios = require('axios').default;

exports.createWalletOnGoogle = (walletId) => {
    return axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        title: 'foo',
        walletId
    })
}