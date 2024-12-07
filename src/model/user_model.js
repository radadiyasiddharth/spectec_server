const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique:false
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role:{
    type:String
  }
},{
  timestamps: true
});


const user = mongoose.model('user', userSchema);

module.exports = user;
