/** Routes for authentication. */

const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const createToken = require("../helpers/createToken");


router.post("/login", async function(req, res, next) {
  try {
    const user = await User.authenticate(req.body);
    const token = createToken(user);
    res.set('Access-Control-Allow-Origin', '*');
    return res.json({ token });
  } catch (e) {
    console.log('---Error auth routes /login',e)
    return next(e);
  }
});


module.exports = router;
