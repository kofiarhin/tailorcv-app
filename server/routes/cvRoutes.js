const { Router } = require("express");
const { createCv } = require("../controllers/cvController");

const router = Router();

router.post("/", createCv);

module.exports = router;
