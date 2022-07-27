const express = require("express");
const router = express.Router();
const {
  getOneTask,
  getAllTasks,
  createNewTask,
  updateTaskInfo,
  deleteAllTasks,
  deleteTask,
} = require("../controllers/task.controller");

router.get("/", getAllTasks);
router.post("/", createNewTask);
router.delete("/", deleteAllTasks);
router.patch("/:id", updateTaskInfo);
router.get("/:id", getOneTask);
router.delete("/:id", deleteTask);

module.exports = router;
