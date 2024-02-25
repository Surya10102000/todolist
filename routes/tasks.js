const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    getTask,
    createTask,
    updataTask,
    deleteTasks
} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updataTask).delete(deleteTasks)


module.exports = router