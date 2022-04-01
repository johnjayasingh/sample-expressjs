const router = require('express').Router();

const { 
    createWallet
}  = require('../controllers/wallet')

router.post('/', createWallet);

module.exports = router;
