const express = require("express");
const router = express.Router();
const passport = require("passport");
require("./passport");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    try {
      // res.send(req.user);
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  }
);

// router.get("/oauth/profile", (req, res) => {
//   try {
//     console.log("user", req.user);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

router.get("/oauth/logout", (req, res) => {
  try {
    req.session = null;
    req.logout();
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
