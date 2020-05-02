const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/aboutme", bookRoutes);

module.exports = router;
