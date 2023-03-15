const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    name: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  species: {
    type: String,
    species: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  photo:{
    type: String,
    photo:[false],
    trim:true,
  },

    

  
})

module.exports = mongoose.model('Model', TaskSchema)
