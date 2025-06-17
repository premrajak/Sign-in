const expree = require("express");
const {handleUserSignup, handleUserLogin} = require("../controllers/user") ;

const router = expree.router();

router.post ('/', handleUserSignup);
router.post ('/login', handleUserSignup);

module.exports = router;