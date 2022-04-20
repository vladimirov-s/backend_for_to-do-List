const Task = require('../../db/models/task/index');


module.exports.createNewTask = (req, res) => {
  if (req.body.text.trim()) {
    const task = new Task(req.body);
    task.text = task.text.trim();
    task.save().then(result => {
      Task.find().then(result => {
        res.send({ data: result });
      });
    }).catch(err => console.log(err));
  } else {
    res.send({ data: 'Bring good title for your task' });
  }
};


module.exports.updateTaskInfo = (req, res) => {
  let { _id, text, isCheck } = req.body;
  text ? text = text.trim() : false;
  if (typeof isCheck == "string") {
    return res.status(423).send({ data: "Error! isCheck not correct" });
  }
  if (_id.trim()) {
    if (!text) {
      Task.updateOne({ _id: _id }, { isCheck: isCheck }, () => {
        Task.find().then(reult => {
          res.send({ data: reult });
        })
      }).clone().catch(err => console.log(err));
    } else if (text) {
      Task.updateOne({ _id: _id }, { text: text }, () => {
        Task.find().then(reult => {
          res.send({ data: reult });
        })
      }).clone().catch(err => console.log(err));
    } else { res.status(423).send({ data: "Wrong data" }); }
  } else {
    res.send({ data: "id of the user is incorrect" })
  }
};

module.exports.deleteAllTasks = (req, res) => {
  Task.deleteMany().then((result) => {
    res.send({ data: [] });
  }).catch(err => console.log(err));
};

module.exports.deleteTask = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Task.deleteOne({ _id: id }).then(() => {
      Task.find().then(result => {
        res.send({ data: result });
      })
    }).catch(err => console.log(err));
  }
};

module.exports.getAllTasks = (req, res) => {
  Task.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.getOneTask = (req, res) => {
  const id = req.query.id
  if (id) {
    Task.findOne({ _id: id }).then(result => {
      res.send({ data: result });
    }).catch(err => {
      res.send({ data: "Such object was not found. Determine your question, and try again" })
    })
  } else {
    return res.status(423).send({ data: "Wrong data." });
  }
}