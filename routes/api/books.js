const router = require("express").Router();
const AboutMe = require("./../../src/pages/aboutMe");
const Contact = require("./../../src/pages/contact");
const Portfolio = require("./../../src/pages/portfolio");

router.route("/aboutme")
  .get(AboutMe)
  .post(AboutMe);

router.route("/contact")
  .get(Contact)
  .post(Contact);

router.route("/portfolio")
  .get(Portfolio)
  .post(Portfolio);

module.exports = router;
