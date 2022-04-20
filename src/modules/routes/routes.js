const express = require('express');
const router = express.Router();
const {
  getOneTask,
  getAllTasks,
  createNewTask,
  updateTaskInfo,
  deleteAllTasks,
  deleteTask
} = require('../controllers/task.controller');

router.get('/getOneTask', getOneTask);
router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.patch('/updateTask', updateTaskInfo);
router.delete('/deleteTask', deleteTask);
router.delete('/deleteAll', deleteAllTasks);

module.exports = router;