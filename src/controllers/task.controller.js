const Task = require("../models/task-model");

module.exports.createNewTask = (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.status(400).send());
};

module.exports.updateTaskInfo = (req, res) => {
  const { text, isCheck } = req.body;
  const id = req.params.id;

  Task.findByIdAndUpdate(id, { text, isCheck }, { returnDocument: "after" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.error(err));
};

module.exports.deleteAllTasks = (req, res) => {
  Task.deleteMany()
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => res.status(400).send());
};

module.exports.deleteTask = (req, res) => {
  const id = req.params.id;
  Task.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.status(400).send());
};

module.exports.getAllTasks = (req, res) => {
  Task.find().then((result) => {
    res.send(result);
  });
};

module.exports.getOneTask = (req, res) => {
  const id = req.params.id;
  if (id) {
    Task.findById(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(
          "Such object was not found. Determine your question, and try again"
        );
      });
  } else {
    return res.status(423).send("Wrong data.");
  }
};
