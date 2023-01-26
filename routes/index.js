const express = require('express');

const router = new express.Router();

router.get("/todos", require("../controllers/TodosController"));

router.post("/todo", require("../controllers/CreateTodoController"))

module.exports = router;