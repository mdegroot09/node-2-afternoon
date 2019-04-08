const axios = require('axios')

let messages = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.send(messages)
  },

  update: (req, res) => {
    const {text} = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];
    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.send(messages);
  },

  create: (req, res) => {
    const {text, time} = req.body;
    id++;
    messages.push({id, text, time});
    res.status(200).send(messages);
  }, 

  delete: (req, res) => {
    let index = messages.findIndex(message => +message.id === +id)
    messages.splice(index, 1)
    res.send(messages)
  }
}